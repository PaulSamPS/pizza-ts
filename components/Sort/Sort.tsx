import Arrow from './arrow.svg'
import styles from './Sort.module.scss'
import {SortProps} from "./Sort.props";
import cn from 'classnames'
import React, {useCallback, useContext, useEffect, useRef, useState} from "react";
import {AppContext} from "../../context/app.context";


export const Sort = React.memo(({upPrice,downPrice,className, ...props}: SortProps): JSX.Element => {
    const sortRef = useRef<null>(null)
    const {sort} = useContext(AppContext)
    const [showModal, setShowModal] = useState<boolean>(false)
    const [activeItem, setActiveItem] = useState<number>(0)
    const activeLabel = sort.map(s => s.name)

    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick)
    }, [showModal])

    const showModalPopUp = () => {
        setShowModal(!showModal)
    }

    const onSelectItem = (index) => {
        setActiveItem(index)
        setShowModal(false)
    }

    const handleOutsideClick = (e) => {
        const path = e.path || (e.composedPath && e.composedPath())
        if (!path.includes(sortRef.current)) {
            setShowModal(false)
        }
    }

    const sortProduct = (id) => {
        return (
            id === 1 ? upPrice :
            id === 2 ? downPrice : undefined
        )
    }

    return (
        <div ref={sortRef} className={cn(styles.sort, className)} {...props}>
            <Arrow className={cn(styles.arrow,{
                [styles.arrowRotation]: showModal
            })}/>
            <p className={styles.sortTitle}>Сортироква по:</p>
            <p className={styles.selected} onClick={showModalPopUp}>
                {activeLabel[activeItem]}
            </p>
            {showModal &&
            <ul className={styles.modal}>
                {sort.map((s,index) =>
                    <li className={cn(styles.modalItems,{
                        [styles.activeItem]: activeItem === index
                    })}
                        key={s.id}
                        onClick={() => onSelectItem(index)}>
                        <span onClick={sortProduct(s.id)}>{s.name}</span>
                    </li>
                )}
            </ul>
            }
        </div>
    )
})