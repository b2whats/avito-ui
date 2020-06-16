import { PureComponent } from 'react';
export declare class Select extends PureComponent {
    static defaultProps: {
        keyProperty: string;
        displayProperty: string;
        required: boolean;
    };
    state: {
        isPopupOpened: boolean;
    };
    render(): JSX.Element;
    handleWrapperClick: () => void;
    handlePopupCancel: () => void;
    handlePopupConfirm: (key: any) => void;
    handleInputChange: () => void;
    setPopupVisible: (f: any) => void;
    setValue: (key: any) => void;
    resetValue: () => void;
}
