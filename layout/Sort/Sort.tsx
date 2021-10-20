import Arrow from './arrow.svg'
import styles from './Sort.module.scss'
import {SortProps} from "./Sort.props";
import cn from 'classnames'
import {useState} from "react";

export const Sort = ({className, ...props}: SortProps): JSX.Element => {
    const [showModal, setShowModal] = useState<boolean>(false)

    return (
        <div className={cn(styles.sort, className)} {...props}>
            <Arrow className={styles.arrow}/>
            <p className={styles.sortTitle}>Сортироква по:</p>
            <p className={styles.selected} onClick={() => setShowModal(!showModal)}>
                популярности
            </p>
            <ul className={cn(styles.modal, {
                [styles.showModal]: showModal
            })}>
                <li>популярности</li>
                <li>цене</li>
                <li>алфавиту</li>
            </ul>
        </div>
    )
}