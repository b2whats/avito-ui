import { CheckmarkTheme } from './components/Checkmark';
import { ListItemTheme } from './components/List/';
import { SegmentButtonTheme } from './components/SegmentButton/';
declare module '@avito/core' {
    interface Theme {
        ListItem: Partial<ListItemTheme>;
        SegmentButton: Partial<SegmentButtonTheme>;
        Checkmark: Partial<CheckmarkTheme>;
    }
}
export declare const theme: {
    Avatar: import("@avito/core").DeepPartial<{
        defaultProps?: Partial<import("@avito/core").AvatarProps> | undefined;
        mapProps?: ((props: import("@avito/core").AvatarProps) => Partial<import("@avito/core").AvatarProps>) | undefined;
        scheme: {
            Wrapper: import("@avito/core").SchemeType<import("@avito/core").AvatarProps, never, {}>;
            Badge: import("@avito/core").SchemeType<import("@avito/core").AvatarProps, import("@avito/core").BoxProps, {}>;
            Fallback: import("@avito/core").SchemeType<import("@avito/core").AvatarProps, import("@avito/core").IconProps, {}>;
        };
    }>;
    Button: import("@avito/core").DeepPartial<{
        defaultProps?: Partial<import("@avito/core").ButtonProps> | undefined;
        mapProps?: ((props: import("@avito/core").ButtonProps) => Partial<import("@avito/core").ButtonProps>) | undefined;
        scheme: {
            Button: import("@avito/core").SchemeType<import("@avito/core").ButtonProps, never, {
                pressedOffset: number;
            }>;
            IconBefore: import("@avito/core").SchemeType<import("@avito/core").ButtonProps, import("@avito/core").IconProps, {}>;
            Text: import("@avito/core").SchemeType<import("@avito/core").ButtonProps, import("@avito/core").TextProps, {}>;
            IconAfter: import("@avito/core").SchemeType<import("@avito/core").ButtonProps, import("@avito/core").IconProps, {}>;
            Spinner: import("@avito/core").SchemeType<import("@avito/core").ButtonProps, import("@avito/core").SpinnerProps, {}>;
        };
    }>;
    Checkbox: import("@avito/core").DeepPartial<{
        defaultProps?: Partial<Pick<import("@avito/core").ToggleProps, "disabled" | "label" | "size" | "height" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "width" | "m" | "shape" | "shrink" | "grow" | "mx" | "my" | "mt" | "mr" | "mb" | "ml" | "align" | "valignSelf" | "valign" | "variant" | "value" | "name" | "onChange" | "checked" | "indeterminate" | "description" | "labelPosition" | "id" | "tabIndex" | "onClick" | "onMouseEnter" | "onMouseLeave" | "onKeyDown">> | undefined;
        mapProps?: ((props: Pick<import("@avito/core").ToggleProps, "disabled" | "label" | "size" | "height" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "width" | "m" | "shape" | "shrink" | "grow" | "mx" | "my" | "mt" | "mr" | "mb" | "ml" | "align" | "valignSelf" | "valign" | "variant" | "value" | "name" | "onChange" | "checked" | "indeterminate" | "description" | "labelPosition" | "id" | "tabIndex" | "onClick" | "onMouseEnter" | "onMouseLeave" | "onKeyDown">) => Partial<Pick<import("@avito/core").ToggleProps, "disabled" | "label" | "size" | "height" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "width" | "m" | "shape" | "shrink" | "grow" | "mx" | "my" | "mt" | "mr" | "mb" | "ml" | "align" | "valignSelf" | "valign" | "variant" | "value" | "name" | "onChange" | "checked" | "indeterminate" | "description" | "labelPosition" | "id" | "tabIndex" | "onClick" | "onMouseEnter" | "onMouseLeave" | "onKeyDown">>) | undefined;
        scheme: {
            Toggle: import("@avito/core").SchemeType<Pick<import("@avito/core").ToggleProps, "disabled" | "label" | "size" | "height" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "width" | "m" | "shape" | "shrink" | "grow" | "mx" | "my" | "mt" | "mr" | "mb" | "ml" | "align" | "valignSelf" | "valign" | "variant" | "value" | "name" | "onChange" | "checked" | "indeterminate" | "description" | "labelPosition" | "id" | "tabIndex" | "onClick" | "onMouseEnter" | "onMouseLeave" | "onKeyDown">, never, {}>;
            Switch: import("@avito/core").SchemeType<Pick<import("@avito/core").ToggleProps, "disabled" | "label" | "size" | "height" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "width" | "m" | "shape" | "shrink" | "grow" | "mx" | "my" | "mt" | "mr" | "mb" | "ml" | "align" | "valignSelf" | "valign" | "variant" | "value" | "name" | "onChange" | "checked" | "indeterminate" | "description" | "labelPosition" | "id" | "tabIndex" | "onClick" | "onMouseEnter" | "onMouseLeave" | "onKeyDown">, never, {}>;
            Icon: import("@avito/core").SchemeType<Pick<import("@avito/core").ToggleProps, "disabled" | "label" | "size" | "height" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "width" | "m" | "shape" | "shrink" | "grow" | "mx" | "my" | "mt" | "mr" | "mb" | "ml" | "align" | "valignSelf" | "valign" | "variant" | "value" | "name" | "onChange" | "checked" | "indeterminate" | "description" | "labelPosition" | "id" | "tabIndex" | "onClick" | "onMouseEnter" | "onMouseLeave" | "onKeyDown">, import("@avito/core").IconProps, {}>;
            Label: import("@avito/core").SchemeType<Pick<import("@avito/core").ToggleProps, "disabled" | "label" | "size" | "height" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "width" | "m" | "shape" | "shrink" | "grow" | "mx" | "my" | "mt" | "mr" | "mb" | "ml" | "align" | "valignSelf" | "valign" | "variant" | "value" | "name" | "onChange" | "checked" | "indeterminate" | "description" | "labelPosition" | "id" | "tabIndex" | "onClick" | "onMouseEnter" | "onMouseLeave" | "onKeyDown">, import("@avito/core").TextProps, {}>;
        };
    }>;
    Icon: import("@avito/core").DeepPartial<{
        defaultProps?: Partial<import("@avito/core").BaseIconProps> | undefined;
        mapProps?: ((props: import("@avito/core").BaseIconProps) => Partial<import("@avito/core").BaseIconProps>) | undefined;
        scheme: {
            Icon: import("@avito/core").SchemeType<import("@avito/core").BaseIconProps, never, {}>;
        };
    }>;
    Input: import("@avito/core").DeepPartial<import("@avito/core").ComponentTheme<import("@avito/core").InputProps, {
        IconBefore: import("@avito/core").Slot<import("@avito/core").IconProps, {}>;
        InputField: import("@avito/core").Slot<never, {}>;
        Prefix: import("@avito/core").Slot<import("@avito/core").TextProps, {}>;
        Input: import("@avito/core").Slot<never, {}>;
        Postfix: import("@avito/core").Slot<import("@avito/core").TextProps, {}>;
        IconAfter: import("@avito/core").Slot<import("@avito/core").IconProps, {}>;
    }, {
        deletePlaceholderOnFocus: boolean;
    }>>;
    Radio: import("@avito/core").DeepPartial<{
        defaultProps?: Partial<Pick<import("@avito/core").ToggleProps, "disabled" | "loading" | "label" | "size" | "height" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "width" | "m" | "shape" | "shrink" | "grow" | "mx" | "my" | "mt" | "mr" | "mb" | "ml" | "align" | "valignSelf" | "valign" | "variant" | "value" | "name" | "onChange" | "checked" | "description" | "labelPosition" | "id" | "tabIndex" | "onClick" | "onMouseEnter" | "onMouseLeave" | "onKeyDown">> | undefined;
        mapProps?: ((props: Pick<import("@avito/core").ToggleProps, "disabled" | "loading" | "label" | "size" | "height" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "width" | "m" | "shape" | "shrink" | "grow" | "mx" | "my" | "mt" | "mr" | "mb" | "ml" | "align" | "valignSelf" | "valign" | "variant" | "value" | "name" | "onChange" | "checked" | "description" | "labelPosition" | "id" | "tabIndex" | "onClick" | "onMouseEnter" | "onMouseLeave" | "onKeyDown">) => Partial<Pick<import("@avito/core").ToggleProps, "disabled" | "loading" | "label" | "size" | "height" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "width" | "m" | "shape" | "shrink" | "grow" | "mx" | "my" | "mt" | "mr" | "mb" | "ml" | "align" | "valignSelf" | "valign" | "variant" | "value" | "name" | "onChange" | "checked" | "description" | "labelPosition" | "id" | "tabIndex" | "onClick" | "onMouseEnter" | "onMouseLeave" | "onKeyDown">>) | undefined;
        scheme: {
            Toggle?: import("@avito/core").SchemeType<Pick<import("@avito/core").ToggleProps, "disabled" | "loading" | "label" | "size" | "height" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "width" | "m" | "shape" | "shrink" | "grow" | "mx" | "my" | "mt" | "mr" | "mb" | "ml" | "align" | "valignSelf" | "valign" | "variant" | "value" | "name" | "onChange" | "checked" | "description" | "labelPosition" | "id" | "tabIndex" | "onClick" | "onMouseEnter" | "onMouseLeave" | "onKeyDown">, never, {}> | undefined;
            Switch?: import("@avito/core").SchemeType<Pick<import("@avito/core").ToggleProps, "disabled" | "loading" | "label" | "size" | "height" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "width" | "m" | "shape" | "shrink" | "grow" | "mx" | "my" | "mt" | "mr" | "mb" | "ml" | "align" | "valignSelf" | "valign" | "variant" | "value" | "name" | "onChange" | "checked" | "description" | "labelPosition" | "id" | "tabIndex" | "onClick" | "onMouseEnter" | "onMouseLeave" | "onKeyDown">, never, {}> | undefined;
            Icon?: import("@avito/core").SchemeType<Pick<import("@avito/core").ToggleProps, "disabled" | "loading" | "label" | "size" | "height" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "width" | "m" | "shape" | "shrink" | "grow" | "mx" | "my" | "mt" | "mr" | "mb" | "ml" | "align" | "valignSelf" | "valign" | "variant" | "value" | "name" | "onChange" | "checked" | "description" | "labelPosition" | "id" | "tabIndex" | "onClick" | "onMouseEnter" | "onMouseLeave" | "onKeyDown">, import("@avito/core").IconProps, {}> | undefined;
            Label?: import("@avito/core").SchemeType<Pick<import("@avito/core").ToggleProps, "disabled" | "loading" | "label" | "size" | "height" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "width" | "m" | "shape" | "shrink" | "grow" | "mx" | "my" | "mt" | "mr" | "mb" | "ml" | "align" | "valignSelf" | "valign" | "variant" | "value" | "name" | "onChange" | "checked" | "description" | "labelPosition" | "id" | "tabIndex" | "onClick" | "onMouseEnter" | "onMouseLeave" | "onKeyDown">, import("@avito/core").TextProps, {}> | undefined;
        };
    }>;
    Switcher: import("@avito/core").DeepPartial<import("@avito/core").ComponentTheme<Pick<import("@avito/core").ToggleProps, "disabled" | "loading" | "label" | "size" | "height" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "width" | "m" | "shape" | "shrink" | "grow" | "mx" | "my" | "mt" | "mr" | "mb" | "ml" | "align" | "valignSelf" | "valign" | "variant" | "value" | "name" | "onChange" | "checked" | "description" | "labelPosition" | "id" | "tabIndex" | "onClick" | "onMouseEnter" | "onMouseLeave" | "onKeyDown">, {
        Toggle?: import("@avito/core").Slot<never, {}> | undefined;
        Switch?: import("@avito/core").Slot<never, {}> | undefined;
        Icon?: import("@avito/core").Slot<import("@avito/core").IconProps, {}> | undefined;
        Label?: import("@avito/core").Slot<import("@avito/core").TextProps, {}> | undefined;
    }, {
        positionLoading: boolean;
    }>>;
    Text: Partial<{
        defaultProps?: Partial<import("@avito/core").TextProps> | undefined;
        mapProps?: ((props: import("@avito/core").TextProps) => Partial<import("@avito/core").TextProps>) | undefined;
        scheme: {
            Text: import("@avito/core").SchemeType<import("@avito/core").TextProps, never, {}>;
        };
    }>;
    Textarea: import("@avito/core").DeepPartial<import("@avito/core").ComponentTheme<import("@avito/core").TextareaProps, {
        Textarea: import("@avito/core").Slot<never, {}>;
        IconClear: import("@avito/core").Slot<import("@avito/core").IconProps, {}>;
    }, {
        deletePlaceholderOnFocus: boolean;
    }>>;
    Toggle: import("@avito/core").DeepPartial<{
        defaultProps?: Partial<import("@avito/core").ToggleProps> | undefined;
        mapProps?: ((props: import("@avito/core").ToggleProps) => Partial<import("@avito/core").ToggleProps>) | undefined;
        scheme: {
            Toggle: import("@avito/core").SchemeType<import("@avito/core").ToggleProps, never, {}>;
            Switch: import("@avito/core").SchemeType<import("@avito/core").ToggleProps, never, {}>;
            Icon: import("@avito/core").SchemeType<import("@avito/core").ToggleProps, import("@avito/core").IconProps, {}>;
            Label: import("@avito/core").SchemeType<import("@avito/core").ToggleProps, import("@avito/core").TextProps, {}>;
        };
    }>;
    Tooltip: import("@avito/core").DeepPartial<{
        defaultProps?: Partial<import("@avito/core").TooltipProps> | undefined;
        mapProps?: ((props: import("@avito/core").TooltipProps) => Partial<import("@avito/core").TooltipProps>) | undefined;
        scheme: {
            Tooltip: import("@avito/core").SchemeType<import("@avito/core").TooltipProps, never, {}>;
            Close: import("@avito/core").SchemeType<import("@avito/core").TooltipProps, import("@avito/core").IconProps, {}>;
            Arrow: import("@avito/core").SchemeType<import("@avito/core").TooltipProps, never, {
                offset: number;
            }>;
        };
    }>;
    Link: import("@avito/core").DeepPartial<{
        defaultProps?: Partial<import("@avito/core").LinkProps> | undefined;
        mapProps?: ((props: import("@avito/core").LinkProps) => Partial<import("@avito/core").LinkProps>) | undefined;
        scheme: {
            Link: import("@avito/core").SchemeType<import("@avito/core").LinkProps, import("@avito/core").LinkProps, {}>;
        };
    }>;
    focus: {
        shape: string;
        color: {
            default: string;
            primary: string;
            secondary: string;
            success: string;
            warning: string;
            error: string;
        };
    };
    font: {
        fontFamily: string;
        defaultColor: "black" | "white" | "blue50" | "blue100" | "blue200" | "blue300" | "blue400" | "blue500" | "blue600" | "blue700" | "blue800" | "blue900" | "green50" | "green100" | "green200" | "green300" | "green400" | "green500" | "green600" | "green700" | "green800" | "green900" | "red50" | "red100" | "red200" | "red300" | "red400" | "red500" | "red600" | "red700" | "red800" | "red900" | "yellow50" | "yellow100" | "yellow200" | "yellow300" | "yellow400" | "yellow500" | "yellow600" | "yellow700" | "yellow800" | "yellow900" | "purple50" | "purple100" | "purple200" | "purple300" | "purple400" | "purple500" | "purple600" | "purple700" | "purple800" | "purple900" | "orange50" | "orange100" | "orange200" | "orange300" | "orange400" | "orange500" | "orange600" | "orange700" | "orange800" | "orange900" | "gray4" | "gray8" | "gray12" | "gray16" | "gray20" | "gray24" | "gray28" | "gray32" | "gray36" | "gray40" | "gray44" | "gray48" | "gray52" | "gray56" | "gray60" | "gray64" | "gray68" | "gray72" | "gray76" | "gray80" | "gray84" | "gray88" | "gray92" | "gray96" | "black4" | "black8" | "black12" | "black16" | "black20" | "black24" | "black28" | "black32" | "black36" | "black40" | "black44" | "black48" | "black52" | "black56" | "black60" | "black64" | "black68" | "black72" | "black76" | "black80" | "black84" | "black88" | "black92" | "black96";
        defaultFontSize: string;
        defaultLineHeight: number | "normal" | "dense";
        fontSize: {
            xxxxxl: number;
            xxxxl: number;
            xxxl: number;
            xxl: number;
            xl: number;
            l: number;
            m: number;
            s: number;
            xs: number;
        };
        lineHeight: {
            none: number;
            normal: number;
            dense: number;
        };
        crop: {
            top: number;
            bottom: number;
        };
        underline: {
            height: number;
            offset: number;
        };
        smoothing?: "auto" | "antialiased" | "subpixel" | undefined;
    };
    palette: import("@avito/tokens/src").Palette;
    dimension: {
        rowHeight: {
            l: number;
            m: number;
            s: number;
        };
    };
    space: {
        xxxl: number;
        xxl: number;
        xl: number;
        l: number;
        m: number;
        s: number;
        xs: number;
        xxs: number;
        xxxs: number;
    };
    shape: {
        borderRadius: {
            l: number;
            m: number;
            s: number;
        };
    };
    _demo?: {} | undefined;
};
