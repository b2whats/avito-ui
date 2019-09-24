type Icons = {
  [key: string]: {
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

  icons[name] = {
    viewBox: `0 0 ${originalWidth} ${originalHeight}`,
    svg,
  }
}