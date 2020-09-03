import React, { cloneElement, ComponentType, ReactElement, ReactChildren, ReactChild } from 'react'
import { uiComponent, UiComponentProps } from '../../theme'
import { omit, pick, TrueMap } from '../../utils'
import { Box } from '../Layout'
import { BoxProps } from './contract'

type OverPositioningProps = {
  children?: ReactChildren | ReactChild
  /* Прицепить к верху (или отступ) */
  snapTop?: boolean | number
  /* Прицепить к правому краю (или отступ) */
  snapRight?: boolean | number
  /* Прицепить к низу (или отступ) */
  snapBottom?: boolean | number
  /* Прицепить к левому краю (или отступ) */
  snapLeft?: boolean | number
}

type OverOptions<Props, SlotName extends string> = {
  slot: SlotName
  pickProps: TrueMap<Exclude<keyof Props, keyof BoxProps | keyof UiComponentProps<any, any>>>
}

export function makeOverlay<Props, SlotName extends string>(
  Component: ComponentType<Props>,
  options: OverOptions<Props, SlotName>
) {
  const name = `${Component.displayName || ''}Over`
  type SlotProps = {
    /* Слот для кастомизированного элемента */
    [name in SlotName]?: ReactElement
  }
  const { pickProps, slot } = options
  return uiComponent(name, {}, { memo: false })<Props & SlotProps & OverPositioningProps>((props) => {
    const overlay = props[slot] ? props[slot]! : React.createElement(Component)
    return (
      <Box position='relative' {...omit(props as any, pickProps as any)}>
        {props.children}
        {cloneElement(overlay, {
          position: 'absolute',
          top: mapSnap(props.snapTop),
          left: mapSnap(props.snapLeft),
          bottom: mapSnap(props.snapBottom),
          right: mapSnap(props.snapRight),
          ...pick(props as any, pickProps),
          ...overlay.props,
        })}
      </Box>
    )
  })
}

function mapSnap(snap?: boolean | number){
  return typeof snap === 'number' ? snap : (snap ? 0 : undefined)
}
