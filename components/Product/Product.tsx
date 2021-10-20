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
