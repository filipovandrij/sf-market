import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { fetchProducts } from '../redux/productsSlice'
import ProductsListItem from '../components/ProductsList/ProductsListItem'

type Props = {}
const ProductList = (props: Props) => {
    const dispatch = useAppDispatch()

    // Загружаем данные из Redux
    const products = useAppSelector((state) => state.products)

    console.log(products)
    useEffect(() => {
        // Вызываем действие для загрузки товаров
        dispatch(fetchProducts())
    }, [dispatch])

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
        </main>
    )
}
export default ProductList
