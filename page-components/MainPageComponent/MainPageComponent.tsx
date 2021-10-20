import {MainPageComponentProps} from "./MainPageComponent.props";
import {Product} from "../../components";
import styles from './MainPageComponent.module.scss'


export const MainPageComponent = ({product}: MainPageComponentProps): JSX.Element => {
  return (
      <div className={styles.grid}>
        <Product product={product}/>
      </div>
  )
}