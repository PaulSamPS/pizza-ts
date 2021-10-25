import {MainPageComponentProps} from "./MainPageComponent.props"
import {Product} from "../../components"
import styles from './MainPageComponent.module.scss'
import {ForwardedRef, forwardRef} from "react";


export const MainPageComponent = forwardRef(({product}: MainPageComponentProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    return (
        <div className={styles.grid} ref={ref}>
            <Product product={product}/>
        </div>
    )
})