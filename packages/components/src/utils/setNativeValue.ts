export default (element: HTMLElement | null, value: any) => {
  if (!element) return
  
  const elementDescriptor = Object.getOwnPropertyDescriptor(element, 'value')
  const valueSetter = elementDescriptor ? elementDescriptor.set : null
  const prototype = Object.getPrototypeOf(element)
  const prototypeDescriptor = Object.getOwnPropertyDescriptor(prototype, 'value')
  const prototypeValueSetter = prototypeDescriptor ? prototypeDescriptor.set : null

  if (!valueSetter || !prototypeValueSetter) return

  if (value === '') {
    valueSetter.call(element, null)
  }

  if (valueSetter && valueSetter !== prototypeValueSetter) {
    prototypeValueSetter.call(element, value)
  } else {
    valueSetter.call(element, value)
  }

  let event

  if (typeof Event === 'function') {
    event = new Event('input', {
      bubbles: true,
      cancelable: false,
    })
  } else {
    event = document.createEvent('Event')
    event.initEvent('input', true, false)
  }
  element.dispatchEvent(event)
}