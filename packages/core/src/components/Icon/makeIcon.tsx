import React, { ReactNode, FunctionComponent } from 'react'
import { uiComponent } from '../../theme'
import { BaseIconProps, IconProps } from './contract'
import { Icon } from './Icon'

export function makeIcon<ExtraProps = {}>(
  baseProps: Omit<BaseIconProps, 'children'>,
  children: ReactNode | FunctionComponent<IconProps & ExtraProps>
) {
  const name = `Icon${baseProps.name.replace(/(?:^|-)([a-z])/g, (_, char) => char.toUpperCase())}`
  const WrappedIcon = uiComponent(name)((props: IconProps & ExtraProps) => (
    <Icon {...props as IconProps} {...baseProps}>
      {typeof children === 'function' ? children(props) : children}
    </Icon>
  ))
  return WrappedIcon as typeof WrappedIcon & { category?: string, platform?: string }
}
