import {ProductProps} from "./Product.props";
import styles from './Product.module.scss'
import {Item} from "../Item/Item";
import {useEffect, useRef} from "react";
import {Categories} from "../../layout/Categories/Categories";
import Up from './up.svg'
import {useScrollY} from "../../hooks/useScroll";
import {motion, useAnimation} from "framer-motion";


export const Product = ({product, className, ...props}: ProductProps): JSX.Element => {
    const pizzaRef = useRef<HTMLDivElement>(null)
    const desertRef = useRef<HTMLDivElement>(null)
    const drinkRef = useRef<HTMLDivElement>(null)
    const y = useScrollY()
    const controls = useAnimation()

    const title = [
        {
            name: 'Пиццы',
            category: 0
        },
        {
            name: 'Десерты',
            category: 1
        },
        {
            name: 'Напитки',
            category: 2
        }
    ]


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

    return (
        <div {...props} className={styles.product}>
            <Categories scrollToPizza={scrollToPizza} scrollToDesert={scrollToDesert} scrollToDrink={scrollToDrink}/>
            <div className={styles.productBlock}>
                <h1 className={styles.title} ref={pizzaRef}>Пиццы</h1>
                <div className={styles.grid}>
                    {product.map(p => p.category === 0 ? <Item key={p.id} product={p}/>: '')}
                </div>
            </div>
            <div className={styles.productBlock}>
                <h1 className={styles.title} ref={desertRef}>Десерты</h1>
                <div className={styles.grid}>
                    {product.map(p => p.category === 1 ? <Item key={p.id} product={p}/>: '')}
                </div>
            </div>
            <div className={styles.productBlock}>
                <h1 className={styles.title} ref={drinkRef}>Напитки</h1>
                <div className={styles.grid}>
                    {product.map(p => p.category === 2 ? <Item key={p.id} product={p}/>: '')}
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
