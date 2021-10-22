import Link from "next/link";
import {Button} from "../components";
import Arrow from "../components/Button/arrow.svg";
import styles from "../components/Button/Button.module.scss";


const Cart = (): JSX.Element => {
    return (
        <div className='wrapper'>
            <Link href='/'>
                <a>
                    <Button appearance='gray'>
                        <Arrow className={styles.arrow}/>
                        Вернуться назад
                    </Button>
                </a>
            </Link>
        </div>
    )
}

export default Cart