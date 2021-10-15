import {Button} from "../../components/Button/Button"
import styles from './Categories.module.scss'
import {Sort} from "../Sort/Sort";


export const Categories = (): JSX.Element => {
  return (
      <main className={styles.categories}>
          <Button appearance='black' className={styles.category}>
              Напитки
          </Button>
          <Button appearance='black'>
              Напитки
          </Button>
          <Button appearance='black'>
              Напитки
          </Button>
          <Button appearance='black'>
              Напитки
          </Button>
          <Button appearance='black'>
              Напитки
          </Button>
          <Sort />
      </main>
  )
}