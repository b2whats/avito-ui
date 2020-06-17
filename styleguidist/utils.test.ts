import { filterMarkdown } from './utils'

describe('utils', () => {
  describe(filterMarkdown, () => {
    const makeMd = (...items: (string | any)[]) => items.map(content =>
      typeof content === 'string'
      ? ({ type: 'markdown', content: content.replace(/\n\s+/g, '\n') }) as any
      : content)

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
        `), 'web')).toMatchObject(makeMd(`
          yes
          web
        `))
      })
      it('removes partitioned blocks', () => {
        expect(filterMarkdown(makeMd(`
          yes
          ::: platform mobile
        `, `
          disabled content
        `, `
          :::
          end
        `), 'web')).toMatchObject(makeMd(`
          yes`,
        { type: 'skip' }, `
          end
        `))
      })
    })

    describe('detects errors', () => {
      let spy: any
      beforeEach(() => spy = jest.spyOn(console, 'error').mockImplementation())
      afterEach(() => spy.mockRestore())

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
