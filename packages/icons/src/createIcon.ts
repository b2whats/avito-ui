type Icon = {
  name: string,
  width: number,
  height: number,
  svg: React.ReactNode,
  platform?: string,
  category?: string,
}

type Icons = {
  [key: string]: Icon
}

export const icons: Icons = {}

export const createIcon = (props: Icon): void => {
  const { name } = props
  if (icons[name]) {
    console.error(`Icon name "${name}" already exist.`)

    return
  }

  icons[name] = props
}