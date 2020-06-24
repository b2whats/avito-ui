const hasPerformance = Boolean(typeof performance !== 'undefined' && performance.mark && performance.measure)

export class Profiler {
  private namespace = 'avitoCore'
  private scope = [this.namespace]
  private managedNames = new Set<string>()

  private isActive = hasPerformance
  public enable() {
    this.isActive = hasPerformance && true
  }
  public disable() {
    this.isActive = false
  }

  private manageName = (...parts: string[]) => {
    const name = [...this.scope, ...parts].join('.')
    this.managedNames.add(name)
    return name
  }

  public start(name: string) {
    if (!this.isActive) return
    this.scope.push(name)
    performance.mark(this.manageName('start'))
  }

  public end(name: string) {
    if (!this.isActive) return
    if (this.scope[this.scope.length - 1] !== name) {
      throw new Error(`profiler: ${name} is not the current scope`)
    }
    performance.mark(this.manageName('end'))
    performance.measure(this.manageName(), this.manageName('start'), this.manageName('end'))
    this.scope.pop()
  }

  public withMeasure = (name: string) => <Fun extends (...args: any[]) => any>(fun: Fun) => {
    return ((...args) => {
      if (!this.isActive) return fun(...args)

      this.start(name)
      const res = fun(...args)
      this.end(name)
      return res
    }) as Fun
  }

  public clearOwnEntries() {
    this.managedNames.forEach(name => {
      performance.clearMarks(name)
      performance.clearMeasures(name)
    })
    this.managedNames.clear()
  }

  public getOwnEntries(entryType = 'measure') {
    const measures: PerformanceEntry[] = []
    this.managedNames.forEach(name => {
      measures.push(...performance.getEntriesByName(name).filter(entry => entry.entryType === entryType))
    })
    return measures
  }
}

export const profiler = new Profiler()
