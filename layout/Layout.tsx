import {LayoutProps} from "./Layout.props";
import {Header} from "./Header/Header";
import {Categories} from "./Categories/Categories";
import {FunctionComponent} from "react";
import {AppContextProvider, IAppContext} from "../context/app.context";

const Layout = ({children}: LayoutProps): JSX.Element => {
    return (
        <div className='wrapper'>
            <Header />
            <Categories />
            {children}
        </div>
    )
}

export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <AppContextProvider menu={ props.menu } product={props.product}>
                <Layout>
                    <Component { ...props }/>
                </Layout>
            </AppContextProvider>
        )
    }
}