import {withLayout} from "../layout/Layout"
import {GetStaticProps} from "next"
import axios from "axios"
import {Category} from "../interfaces/menu.interface"
import {ProductModel} from "../interfaces/product.iterface";
import {Product} from "../components";
import {MainPageComponent} from "../page-components";

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