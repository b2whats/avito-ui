type Id = string | number
export const markerId = (main?: string, part?: Id, index?: Id) => part !== undefined
  ? `${main}/${part}` + (index ? `(${index})` : '')
  : main

export const withMarker = (main?: string) => {
  const marker = (part?: Id, index?: Id) => {
    if (!main) return
    let id = main
    if (part) id += `/${part}`
    if (index) id += `(${index})`

    return id
  }
  const testId = (part?: Id, index?: Id) => main ? ({ 'data-marker': marker(part, index) }) : undefined

  return [testId, marker] as const
}
