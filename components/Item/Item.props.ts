import {DetailedHTMLProps, HTMLAttributes} from "react";
import {ProductModel} from "../../interfaces/product.iterface";

export interface ItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    product: ProductModel
    onAddItemToCart: (obj) => void
}