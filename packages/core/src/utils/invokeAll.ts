export function invokeAll<Cb extends ((...args: any[]) => any)>(...callbacks: (Cb | undefined)[]) {
  return ((...args) => callbacks.forEach(cb => cb ? cb(...args) : null)) as Cb
}
