import {withLayout} from "../layout/Layout"
import {GetStaticProps} from "next"
import axios from "axios"
import {Category} from "../interfaces/menu.interface"
import {ProductModel} from "../interfaces/product.iterface";
<<<<<<< HEAD
import {Product} from "../components";
import {MainPageComponent} from "../page-components";

function Home({product}:HomeProps): JSX.Element {
  return (
    <>
      <MainPageComponent product={product}/>
=======
import {Categories} from "../layout/Categories/Categories";

function Home({menu, product}:HomeProps): JSX.Element {
  return (
    <>
      {product.map(p => <li key={p.id}>{p.name}</li>)}
>>>>>>> dca501073ad3b75aefab25a7adeb48577a1569f7
    </>
  )
}

export default withLayout(Home)


export const getStaticProps: GetStaticProps<HomeProps> = async () => {
<<<<<<< HEAD
  const {data: menu} = await axios.get<Category[]>(process.env.NEXT_PUBLIC_DOMAIN + '/menu')
  const {data: product} = await axios.get<ProductModel[]>(process.env.NEXT_PUBLIC_DOMAIN + '/products')
=======
  const {data: menu} = await axios.get<Category[]>('http://localhost:3001/menu')
  const {data: product} = await axios.get<ProductModel[]>('http://localhost:3001/products')
>>>>>>> dca501073ad3b75aefab25a7adeb48577a1569f7
  return {
    props: {
      menu,
      product
    }
  }
}

interface HomeProps extends Record<string, unknown> {
  menu: Category[]
  product: ProductModel[]
}