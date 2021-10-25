import {withLayout} from "../layout/Layout"
import {GetStaticProps} from "next"
import axios from "axios"
import {Category} from "../interfaces/menu.interface"
import {ProductModel} from "../interfaces/product.iterface";
import {MainPageComponent} from "../page-components";
import {Sort} from "../interfaces/sort.interface";

function Home({product}:HomeProps): JSX.Element {
  return (
    <>
      <MainPageComponent product={product}/>
    </>
  )
}

export default withLayout(Home)


export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const {data: menu} = await axios.get<Category[]>(process.env.NEXT_PUBLIC_DOMAIN + '/menu')
  const {data: product} = await axios.get<ProductModel[]>(process.env.NEXT_PUBLIC_DOMAIN + '/products')
  const {data: sort} = await axios.get<Sort[]>(process.env.NEXT_PUBLIC_DOMAIN + '/sort')
  return {
    props: {
      menu,
      product,
      sort
    }
  }
}

interface HomeProps extends Record<string, unknown> {
  menu: Category[]
  product: ProductModel[]
  sort: Sort[]
}