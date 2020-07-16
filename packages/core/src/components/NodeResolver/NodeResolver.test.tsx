import React from 'react'
import { render } from '../../../test'
import { NodeResolver } from './'

describe.skip('NodeResolver', () => {
  it('resolves node', () => {
    const innerRef = React.createRef<HTMLDivElement>()
    const outerRef = React.createRef<HTMLDivElement>()
    render(
      <NodeResolver ref={outerRef}>
        <div ref={innerRef} />
      </NodeResolver>
    )
    expect(outerRef.current).toBeTruthy()
    expect(innerRef.current).toEqual(outerRef.current)
  })

  it('resolves node inside component', () => {
    const innerRef = React.createRef<HTMLDivElement>()
    const outerRef = React.createRef<HTMLDivElement>()
    const Wrapper = () => <div ref={innerRef} />
    render(
      <NodeResolver ref={outerRef}>
        <Wrapper />
      </NodeResolver>
    )
    expect(outerRef.current).toBeTruthy()
    expect(innerRef.current).toEqual(outerRef.current)
  })

  it('resolves node in fragment', () => {
    const innerRef = React.createRef<HTMLDivElement>()
    const outerRef = React.createRef<HTMLDivElement>()
    render(
      <NodeResolver ref={outerRef}>
        <>
          <div ref={innerRef} />
        </>
      </NodeResolver>
    )
    expect(outerRef.current).toBeTruthy()
    expect(innerRef.current).toEqual(outerRef.current)
  })

  it('resolves first node', () => {
    const innerRef = React.createRef<HTMLDivElement>()
    const outerRef = React.createRef<HTMLDivElement>()
    render(
      React.createElement(NodeResolver, { ref: outerRef } as any, [
        <div ref={innerRef} key={1} />,
        <div key={2} />,
      ] as any)
    )
    expect(outerRef.current).toBeTruthy()
    expect(innerRef.current).toEqual(outerRef.current)
  })

  it('adds no extra markup', () => {
    const ref = React.createRef<HTMLDivElement>()
    const { container, debug } = render(
      <NodeResolver ref={ref}>
        <div />
      </NodeResolver>
    )
    debug(container)
    expect(container.firstElementChild).toEqual(ref.current)
    expect(container.childElementCount).toEqual(1)
  })
})
