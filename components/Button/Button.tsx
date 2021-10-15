import {ButtonProps} from "./Button.props"
import styles from './Button.module.scss'
import cn from 'classnames'
import Plus from './plus.svg'
import Arrow from './arrow.svg'
import Cart from './cart.svg'

export const Button = ({appearance, className, children}: ButtonProps): JSX.Element => {
  return (
      <button className={cn(styles.button, className, {
          [styles.primary]: appearance == 'primary',
          [styles.ghost]: appearance == 'ghost',
          [styles.black]: appearance == 'black',
          [styles.gray]: appearance == 'gray',
          [styles.cart]: appearance == 'cart',
      })}
      >
          <Arrow className={styles.arrow}/>
          <Plus className={styles.plus}/>
          {children}
          <div/>
          <Cart className={styles.cart}/>
          <i>31</i>
      </button>
  )
}