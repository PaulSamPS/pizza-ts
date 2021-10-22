import Arrow from './arrow.svg'
import styles from './Sort.module.scss'
import {SortProps} from "./Sort.props";
import cn from 'classnames'
import {useContext, useEffect, useRef, useState} from "react";
import {AppContext} from "../../context/app.context";

export const Sort = ({className, ...props}: SortProps): JSX.Element => {
    const sortRef = useRef<null>(null)
    const {sort} = useContext(AppContext)
    const [showModal, setShowModal] = useState<boolean>(false)
    const [activeItem, setActiveItem] = useState<number>(0)
    const activeLabel = sort[activeItem]

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

    return (
        <div ref={sortRef} className={cn(styles.sort, className)} {...props}>
            <Arrow className={cn(styles.arrow,{
                [styles.arrowRotation]: showModal
            })}/>
            <p className={styles.sortTitle}>Сортироква по:</p>
            <p className={styles.selected} onClick={showModalPopUp}>
                {activeLabel.name}
            </p>
            {showModal &&
            <ul className={styles.modal}>
                {sort.map((s,index) =>
                    <li className={cn(styles.modalItems,{
                        [styles.activeItem]: activeItem === index
                    })}
                        key={s.id}
                        onClick={() => onSelectItem(index)}>
                        {s.name}
                    </li>
                )}
            </ul>
            }
        </div>
    )
}