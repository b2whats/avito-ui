export interface FormatCountOptions {
  max?: number
  showZero?: boolean
  preserveNegative?: boolean
}

export function formatCount(value?: string | number | null, options: FormatCountOptions = {}): string {
  const {
    max = 99,
    showZero = false,
    preserveNegative = false,
  } = options

  const numeric = Math.max(Number(value), preserveNegative ? -Infinity : 0)
  if ((!value && value !== 0) || (numeric === 0 && !showZero)) return ''
  if (Number.isNaN(numeric)) return String(value)
  if (numeric > max) return `${max}+`
  return String(numeric)
}
