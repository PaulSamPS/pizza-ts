import {withLayout} from "../layout/Layout"
import {GetStaticProps} from "next"
import axios from "axios"
import {Category} from "../interfaces/menu.interface"
import {ProductModel} from "../interfaces/product.iterface";
import {Categories} from "../layout/Categories/Categories";

function Home({menu, product}:HomeProps): JSX.Element {
  return (
    <>
      {product.map(p => <li key={p.id}>{p.name}</li>)}
    </>
  )
}

export default withLayout(Home)


export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const {data: menu} = await axios.get<Category[]>('http://localhost:3001/menu')
  const {data: product} = await axios.get<ProductModel[]>('http://localhost:3001/products')
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