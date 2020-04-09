export const platformFromPath = (path: string) => {
  if (/\/web-components\//.test(path)) {
    return 'web'
  }
  if (/\/mobile-components\//.test(path)) {
    return 'mobile'
  }
  return 'universal'
}
