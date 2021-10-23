import Link from "next/link";
import Logo from "../../layout/Header/logo.svg";
import {Button} from "../../components";
import Arrow from "./arrow.svg";
import styles from "./CartPageComponent.module.scss"
import CartIcon from "./cart.svg"
import TrashIcon from "./trash.svg"
import MinusIcon from "./minus.svg"
import PlusIcon from "./plus.svg"
import RemoveItem from "./delete.svg"
import {useState} from "react";
import {Header} from "../../layout/Header/Header";

export const CartPageComponent = (): JSX.Element => {
    const [count,setCount] = useState<number>(0)

    return (
        <div className={styles.wrapper}>
            <Header className={styles.header}/>
            <div className={styles.cartWrapper}>
                <div className={styles.cartTop}>
                    <CartIcon className={styles.cartIcon} />
                    <h1 className={styles.title}>Корзина</h1>
                    <div className={styles.trash}>
                      <TrashIcon className={styles.trashIcon} />
                      <p className={styles.trashText}>Очистить корзину</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/14414e03-0322-4751-a431-820c8ce84e58.jpg" alt="item" className={styles.image}/>
                    <div className={styles.titleItem}>
                        <h2>Сырный цыпленок</h2>
                        <p>тонкое тесто, 26 см.</p>
                    </div>
                    <div className={styles.count}>
                        <MinusIcon className={styles.minusIcon} onClick={() => setCount(count - 1)}/>
                        <span className={styles.countItem}>{count}</span>
                        <PlusIcon className={styles.plusIcon} onClick={() => setCount(count + 1)}/>
                    </div>
                    <span className={styles.sum}>770 ₽ </span>
                    <RemoveItem className={styles.remove}/>
                </div>
                <div className={styles.totalBlock}>
                    <div className={styles.totalItems}>
                        <p>Всего пицц: </p>
                        <span>3 шт.</span>
                    </div>
                    <div className={styles.totalSum}>
                        <p>Сумма заказа: </p>
                        <span>900 ₽</span>
                    </div>
                </div>
                <div className={styles.cartBottom}>
                    <Link href='/'>
                        <a>
                         <Button appearance='gray' className={styles.backBtn}>
                             <Arrow className={styles.arrow}/>
                             Вернуться назад
                         </Button>
                        </a>
                    </Link>
                 <Button appearance="primary" className={styles.pay}>
                     Оплатить сейчас
                 </Button>
                </div>
            </div>
        </div>
    )
}