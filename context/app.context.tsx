import {createContext, ReactNode} from "react";
import {Category} from "../interfaces/menu.interface";
import {ProductModel} from "../interfaces/product.iterface";

export interface IAppContext {
    menu: Category[]
    product: ProductModel[]
    setMenu?: (newMenu: Category[]) => void
}

export const AppContext = createContext<IAppContext>({product: [], menu: []})

export const AppContextProvider = ({menu,product,children}: IAppContext & {children: ReactNode}): JSX.Element => {

    return (
        <AppContext.Provider value={{menu,product}}>
        { children }
        </AppContext.Provider>
    )
}