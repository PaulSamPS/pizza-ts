import {ItemProps} from "./Item.props";
import styles from './Item.module.scss'
import {useState} from "react";
import cn from 'classnames'
import {Button} from "../Button/Button";



export const Item = ({p}: ItemProps): JSX.Element => {
    const [activeSize, setActiveSize] = useState<number>(0)
    const [activeType, setActiveType] = useState<number>(0)

    const {id,name,imageUrl,sizes,availableTypes,price} = p
  return (
    <div className={styles.itemBlock} key={id}>
        <img src={imageUrl} alt="продукт"/>
        <h2 className={styles.name}>{name}</h2>
        {p.category === 0
            ?
            <div className={styles.pizzaBlock}>
                <div className={styles.types}>
                    {availableTypes.map((t, index) => (
                        <li key={`${ t }_${ index }`} className={cn(styles.typeBtn, {
                            [styles.activeBtn]: activeType == index
                        })} onClick={() => setActiveType(index)}>
                            {t}
                        </li>
                    ))}
                </div>
                <div className={styles.sizes}>
                    {sizes.map((s, index) => (
                        <li className={cn(styles.sizeBtn,{
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
            <span className={styles.price}>от {price} p</span>
            <Button appearance='ghost' className={styles.addBtn}>
                Добавить
            </Button>
        </div>
    </div>
  )
}