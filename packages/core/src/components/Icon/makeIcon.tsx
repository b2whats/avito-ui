import React, { ReactNode, FunctionComponent, memo } from 'react'
import { BaseIconProps, IconProps } from './contract'
import { Icon } from './Icon'

export function makeIcon(
  baseProps: Omit<BaseIconProps, 'children'>,
  children: ReactNode | FunctionComponent<IconProps>
) {
  const Cmp = memo((props: IconProps) => (
    <Icon {...props} {...baseProps}>
      {typeof children === 'function' ? children(props) : children}
    </Icon>
  ))
  Cmp.displayName = baseProps.name.replace(/(^|-)([a-z])/g, (_, _1, char) => char.toUpperCase())
  return Cmp as typeof Cmp & { category?: string, platform?: string }
}
