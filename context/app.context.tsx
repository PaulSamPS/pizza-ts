<<<<<<< HEAD
import {createContext, PropsWithChildren} from "react";
=======
import {createContext, ReactNode} from "react";
>>>>>>> dca501073ad3b75aefab25a7adeb48577a1569f7
import {Category} from "../interfaces/menu.interface";
import {ProductModel} from "../interfaces/product.iterface";

export interface IAppContext {
    menu: Category[]
    product: ProductModel[]
<<<<<<< HEAD
=======
    setMenu?: (newMenu: Category[]) => void
>>>>>>> dca501073ad3b75aefab25a7adeb48577a1569f7
}

export const AppContext = createContext<IAppContext>({product: [], menu: []})

<<<<<<< HEAD
export const AppContextProvider = ({ menu, product, children }: PropsWithChildren<IAppContext>): JSX.Element => {
=======
export const AppContextProvider = ({menu,product,children}: IAppContext & {children: ReactNode}): JSX.Element => {
>>>>>>> dca501073ad3b75aefab25a7adeb48577a1569f7

    return (
        <AppContext.Provider value={{menu,product}}>
        { children }
        </AppContext.Provider>
    )
}