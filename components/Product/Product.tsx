import {ProductProps} from "./Product.props";
import styles from './Product.module.scss'
import {Item} from "../Item/Item";
import {useEffect,useRef} from "react";
import {Categories} from "../../layout/Categories/Categories";
import Up from './up.svg'
import {useScrollY} from "../../hooks/useScroll";
import {motion, useAnimation} from "framer-motion";
import {useDispatch} from "react-redux";
import {ADD_PIZZA_TO_CART} from "../../redux/reducers/cart";
import {useTypeSelector} from "../../hooks/useTypeSelector";

export const Product = ({product, className, ...props}: ProductProps): JSX.Element => {
    const pizzaRef = useRef<HTMLDivElement>(null)
    const desertRef = useRef<HTMLDivElement>(null)
    const drinkRef = useRef<HTMLDivElement>(null)
    const y = useScrollY()
    const controls = useAnimation()
    const dispatch = useDispatch()
    const cartItems = useTypeSelector(({cart}) => cart.items)


    useEffect(() => {
        controls.start({ opacity: y/ document.body.scrollHeight })
    },[y, controls])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const scrollToPizza = () => {
        pizzaRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        pizzaRef.current?.focus()
    }

    const scrollToDesert = () => {
        desertRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        desertRef.current?.focus()
    }

    const scrollToDrink = () => {
        drinkRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        drinkRef.current?.focus()
    }

    const upPrice = () => {
      product.sort((a, b) => a.price > b.price ? 1 : -1)
        scrollToPizza()
    }

    const downPrice = () => {
        product.sort((a, b) => a.price > b.price ? -1 : 1)
        scrollToPizza()
    }

    const handleAddPizza = (obj) => {
        dispatch({
            type: ADD_PIZZA_TO_CART,
            payload: obj
        })
    }

    return (
        <div {...props} className={styles.product}>
            <Categories
                scrollToPizza={scrollToPizza}
                scrollToDesert={scrollToDesert}
                scrollToDrink={scrollToDrink}
                upPrice={upPrice}
                downPrice={downPrice}
            />
            <div className={styles.productBlock}>
                <h1 className={styles.title} ref={pizzaRef}>Пиццы</h1>
                <div className={styles.grid}>
                    {product.map(p => p.category === 0 ? <Item addedCount={cartItems[p.id] && cartItems[p.id].length} onAddItemToCart={handleAddPizza} key={p.id} product={p}/>: '')}
                </div>
            </div>
            <div className={styles.productBlock}>
                <h1 className={styles.title} ref={desertRef}>Десерты</h1>
                <div className={styles.grid}>
                    {product.map(p => p.category === 1 ? <Item addedCount={cartItems[p.id] && cartItems[p.id].length} onAddItemToCart={handleAddPizza} key={p.id} product={p}/>: '')}
                </div>
            </div>
            <div className={styles.productBlock}>
                <h1 className={styles.title} ref={drinkRef}>Напитки</h1>
                <div className={styles.grid}>
                    {product.map(p => p.category === 2 ? <Item addedCount={cartItems[p.id] && cartItems[p.id].length} onAddItemToCart={handleAddPizza} key={p.id} product={p}/>: '')}
                </div>
            </div>
            <motion.div className={styles.up}
                        animate={controls}
                        initial={{opacity: 0}}>
                <button onClick={scrollToTop}><Up/></button>
            </motion.div>
        </div>
    )
}
