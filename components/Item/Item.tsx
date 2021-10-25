import {ItemProps} from "./Item.props";
import styles from './Item.module.scss'
import {useRef, useState} from "react";
import cn from 'classnames'
import {Button} from "../Button/Button";
import Plus from "../Button/plus.svg";

export const Item = ({product}: ItemProps): JSX.Element => {
    const [activeSize, setActiveSize] = useState<number>(0)
    const [activeType, setActiveType] = useState<number>(0)
    const [count, setCount] = useState<number>(0)
    const categoryRef = useRef<HTMLDivElement>(null)

    const {id,name,imageUrl,sizes,availableTypes,price,category} = product

  return (
    <div className={styles.itemBlock}>
        <img src={imageUrl} alt="продукт"/>
        <h2 className={styles.name}>{name}</h2>
        {category === 0
            ?
            <div className={styles.pizzaBlock}>
                <div className={styles.types}>
                    {availableTypes.map((t, index) => (
                        <li key={`${ id }_${ index }`} className={cn(styles.typeBtn, {
                            [styles.activeBtn]: activeType == index
                        })} onClick={() => setActiveType(index)}>
                            {t}
                        </li>
                    ))}
                </div>
                <div className={styles.sizes}>
                    {sizes.map((s, index) => (
                        <li key={`${ id }_${ index }`} className={cn(styles.sizeBtn,{
                            [styles.activeBtn]: activeSize == index
                        })} onClick={() => setActiveSize(index)}>
                            {s} см.
                        </li>
                    ))}
                </div>
            </div>
            : ''
        }
        <div className={styles.blockBottom}>
            {
                category === 0
                    ?
                    <span className={styles.price}>{price[activeSize]} ₽</span>
                    :
                    <span className={styles.price}>{price} ₽</span>
            }
            <Button appearance='ghost' className={styles.addBtn} onClick={() => setCount(count +1)}>
                <Plus/>
                Добавить
                {count > 0 ? <i>{count}</i> : ''}
            </Button>
        </div>
    </div>
  )
}