import {DetailedHTMLProps, HTMLAttributes} from "react"
import {ProductModel} from "../../interfaces/product.iterface"

export interface ProductProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
<<<<<<< HEAD
    product: ProductModel[]
=======
    products?: ProductModel
>>>>>>> dca501073ad3b75aefab25a7adeb48577a1569f7
}