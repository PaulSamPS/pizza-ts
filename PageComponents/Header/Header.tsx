import Logo from './logo.svg'
import {Button} from "../../components"
import styles from './Header.module.scss'
import Link from 'next/link'
import {HeaderProps} from "./Header.props";

export const Header = ({...props}: HeaderProps): JSX.Element => {
  return (
      <header className={styles.header} {...props}>
          <Logo className={styles.logo}/>
          <h1 className={styles.title}>Pizza App</h1>
          <Link href="/cart">
              <a>
                  <Button appearance='cart'>
                      520 P
                  </Button>
              </a>
          </Link>
      </header>
  )
}