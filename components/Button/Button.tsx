import {ButtonProps} from "./Button.props"
import styles from './Button.module.scss'
import cn from 'classnames'
import {ForwardedRef, forwardRef} from "react";

export const Button = forwardRef(({appearance, className, children, ...props}: ButtonProps, ref: ForwardedRef<HTMLButtonElement>): JSX.Element => {
    return (
        <button className={cn(styles.button, className, {
            [styles.primary]: appearance == 'primary',
            [styles.ghost]: appearance == 'ghost',
            [styles.black]: appearance == 'black',
            [styles.gray]: appearance == 'gray',
            [styles.cart]: appearance == 'cart',
        })}
                {...props} ref={ref}
        >
            {children}
        </button>
    )
})