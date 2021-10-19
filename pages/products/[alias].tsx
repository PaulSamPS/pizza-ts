import {withLayout} from "../../layout/Layout"
import {GetStaticPaths, GetStaticProps} from "next"
import axios from "axios"
import {Category} from "../../interfaces/menu.interface"
import {ProductModel} from "../../interfaces/product.iterface";

function Products ({menu, product}:ProductsProps): JSX.Element {
    console.log(product)
    return (
        <>
            {product.map(p => <li>{p.name}</li>)}
        </>
    )
}

export default withLayout(Products)

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: true
    }
}

export const getStaticProps: GetStaticProps<ProductsProps> = async () => {
    const {data: menu} = await axios.get<Category[]>('http://localhost:3001/menu')
    const {data: product} = await axios.get<ProductModel[]>('http://localhost:3001/products')
    return {
        props: {
            menu,
            product
        }
    }
}

interface ProductsProps extends Record<string, unknown> {
    menu: Category[]
    product: ProductModel[]
}