/// <reference types="react" />
import { Tokens } from '@avito/tokens';
declare type Theme = Tokens;
export declare type TextProperties = Partial<{
    fontFamily: string;
    fontSize: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl' | 'xxxxl' | 'xxxxxl' | number | string;
    lineHeight: 'inherit' | 'none' | 'normal' | 'dense' | number;
    letterSpacing: number;
    fontWeight: 'light' | 'normal' | 'bold';
    italic: boolean;
    noWrap: boolean;
    wrap: boolean;
    pre: boolean;
    bold: boolean;
    light: boolean;
    uppercase: boolean;
    truncate: boolean;
    crop: boolean;
    underline: boolean | 'dotted' | 'dashed';
    smoothing: 'auto' | 'antialiased' | 'subpixel';
}>;
declare type Width = number;
declare type Height = 's' | 'm' | 'l' | 'auto' | number;
export declare type DimensionProperties = Partial<{
    /** Ширина блока */
    width?: Width;
    /** Максимальная ширина блока */
    maxWidth?: Width;
    /** Минимальная ширина блока */
    minWidth?: Width;
    /** Высота блока */
    height?: Height;
    /** Минимальная высота блока */
    minHeight?: Height;
    /** Максимальная высота блока */
    maxHeight?: Height;
    /** Уменьшать при нехватке пространства */
    shrink?: boolean;
    /** Занять все возможзное пространство */
    grow?: boolean;
}>;
declare type Display = {
    display: 'block' | 'inline' | 'inline-block' | 'flex' | 'inline-flex' | null;
};
export declare type VisibilityProperties = Partial<{
    visible: boolean;
    opacity: number;
}>;
declare type SpaceValues = keyof Theme['space'] | 'none' | 'auto' | number;
export declare type MarginProperties = Partial<{
    /** Внешний отступ со всех сторон */
    m: SpaceValues;
    /** Внешний отступ слува и справа */
    mx: SpaceValues;
    /** Внешний отступ сверху и снизу */
    my: SpaceValues;
    /** Внешний отступ сверху */
    mt: SpaceValues;
    /** Внешний отступ справа */
    mr: SpaceValues;
    /** Внешний отступ снизу */
    mb: SpaceValues;
    /** Внешний отступ слева */
    ml: SpaceValues;
}>;
export declare type PaddingProperties = Partial<{
    /** Внутренний отступ */
    p: SpaceValues;
    /** Внутренний отступ слева и справа */
    px: SpaceValues;
    /** Внутренний отступ сверху и снизу */
    py: SpaceValues;
    /** Внутренний отступ сверху */
    pt: SpaceValues;
    /** Внутренний отступ справа */
    pr: SpaceValues;
    /** Внутренний отступ снизу */
    pb: SpaceValues;
    /** Внутренний отступ слева */
    pl: SpaceValues;
}>;
export declare type SpaceProperties = PaddingProperties & MarginProperties;
declare type Align = 'left' | 'center' | 'right' | 'justify';
declare type Valign = 'top' | 'middle' | 'bottom' | 'baseline' | 'stretch';
export declare type AlignProperties = Partial<{
    /** Горизонтальное выравнивание дочерних блоков */
    align: Align;
    /** Вертикальное выравнивание */
    valignSelf: Valign;
    /** Вертикальное выравнивание дочерних блоков */
    valign: Valign;
}>;
export declare type LayoutProperties = AlignProperties & Partial<{
    /** Вертикальное направление дочерних элементов */
    column: boolean;
    /** Блочное поведение */
    block: boolean;
    /** Строчное поведение */
    inline: boolean;
    /** Переносить блоки на следующие строки если не хватило места */
    wrap: boolean;
    /** Положение элемента в потоке */
    position: 'relative' | 'absolute' | 'static' | 'fixed';
    top: number;
    bottom: number;
    left: number;
    right: number;
    /** Добавляет скролл */
    scroll: boolean;
}>;
export declare type BorderProperties = Partial<{
    /** Стиль границ */
    borderStyle: 'solid' | 'dotted' | 'dashed' | 'none';
    /** Радиус границ */
    borderRadius: number | 's' | 'm' | 'l' | 'circle';
    /** Радиус границ */
    rounded: number | 's' | 'm' | 'l' | 'circle';
    /** Ширина границы */
    borderWidth: number;
}>;
declare type OtherProperties = BorderProperties & Partial<{
    focus: boolean | string;
    disabled: boolean;
    variant: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
    adjacentSelector: string;
    shape?: 'pill' | 'square' | 'circle';
    shadow?: string | boolean;
    pointerEvents: boolean;
}>;
export declare type Colors = keyof Tokens['palette'] | 'transparent' | 'inherit' | (string & {});
export declare type ColorProperties = Partial<{
    /** Цвет контента */
    color: Colors;
    /** Цвет контента при наведении */
    colorHover: Colors;
    /** Цвет контента при нажатии */
    colorActive: Colors;
    /** Цвет контента посещенной ссылки */
    colorVisited: Colors;
    /** Цвет контента в выбранном состоянии */
    colorChecked: Colors;
    /** Цвет контента в состоянии фокуса */
    colorFocus: Colors;
    /** Цвет контента в неакттивном состоянии */
    colorDisabled: Colors;
    /** Цвет фона */
    bg: Colors;
    /** Цвет фона при наведении */
    bgHover: Colors;
    /** Цвет фона при нажатии */
    bgActive: Colors;
    /** Цвет фона посещенной ссылки */
    bgVisited: Colors;
    /** Цвет фона в выбранном состоянии */
    bgChecked: Colors;
    /** Цвет фона в состоянии фокуса */
    bgFocus: Colors;
    /** Цвет фона в неакттивном состоянии */
    bgDisabled: Colors;
    /** Цвет ганиц */
    borderColor: Colors;
    /** Цвет границ при наведении */
    borderColorHover: Colors;
    /** Цвет границ при наведении */
    borderColorActive: Colors;
    /** Цвет границ посещенной ссылки */
    borderColorVisited: Colors;
    /** Цвет границ в выбранном состоянии */
    borderColorChecked: Colors;
    /** Цвет границ в состоянии фокуса */
    borderColorFocus: Colors;
    /** Цвет границ в неакттивном состоянии */
    borderColorDisabled: Colors;
    /** Цвет текста у плейсхолдера */
    placeholderColor: Colors;
    /** цвет оверлея */
    overlay: Colors;
    /** Цвет оверлея при наведении */
    overlayHover: Colors;
    /** Цвет оверлея при наведении */
    overlayActive: Colors;
    /** Цвет оверлея посещенной ссылки */
    overlayVisited: Colors;
    /** Цвет оверлея в выбранном состоянии */
    overlayChecked: Colors;
    /** Цвет оверлея в состоянии фокуса */
    overlayFocus: Colors;
    /** Цвет оверлея в неакттивном состоянии */
    overlayDisabled: Colors;
}>;
export declare type StyleProperties = TextProperties & DimensionProperties & SpaceProperties & LayoutProperties & ColorProperties & OtherProperties & VisibilityProperties;
declare type UnionToIntersection<U> = (boolean extends U ? (k: U) => void : U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;
declare type IsUnion<T> = [T] extends [UnionToIntersection<T>] ? false : true;
declare type OnlyLiteralString<T> = T extends string ? T : never;
declare type Computable<T, Arg> = {
    [K in keyof T]: (T[K] | ((arg: Arg) => T[K]));
};
declare type IsSwitchable<T> = IsUnion<NonNullable<T>> extends true ? true : T extends string | undefined ? true : false;
export declare type SchemeType<Props extends {
    [K in keyof Props]: Props[K];
}, ComponentsProps = never, ExtraStyleProps = {}> = {
    style?: Partial<Computable<StyleProperties & ExtraStyleProps, Props>>;
    props?: Partial<Computable<ComponentsProps, Props>>;
    component?: any;
} & {
    [Key in keyof Props]?: IsSwitchable<Props[Key]> extends true ? {
        [Key2 in OnlyLiteralString<Props[Key]>]?: SchemeType<Props, ComponentsProps, ExtraStyleProps>;
    } : SchemeType<Props, ComponentsProps, ExtraStyleProps>;
};
export interface Slot<OutProps = never, ExtraStyles = {}> {
}
export declare type ComponentTheme<Props, Scheme = {}, Extras = {}> = Extras & {
    defaultProps?: Partial<Props>;
    mapProps?: (props: Props) => Partial<Props>;
    scheme: {
        [K in keyof Scheme]: Scheme[K] extends (Slot<infer OutProps, infer ExtraStyles> | undefined) ? SchemeType<Props, OutProps, ExtraStyles> : Scheme[K];
    };
};
export declare const foldScheme: (scheme: any, props: any, only?: "style" | "props" | "component" | undefined) => {
    style: {};
    props: {};
    component: null;
};
export declare const getStyles: (params: Partial<{
    fontFamily: string;
    fontSize: string | number;
    lineHeight: number | "normal" | "none" | "inherit" | "dense";
    letterSpacing: number;
    fontWeight: "bold" | "normal" | "light";
    italic: boolean;
    noWrap: boolean;
    wrap: boolean;
    pre: boolean;
    bold: boolean;
    light: boolean;
    uppercase: boolean;
    truncate: boolean;
    crop: boolean;
    underline: boolean | "dashed" | "dotted";
    smoothing: "auto" | "antialiased" | "subpixel";
}> & Partial<{
    /** Ширина блока */
    width?: number | undefined;
    /** Максимальная ширина блока */
    maxWidth?: number | undefined;
    /** Минимальная ширина блока */
    minWidth?: number | undefined;
    /** Высота блока */
    height?: number | "auto" | "s" | "m" | "l" | undefined;
    /** Минимальная высота блока */
    minHeight?: number | "auto" | "s" | "m" | "l" | undefined;
    /** Максимальная высота блока */
    maxHeight?: number | "auto" | "s" | "m" | "l" | undefined;
    /** Уменьшать при нехватке пространства */
    shrink?: boolean | undefined;
    /** Занять все возможзное пространство */
    grow?: boolean | undefined;
}> & Partial<{
    /** Внутренний отступ */
    p: SpaceValues;
    /** Внутренний отступ слева и справа */
    px: SpaceValues;
    /** Внутренний отступ сверху и снизу */
    py: SpaceValues;
    /** Внутренний отступ сверху */
    pt: SpaceValues;
    /** Внутренний отступ справа */
    pr: SpaceValues;
    /** Внутренний отступ снизу */
    pb: SpaceValues;
    /** Внутренний отступ слева */
    pl: SpaceValues;
}> & Partial<{
    /** Внешний отступ со всех сторон */
    m: SpaceValues;
    /** Внешний отступ слува и справа */
    mx: SpaceValues;
    /** Внешний отступ сверху и снизу */
    my: SpaceValues;
    /** Внешний отступ сверху */
    mt: SpaceValues;
    /** Внешний отступ справа */
    mr: SpaceValues;
    /** Внешний отступ снизу */
    mb: SpaceValues;
    /** Внешний отступ слева */
    ml: SpaceValues;
}> & Partial<{
    /** Горизонтальное выравнивание дочерних блоков */
    align: Align;
    /** Вертикальное выравнивание */
    valignSelf: Valign;
    /** Вертикальное выравнивание дочерних блоков */
    valign: Valign;
}> & Partial<{
    /** Вертикальное направление дочерних элементов */
    column: boolean;
    /** Блочное поведение */
    block: boolean;
    /** Строчное поведение */
    inline: boolean;
    /** Переносить блоки на следующие строки если не хватило места */
    wrap: boolean;
    /** Положение элемента в потоке */
    position: "fixed" | "absolute" | "relative" | "static";
    top: number;
    bottom: number;
    left: number;
    right: number;
    /** Добавляет скролл */
    scroll: boolean;
}> & Partial<{
    /** Цвет контента */
    color: Colors;
    /** Цвет контента при наведении */
    colorHover: Colors;
    /** Цвет контента при нажатии */
    colorActive: Colors;
    /** Цвет контента посещенной ссылки */
    colorVisited: Colors;
    /** Цвет контента в выбранном состоянии */
    colorChecked: Colors;
    /** Цвет контента в состоянии фокуса */
    colorFocus: Colors;
    /** Цвет контента в неакттивном состоянии */
    colorDisabled: Colors;
    /** Цвет фона */
    bg: Colors;
    /** Цвет фона при наведении */
    bgHover: Colors;
    /** Цвет фона при нажатии */
    bgActive: Colors;
    /** Цвет фона посещенной ссылки */
    bgVisited: Colors;
    /** Цвет фона в выбранном состоянии */
    bgChecked: Colors;
    /** Цвет фона в состоянии фокуса */
    bgFocus: Colors;
    /** Цвет фона в неакттивном состоянии */
    bgDisabled: Colors;
    /** Цвет ганиц */
    borderColor: Colors;
    /** Цвет границ при наведении */
    borderColorHover: Colors;
    /** Цвет границ при наведении */
    borderColorActive: Colors;
    /** Цвет границ посещенной ссылки */
    borderColorVisited: Colors;
    /** Цвет границ в выбранном состоянии */
    borderColorChecked: Colors;
    /** Цвет границ в состоянии фокуса */
    borderColorFocus: Colors;
    /** Цвет границ в неакттивном состоянии */
    borderColorDisabled: Colors;
    /** Цвет текста у плейсхолдера */
    placeholderColor: Colors;
    /** цвет оверлея */
    overlay: Colors;
    /** Цвет оверлея при наведении */
    overlayHover: Colors;
    /** Цвет оверлея при наведении */
    overlayActive: Colors;
    /** Цвет оверлея посещенной ссылки */
    overlayVisited: Colors;
    /** Цвет оверлея в выбранном состоянии */
    overlayChecked: Colors;
    /** Цвет оверлея в состоянии фокуса */
    overlayFocus: Colors;
    /** Цвет оверлея в неакттивном состоянии */
    overlayDisabled: Colors;
}> & Partial<{
    /** Стиль границ */
    borderStyle: "none" | "dashed" | "dotted" | "solid";
    /** Радиус границ */
    borderRadius: number | "s" | "circle" | "m" | "l";
    /** Радиус границ */
    rounded: number | "s" | "circle" | "m" | "l";
    /** Ширина границы */
    borderWidth: number;
}> & Partial<{
    focus: string | boolean;
    disabled: boolean;
    variant: "error" | "success" | "primary" | "secondary" | "warning";
    adjacentSelector: string;
    shape?: "square" | "circle" | "pill" | undefined;
    shadow?: string | boolean | undefined;
    pointerEvents: boolean;
}> & Partial<{
    visible: boolean;
    opacity: number;
}> & Display, tokens: Tokens) => string;
declare type FoldedItemTheme<ItemTheme> = ItemTheme extends SchemeType<infer InProps, infer OutProps, infer ExtraStyle> ? {
    style: StyleProperties & ExtraStyle;
    props: OutProps;
    component: React.FunctionComponent<OutProps> | React.ComponentClass<OutProps>;
} : never;
export declare type FoldThemeParamsReturn<ComponentTheme> = ComponentTheme extends {
    scheme: object;
} ? {
    [K in keyof ComponentTheme['scheme']]: FoldedItemTheme<ComponentTheme['scheme'][K]>;
} : never;
export declare function foldThemeParams<T extends {
    scheme: {
        [key: string]: any;
    };
}>(props: any, { scheme }: T): FoldThemeParamsReturn<T>;
declare type valueof<T, Key = string> = T[Key extends keyof T ? Key : keyof T];
declare type ThemeStyle<ComponentTheme, Key> = ComponentTheme extends object ? valueof<FoldThemeParamsReturn<ComponentTheme>, Key>['style'] : never;
interface Selector<Props, ComponentTheme, Key> {
    t: (props: Props, theme: Theme, schemeStyle: ThemeStyle<ComponentTheme, Key>) => any;
    f: (props: Props, theme: Theme) => any;
}
export declare function createClassName<Props, ComponentTheme extends object | null = null, PrimaryComponent = string>(createRule: (schemeStyle: ThemeStyle<ComponentTheme, PrimaryComponent>, props: Props, theme: Theme) => StyleProperties & Display, createUserRule?: (textRules: string, props: Props, theme: Theme, schemeStyle: ThemeStyle<ComponentTheme, PrimaryComponent>) => any): Selector<Props, ComponentTheme, PrimaryComponent>[ComponentTheme extends object ? 't' : 'f'];
export {};
