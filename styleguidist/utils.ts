import { Theme } from './store'

export const platformFromPath = (path: string) => {
  if (/\/web-components\//.test(path)) {
    return 'web'
  }
  if (/\/mobile-components\//.test(path)) {
    return 'mobile'
  }
  return 'universal'
}

/**
 * Extended markdown for platform-specific example rendering:
 *
 * ::: platform mobile
 * <mobile-specific content>
 * :::
 *
 * Inspired by https://v1.vuepress.vuejs.org/guide/markdown.html#custom-containers
 * Nested conditional blocks are disallowed.
 */
export function filterMarkdown(examples: Example[], targetPlatform: Theme) {
  let isSkipping = false
  let isInsideBlock = false
  const fail = (message: string, item?: any) => {
    console.error(examples.map(e => `${e === item ? 'ERROR >>> ' : ''} ${e.content}`))
    throw new Error(message)
  }
  const res = splitMarkdownConditionals(examples).map((item) => {
    if (conditionRE.test(item.content)) {
      if (isInsideBlock) {
        fail('Nested conditional blocks not allowed', item)
      }
      isInsideBlock = true
      isSkipping = targetPlatform !== condPlatform(item.content)
      return
    }

    if (blockEndRE.test(item.content)) {
      if (!isInsideBlock) {
        fail(`Block end delimiter found outside block in "${item.content}"`, item)
      }
      isInsideBlock = false
      isSkipping = false
      return
    }

    // Preserve example positions to use styleguidist's index-based react keys
    return isSkipping ? { type: 'skip' as const } : item
  }).filter(b => b != null && (b.type === 'skip' || b.content.trim())) as Example[]
  if (isInsideBlock) {
    fail('Unterminated block')
  }
  return res
}

function splitMarkdownConditionals(markdown: Example[]) {
  return markdown.reduce((acc, item) =>
    acc.concat(item.type === 'code'
      ? item
      : item.content.split(/(?:^|\n)\s*(:::[^\n]*)/)
        .filter(c => c.length)
        .map(content => ({ ...item, content }))),
    [] as Example[])
}

type Example = {
  type: 'markdown' | 'code' | 'skip',
  content: string
}
const conditionRE = /^::: *platform +(\w+) *$/
const blockEndRE = /^::: *$/
const condPlatform = (text: string) => (text.match(conditionRE) || [])[1]?.trim()
