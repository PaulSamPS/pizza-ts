import {ButtonProps} from "./Button.props"
import styles from './Button.module.scss'
import cn from 'classnames'
import Plus from './plus.svg'
import Arrow from './arrow.svg'
import Cart from './cart.svg'
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
            <Arrow className={styles.arrow}/>
            <Plus className={styles.plus}/>
            {children}
            <div/>
            <Cart className={styles.cart}/>
            <i>31</i>
        </button>
    )
})