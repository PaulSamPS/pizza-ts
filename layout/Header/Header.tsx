import Logo from './logo.svg'
import styles from './Header.module.scss'
import {HeaderProps} from "./Header.props";
import Link from "next/link";
import cn from 'classnames'
import {Button} from "../../components";
import CartIcon from "./cart.svg";
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {priceRu} from "../../helpers/helpers";

export const Header = ({className, ...props}: HeaderProps): JSX.Element => {
    const {totalPrice,totalCount} = useTypeSelector(({cart}) => cart)

    return (
      <div className={cn(styles.header, className)} {...props}>
          <div className={styles.logo}>
              <Link href='/'>
                  <a>
                      <Logo className={styles.icon}/>
                      <h1>Pizza</h1>
                  </a>
              </Link>
              <Link href="/cart">
                  <a>
                      <Button appearance='cart' className={styles.cart} >
                          {priceRu(totalPrice)}
                          <div/>
                          <CartIcon className={styles.cartIcon}/>
                          <i>{totalCount}</i>
                      </Button>
                  </a>
              </Link>
          </div>
      </div>
  )
}