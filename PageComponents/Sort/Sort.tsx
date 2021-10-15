import Arrow from './arrow.svg'
import styles from './Sort.module.scss'

export const Sort = (): JSX.Element => {
    return (
        <div className={styles.sort}>
            <Arrow />
            <p className={styles.sortTitle}>Сортироква по:</p>
            <p>популярности</p>
            <ul className={styles.modal}>
                <li>популярности</li>
                <li>цене</li>
                <li>алфавиту</li>
            </ul>
        </div>
    )
}