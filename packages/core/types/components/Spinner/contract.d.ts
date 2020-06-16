import { MarginProperties } from '../../styled-system/';
import { Theme } from '../../theme/';
export interface SpinnerProps extends MarginProperties {
    /** Цвет */
    color?: keyof Theme['palette'];
    /** Размер */
    size?: number | 's' | 'm' | 'l' | 'auto';
    /** Цветовые варианты */
    variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
    /** Скорость вращения */
    speed?: number;
}
