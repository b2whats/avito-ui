export function formatCount(value?: string | number | null, max = 99): string {
  const numeric = Number(value)
  if (!value || numeric <= 0) return ''
  if (Number.isNaN(numeric)) return String(value)
  if (numeric > max) return `${max}+`
  return String(numeric)
}
