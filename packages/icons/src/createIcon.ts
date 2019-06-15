import { IconProps } from './contract'

type Icons = {
  [key: string]: {
    width: string,
    height: string,
    viewBox: string,
    svg: React.ReactNode
  }
}

export const icons: Icons = {}

export type Create = {
  name: string,
  originalWidth: number,
  originalHeight: number,
  svg: React.ReactNode,
}

export const createIcon = ({ name, originalWidth, originalHeight, svg }: Create): void => {
  if (icons[name]) {
    console.error(`Icon name "${name}" already exist.`); // eslint-disable-line

    return
  }

  const viewBox = `0 0 ${originalWidth} ${originalHeight}`
  const width = originalWidth > originalHeight ? '1em' : `${1 / (originalHeight / originalWidth)}em`
  const height = originalWidth > originalHeight ? `${1 / (originalWidth / originalHeight)}em` : '1em'

  icons[name] = {
    width,
    height,
    viewBox,
    svg,
  }
}