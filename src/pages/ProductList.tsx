import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { fetchProducts } from '../redux/productsSlice'
import ProductsListItem from '../components/ProductsList/ProductsListItem'
import AddedProductsItem from '../components/ProductsList/AddedProductsItem'

type Props = {}
const ProductList = (props: Props) => {
    const dispatch = useAppDispatch()

    const products = useAppSelector((state) => state.products)

    console.log(products)
    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    const addedGoods = useAppSelector((state) => state.newProducts)
    console.log('asd', addedGoods)

    return (
        <main className="product_list">
            {products.map(
                ({
                    id,
                    title,
                    description,
                    price,
                    images,
                    category,
                    stock,
                    rating,
                }) => (
                    <ProductsListItem
                        id={id}
                        title={title}
                        description={description}
                        price={price}
                        images={images}
                        category={category}
                        stock={stock}
                        rating={rating}
                    />
                )
            )}
            {addedGoods
                ? addedGoods.map(({ id, title, author, year, rating }) => (
                      <AddedProductsItem
                          id={id}
                          title={title}
                          author={author}
                          year={year}
                          rating={rating}
                      />
                  ))
                : null}
        </main>
    )
}
export default ProductList
