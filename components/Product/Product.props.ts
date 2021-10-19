import {DetailedHTMLProps, HTMLAttributes} from "react"
import {ProductModel} from "../../interfaces/product.iterface"

export interface ProductProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    products?: ProductModel
}