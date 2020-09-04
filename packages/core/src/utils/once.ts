export function once<EventType extends Event>(cb: (e: EventType) => any): typeof cb {
  return function autoRemove(this: HTMLElement, event: EventType) {
    this.removeEventListener(event.type as any, autoRemove)
    return cb(event)
  }
}
