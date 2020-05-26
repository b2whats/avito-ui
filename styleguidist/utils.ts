export const platformFromPath = (path: string) => {
  if (/\/web-components\//.test(path)) {
    return 'web'
  }
  if (/\/mobile-components\//.test(path)) {
    return 'mobile'
  }
  return 'universal'
}

const skip = (index: number) => ({ type: 'skip', index }) as const

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
export function filterMarkdown(examples: Example[], targetPlatform: string) {
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
      return skip(item.index)
    }

    if (blockEndRE.test(item.content)) {
      if (!isInsideBlock) {
        fail(`Block end delimiter found outside block in "${item.content}"`, item)
      }
      isInsideBlock = false
      isSkipping = false
      return skip(item.index)
    }

    // Preserve example positions to use styleguidist's index-based react keys
    return isSkipping ? skip(item.index) : item
  }) as Example[]
  if (isInsideBlock) {
    fail('Unterminated block')
  }
  return restoreIndexing(res)
}

function splitMarkdownConditionals(markdown: Example[]) {
  return markdown.reduce((acc, item, index) =>
    acc.concat(item.type === 'code'
      ? { ...item, index }
      : item.content.split(/(?:^|\n)\s*(:::[^\n]*)/)
        .filter(c => c.length)
        .map(content => ({ ...item, content, index }))),
    [] as Example[])
}

function restoreIndexing(split: Example[]) {
  const res: Example[] = []
  split.forEach(item => {
    const base = res[item.index!] || ({ type: 'skip', content: '' }) as Example
    if (item.type !== 'skip') {
      Object.assign(base, item, { content: base.content + item.content })
    }
    res[item.index!] = base
  })
  return res
}

type Example = {
  type: 'markdown' | 'code' | 'skip',
  content: string,
  index: number
}
const conditionRE = /^::: *platform +(\w+) *$/
const blockEndRE = /^::: *$/
const condPlatform = (text: string) => (text.match(conditionRE) || [])[1]?.trim()
