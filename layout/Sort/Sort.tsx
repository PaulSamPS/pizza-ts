import Arrow from './arrow.svg'
import styles from './Sort.module.scss'
import {SortProps} from "./Sort.props";
import cn from 'classnames'

export const Sort = ({className, ...props}: SortProps): JSX.Element => {
    return (
        <div className={cn(styles.sort, className)} {...props}>
            <Arrow className={styles.arrow}/>
            <p className={styles.sortTitle}>Сортироква по:</p>
            <p className={styles.selected}>популярности</p>
            <ul className={styles.modal}>
                <li>популярности</li>
                <li>цене</li>
                <li>алфавиту</li>
            </ul>
        </div>
    )
}