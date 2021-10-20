import {Button} from "../../components"
import styles from './Categories.module.scss'
import {Sort} from "../Sort/Sort";
import {CategoriesProps} from "./Categories.props";
import {useContext, useState} from "react";
import cn from 'classnames'
import {AppContext} from "../../context/app.context";




export const Categories = ({...props}: CategoriesProps): JSX.Element => {
    const {menu} = useContext(AppContext)
    const [active, setActive] = useState<number>(0)

    return (
      <main className={styles.categories} {...props}>
          <div className={styles.categoryBlock}>
              {
                  menu.map((m,index) => (
                      <Button key={m.id} appearance='black' className={cn(styles.category, {
                          [styles.activeBlack]: active == index
                      })} onClick={() => setActive(index)}>
                          {m.name}
                      </Button>
                  ))
              }
          </div>
          <Sort className={styles.sort}/>
      </main>
  )
}