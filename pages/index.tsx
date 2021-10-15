import {Button, Categories} from "../components"
import {Header} from "../PageComponents/Header/Header";
import {Sort} from "../PageComponents/Sort/Sort";

export default function Home(): JSX.Element {
  return (
    <div className='wrapper'>
        <Button appearance='ghost'>
            Добавить
        </Button>
        <Button appearance='primary'>
            Оплатить сейчас
        </Button>
        <Button appearance='black'>
            Все
        </Button>
        <Button appearance='black'>
            Мясные
        </Button>
        <Button appearance='gray'>
            Вернуться назад
        </Button>
        <Button appearance='cart'>
            520 p
        </Button>
        <Header />
        <Categories />
    </div>
  )
}
