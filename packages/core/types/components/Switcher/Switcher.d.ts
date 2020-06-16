import React from 'react';
export declare const Switcher: <T extends object>(props: Pick<import("../Toggle").ToggleProps, "disabled" | "loading" | "label" | "size" | "height" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "width" | "m" | "shape" | "shrink" | "grow" | "mx" | "my" | "mt" | "mr" | "mb" | "ml" | "align" | "valignSelf" | "valign" | "variant" | "value" | "name" | "onChange" | "checked" | "description" | "labelPosition" | "id" | "tabIndex" | "onClick" | "onMouseEnter" | "onMouseLeave" | "onKeyDown"> & {
    override?: import("../..").DeepPartial<import("../../styled-system").ComponentTheme<Pick<import("../Toggle").ToggleProps, "disabled" | "loading" | "label" | "size" | "height" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "width" | "m" | "shape" | "shrink" | "grow" | "mx" | "my" | "mt" | "mr" | "mb" | "ml" | "align" | "valignSelf" | "valign" | "variant" | "value" | "name" | "onChange" | "checked" | "description" | "labelPosition" | "id" | "tabIndex" | "onClick" | "onMouseEnter" | "onMouseLeave" | "onKeyDown">, {
        Toggle?: import("../../styled-system").Slot<never, {}> | undefined;
        Switch?: import("../../styled-system").Slot<never, {}> | undefined;
        Icon?: import("../../styled-system").Slot<import("../Icon").IconProps, {}> | undefined;
        Label?: import("../../styled-system").Slot<import("../Text").TextProps, {}> | undefined;
    }, {
        positionLoading: boolean;
    }>> | undefined;
    ref?: ((instance: HTMLElement | null) => void) | React.RefObject<HTMLElement> | null | undefined;
} & T) => JSX.Element;
