import styles from "./CardItem.module.scss";
import MinusIcon from "../Cart/minus.svg";
import PlusIcon from "../Cart/plus.svg";
import RemoveItem from "../Cart/delete.svg";
import {CardItemProps} from "./CardItem.props";
import {priceRu} from "../../helpers/helpers";



export const CardItem = ({size,name,image,price,type,...props}: CardItemProps): JSX.Element => {
    return (
        <div className={styles.cardItem}{...props}>
            <img src={image} alt="item" className={styles.image}/>
            <div className={styles.titleItem}>
                <h2>{name}</h2>
                {size && <p>{type} тесто, {size} см.</p>}
            </div>
            <div className={styles.count}>
                <MinusIcon className={styles.minusIcon}/>
                <span className={styles.countItem}>1</span>
                <PlusIcon className={styles.plusIcon}/>
            </div>
            <span className={styles.sum}>{priceRu(price)}</span>
            <div className={styles.remove}>
                <RemoveItem/>
            </div>
        </div>
    )
}