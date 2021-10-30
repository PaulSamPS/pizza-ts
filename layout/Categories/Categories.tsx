import {Button} from "../../components"
import styles from './Categories.module.scss'
import {Sort} from "../../components/Sort/Sort";
import {CategoriesProps} from "./Categories.props";
import {ForwardedRef, forwardRef, useContext, useEffect, useRef, useState} from "react";
import cn from 'classnames'
import {AppContext} from "../../context/app.context";
import MenuIcon from './menu.svg'
import CloseIcon from './close.svg'

export const Categories = forwardRef(({scrollToPizza,scrollToDesert,scrollToDrink, upPrice,downPrice, ...props}: CategoriesProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const {menu} = useContext(AppContext)
    const sortRef = useRef<null>(null)
    const [active, setActive] = useState<number>(0)
    const [activeItem, setActiveItem] = useState<number>(0)
    const [menuShow, setMenuShow] = useState<boolean>(false)
    const [isOpen, setIsOpen] = useState<boolean>(false)

    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick)
    }, [menuShow])

    const onSelectedItemsMobile = (index) => {
        setActiveItem(index)
        setMenuShow(false)
        setIsOpen(false)
    }

    const onSelectedItems = (index) => {
        setActive(index)
    }


    const handleOpenMenuModal = () => {
        setMenuShow(!menuShow)
        setIsOpen(!isOpen)
    }

    const handleOutsideClick = (e) => {
        const path = e.path || (e.composedPath && e.composedPath())
        if (!path.includes(sortRef.current)) {
            setMenuShow(false)
            setIsOpen(false)
        }
    }

    const scroll = (id) => {
        return (
            id === 1 ? scrollToPizza :
            id === 2 ? scrollToDesert :
            id === 3 ? scrollToDrink :
            undefined
        )
    }

    return (
        <main className={styles.categories} {...props} ref={ref}>
            <button className={styles.menuIcon} onClick={handleOpenMenuModal} ref={sortRef}>
                {isOpen ? <CloseIcon/> : <MenuIcon/>}
            </button>
            {menuShow &&
            <div className={styles.mobileCategory}>
                <ul className={styles.mobileItems}>
                    {menu.map((m,index) => <li key={m.id} className={cn(styles.menuItem, {
                        [styles.activeItem]: activeItem === index
                    })} onClick={() => onSelectedItemsMobile(index)}>
                        <a href="#ref" onClick={scroll(m.id)}>{m.name}</a>
                    </li>)}
                </ul>
            </div>}
            <div className={styles.categoryBlock}>
                {
                    menu.map((m,index) => (
                        <Button key={m.id} appearance='black' className={cn(styles.category, {
                            [styles.activeBlack]: active == index
                        })} onClick={() => onSelectedItems(index)}>
                            <a href="#ref" onClick={scroll(m.id)}>{m.name}</a>
                        </Button>
                    ))
                }
            </div>
            <Sort className={styles.sort} upPrice={upPrice} downPrice={downPrice}/>
        </main>
    )
})