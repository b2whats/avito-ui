import React, { useRef, useLayoutEffect } from 'react'
import { styled } from '@avito/core'

type ScrollBoxProps = {
  height?: number,
  bgColor?: string,
  children: React.ReactNode,
}

const Container = styled('div')<ScrollBoxProps>`
  box-sizing: border-box;
  position: relative;
  background-color: aliceblue;
  border-radius: 5px;
  overflow: auto;
  border: 1px solid #e8e8e8;
  height: ${({ height }) => height}px;
  background-color: ${({ bgColor }) => bgColor};
`

const Scroll = styled('div')`
  overflow: auto;
`

const Area = styled('div')`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200vw;
  height: 200vh;
`

const Toggle = styled('div')`
  box-sizing: border-box;
  color: #3F51B5;
  position: sticky;
  left: 0;
  top: 0;
  padding: 6px 10px;
  font-size: 14px;
  font-family: Helvetica;
  cursor: pointer;
`

export const ScrollBox = (props: ScrollBoxProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const areaRef = useRef<HTMLDivElement | null>(null)

  const scrollToCenter = () => {
    const container = containerRef.current
    const area = areaRef.current

    if (container && area) {
      container.scrollTop =
        area.offsetTop +
        area.clientHeight / 2 -
        container.clientHeight / 2

      container.scrollLeft =
        area.offsetLeft +
        area.clientWidth / 2 -
        container.clientWidth / 2
    }
  }

  useLayoutEffect(() => {
    scrollToCenter()
  }, [])

  return (
    <Container {...props} ref={containerRef}>
      <Toggle onClick={scrollToCenter}>Centerig</Toggle>
      <Area ref={areaRef}>
        {props.children}
      </Area>
    </Container>
  )
}

ScrollBox.defaultProps = {
  height: 400,
  bgColor: 'aliceblue',
}