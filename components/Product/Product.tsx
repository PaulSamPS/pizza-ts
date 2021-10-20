<<<<<<< HEAD
import {ProductProps} from "./Product.props";
import styles from './Product.module.scss'
import {Item} from "../Item/Item";


export const Product = ({product, className, ...props}: ProductProps): JSX.Element => {

    return (
        <div className={styles.grid} {...props}>
            {product.map(p => <Item key={p.id} p={p}/>)}
        </div>
    )
}
=======
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
>>>>>>> dca501073ad3b75aefab25a7adeb48577a1569f7
