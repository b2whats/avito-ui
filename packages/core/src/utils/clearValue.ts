/**
 * clear editable element using execCommand to preserve undo history
 * NOTE: element must be focusable — not disabled / readOnly
 */
export function clearValue(element: HTMLElement | null) {
  if (!element) return

  element.focus()
  if (document.activeElement !== element) {
    throw new Error('@avito: can not clear a non-focusable element')
  }

  document.execCommand('selectAll')
  document.execCommand('delete')

  if (Boolean((element as any).value)) {
    throw new Error('@avito: element clear failed')
  }
}