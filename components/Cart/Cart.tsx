import {Header} from "../../layout/Header/Header";
import styles from "./Cart.module.scss"
import CartIcon from "./cart.svg";
import TrashIcon from "./trash.svg";
import Link from "next/link";
import {Button} from "../Button/Button";
import Arrow from "./arrow.svg";
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {priceRu} from "../../helpers/helpers";
import {CardItem} from "../CardItem/CardItem";


export const Cart = (): JSX.Element => {
    const {totalPrice,totalCount,items} = useTypeSelector(({cart}) => cart)

    const addedItems = Object.keys(items).map(k => {
        return items[k][0]
    })


    console.log(addedItems)

    return (
        <div className={styles.wrapper}>
           <Header />
           <div className={styles.cartWrapper}>
               <div className={styles.cartTop}>
                   <div className={styles.cartTitle}>
                       <CartIcon className={styles.cartIcon} />
                       <h1 className={styles.title}>Корзина</h1>
                   </div>
                   <div className={styles.trash}>
                       <TrashIcon className={styles.trashIcon} />
                       <p className={styles.trashText}>Очистить корзину</p>
                   </div>
               </div>
               {addedItems.map((o) => <CardItem key={o.index} name={o.name} size={o.sizes} image={o.imageUrl} price={o.price} type={o.type}/>)}
               <div className={styles.totalBlock}>
                   <div className={styles.totalItems}>
                       <p>Всего товаров: </p>
                       <span>{totalCount} шт.</span>
                   </div>
                   <div className={styles.totalOrder}>
                       <p>Сумма заказа: </p>
                       <span>{priceRu(totalPrice)}</span>
                   </div>
               </div>
               <div className={styles.cartBottom}>
                   <Link href='/'>
                       <Button appearance='gray' className={styles.backBtn}>
                           <Arrow className={styles.arrow}/>
                           Вернуться назад
                       </Button>
                   </Link>
                   <Button appearance="primary" className={styles.pay}>
                       Оформить заказ
                   </Button>
               </div>
           </div>
        </div>
   )
}
