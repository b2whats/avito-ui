import * as React from 'react'
import { keyframes } from '@emotion/core'
import styled from '@emotion/styled'

const firstDot = keyframes`
  0% { opacity: 0.2 };
  25% { opacity: 1 };
  50% { opacity: 0.2 };
  75% { opacity: 0.2 };
  100% { opacity: 0.2 };
`

const secondDot = keyframes`
  0% { opacity: 0.2 };
  25% { opacity: 0.2 };
  50% { opacity: 1 };
  75% { opacity: 0.2 };
  100% { opacity: 0.2 };
`

const thirdDot = keyframes`
  0% { opacity: 0.2 };
  25% { opacity: 0.2 };
  50% { opacity: 0.2 };
  75% { opacity: 1 };
  100% { opacity: 0.2 };
`

const DotsContainer = styled('div')`
  font-size: 12px;
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;

  & > * {
    background-color: white;
    margin: 0 0.1em;
    width: 0.5em;
    height: 0.5em;
    border-radius: 50%;
    opacity: 0;
  }
`

const DotOne = styled('div')`
  animation: ${firstDot} 3s ease-in-out infinite;
`

const DotTwo = styled('div')`
  animation: ${secondDot} 3s ease-in-out infinite;
`

const DotThree = styled('div')`
  animation: ${thirdDot} 3s ease-in-out infinite;
`

const DotsLoader = () => {
  return (
    <DotsContainer>
      <DotOne />
      <DotTwo />
      <DotThree />
    </DotsContainer>
  )
}

export default DotsLoader
