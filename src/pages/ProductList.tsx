import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { fetchProducts } from '../redux/productsSlice'
import ProductsListItem from '../components/ProductsList/ProductsListItem'
import AddedProductsItem from '../components/ProductsList/AddedProductsItem'

type Props = {
    searchQuery: string
}
const ProductList = ({ searchQuery }: Props) => {
    const dispatch = useAppDispatch()

    const products = useAppSelector((state) => state.products)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    const addedGoods = useAppSelector((state) => state.newProducts)

    const filteredProducts = products.filter(({ title, category }) => {
        const searchValue = searchQuery.toLowerCase()
        return (
            title.toLowerCase().includes(searchValue) ||
            category.toLowerCase().includes(searchValue)
        )
    })

    const filteredAddedGoods = addedGoods.filter(({ title }) => {
        const searchValue = searchQuery.toLowerCase()
        return title.toLowerCase().includes(searchValue)
    })

    return (
        <main>
            {searchQuery ? (
                <div className="product_list">
                    {filteredProducts.map(
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
                    {filteredAddedGoods.map(
                        ({ id, title, author, year, rating }) => (
                            <AddedProductsItem
                                id={id}
                                title={title}
                                author={author}
                                year={year}
                                rating={rating}
                            />
                        )
                    )}
                </div>
            ) : (
                <div className="product_list">
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
                        ? addedGoods.map(
                              ({ id, title, author, year, rating }) => (
                                  <AddedProductsItem
                                      id={id}
                                      title={title}
                                      author={author}
                                      year={year}
                                      rating={rating}
                                  />
                              )
                          )
                        : null}{' '}
                </div>
            )}
        </main>
    )
}
export default ProductList
