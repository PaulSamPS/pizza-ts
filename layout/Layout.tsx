import {LayoutProps} from "./Layout.props";
import {Header} from "./Header/Header";
import {Categories} from "./Categories/Categories";
import {FunctionComponent} from "react";
import {AppContextProvider, IAppContext} from "../context/app.context";
import styles from './Layout.module.scss'
import {Button} from "../components";
import CartIcon from "./Header/cart.svg";
import Link from "next/link";

const Layout = ({children}: LayoutProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <Header />
                <Link href="/cart">
                    <a>
                        <Button appearance='cart' className={styles.cart} >
                            520 P
                            <div/>
                            <CartIcon className={styles.cartIcon}/>
                            <i>3</i>
                        </Button>
                    </a>
                </Link>
            </div>
            <Categories />
            {children}
        </div>
    )
}

export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <AppContextProvider menu={ props.menu } product={props.product} sort={props.sort}>
                <Layout>
                    <Component { ...props }/>
                </Layout>
            </AppContextProvider>
        )
    }
}