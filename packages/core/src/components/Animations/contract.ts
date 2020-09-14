import { ComponentType } from 'react'
import { CommonAttributes } from '../../utils'

export interface AppearAnimationProps extends CommonAttributes {
  show?: boolean
  as?: ComponentType
  cacheChildrenOnExit?: boolean
  appear?: boolean
}
