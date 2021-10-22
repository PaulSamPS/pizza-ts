import {LayoutProps} from "./Layout.props";
import {Header} from "./Header/Header";
import {Categories} from "./Categories/Categories";
import {FunctionComponent} from "react";
import {AppContextProvider, IAppContext} from "../context/app.context";
import styles from './Layout.module.scss'

const Layout = ({children}: LayoutProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <Header />
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