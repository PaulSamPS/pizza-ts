import axios from "axios";
import {ProductProps} from "./Product.props";
import {GetStaticProps} from "next";
import {ProductModel} from "../../interfaces/product.iterface";


export const Product = ({products}: ProductProps): JSX.Element => {
    console.log(
        products
    )
    return (
        <div>

        </div>
    )
}

export const getStaticProps: GetStaticProps<ProductsProps> = async () => {
    const { data: products } = await axios.get<ProductModel[]>('http://localhost:3001/products')
    return {
        props: {
            products
        }
    }
}

interface ProductsProps extends Record<string, unknown>{
    products: ProductModel[]
}