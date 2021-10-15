import Link from "next/link";
import {Button} from "../components";


const Cart = (): JSX.Element => {
    return (
        <div className='wrapper'>
            <Link href='/'>
                <a>
                    <Button appearance='gray'>
                        Вернуться назад
                    </Button>
                </a>
            </Link>
        </div>
    )
}

export default Cart