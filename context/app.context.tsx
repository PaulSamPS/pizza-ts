import {createContext, PropsWithChildren} from "react";
import {Category} from "../interfaces/menu.interface";
import {ProductModel} from "../interfaces/product.iterface";

export interface IAppContext {
    menu: Category[]
    product: ProductModel[]
}

export const AppContext = createContext<IAppContext>({product: [], menu: []})

export const AppContextProvider = ({ menu, product, children }: PropsWithChildren<IAppContext>): JSX.Element => {

    return (
        <AppContext.Provider value={{menu,product}}>
        { children }
        </AppContext.Provider>
    )
}