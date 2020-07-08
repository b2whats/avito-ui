export const markerId = (main?: string, part?: string | number, index?: string | number) => part !== undefined
  ? `${main}/${part}` + (index ? `(${index})` : '')
  : main

export const withMarker = (main?: string) => (part?: string | number, index?: string | number) => main ? ({
  'data-marker': markerId(main, part, index),
}) : undefined

