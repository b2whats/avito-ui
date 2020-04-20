import { filterMarkdown  } from './utils'

describe('utils', () => {
  describe(filterMarkdown, () => {
    const makeMd = (...items: string[]) => items.map(content => ({
      type: 'markdown' as 'markdown',
      content: content.replace(/\n\s+/g, '\n'),
    }))

    describe('filters by platform', () => {
      it('removes blocks for other platforms', () => {
        expect(filterMarkdown(makeMd(`
          yes
          ::: platform web
          web
          :::
          ::: platform mobile
          mobile
          :::
        `), 'web')).toMatchObject([
          { type: 'markdown', content: '\nyes' },
          { type: 'markdown', content: '\nweb' },
          { type: 'skip' },
        ])
      })
    })

    describe('detects errors', () => {
      it('unexpected block end', () => {
        expect(() => filterMarkdown(makeMd(`
          :::
        `), 'web')).toThrow()
      })

      it('unterminated block', () => {
        expect(() => filterMarkdown(makeMd(`
          ::: platform web
        `), 'web')).toThrow()
      })

      it('nested conditional blocks', () => {
        expect(() => filterMarkdown(makeMd(`
          ::: platform web
          ::: platform mobile
          web & mobile
          :::
          :::
        `), 'web')).toThrow()
      })
    })
  })
})
