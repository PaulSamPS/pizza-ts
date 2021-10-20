import Logo from './logo.svg'
import styles from './Header.module.scss'
import {HeaderProps} from "./Header.props";
import Link from "next/link";
import cn from 'classnames'
import {Button} from "../../components";
import {WhiteBlock} from "../../components/WhiteBlock/WhiteBlock";

export const Header = ({className, ...props}: HeaderProps): JSX.Element => {
  return (
      <div className={cn(styles.header, className)} {...props}>
          <div className={styles.logo}>
              <Link href='/'>
                  <a>
                      <Logo />
                      <h1>Pizza App</h1>
                  </a>
              </Link>
              <Link href="/cart">
                  <a>
                      <Button appearance='cart' className={styles.cart} >
                          520 P
                      </Button>
                  </a>
              </Link>
          </div>
      </div>
  )
}