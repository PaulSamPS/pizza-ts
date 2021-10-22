import {createContext, PropsWithChildren} from "react";
import {Category} from "../interfaces/menu.interface";
import {ProductModel} from "../interfaces/product.iterface";
import {Sort} from "../interfaces/sort.interface";

export interface IAppContext {
    menu: Category[]
    product: ProductModel[]
    sort: Sort[]
}

export const AppContext = createContext<IAppContext>({sort: [], product: [], menu: []})

export const AppContextProvider = ({ menu, product,sort, children }: PropsWithChildren<IAppContext>): JSX.Element => {

    return (
        <AppContext.Provider value={{menu,product,sort}}>
        { children }
        </AppContext.Provider>
    )
}