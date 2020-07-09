import React, { ReactNode, FunctionComponent, memo } from 'react'
import { BaseIconProps, IconProps } from './contract'
import { Icon } from './Icon'

export function makeIcon<ExtraProps = {}>(
  baseProps: Omit<BaseIconProps, 'children'>,
  children: ReactNode | FunctionComponent<IconProps & ExtraProps>
) {
  const WrappedIcon = memo((props: IconProps & ExtraProps) => (
    <Icon {...props as IconProps} {...baseProps}>
      {typeof children === 'function' ? children(props) : children}
    </Icon>
  ))
  WrappedIcon.displayName = baseProps.name.replace(/(?:^|-)([a-z])/g, (_, char) => char.toUpperCase())
  return WrappedIcon as typeof WrappedIcon & { category?: string, platform?: string }
}
