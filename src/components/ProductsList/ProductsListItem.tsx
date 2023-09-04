import { CardActions, Button, Card, CardContent, Rating } from '@mui/material'
import './ProductsListItem.scss'
import Slider from './Slider'
type Props = {
    id: number
    title: string
    description: string
    category: string
    price: number
    images: string[]
    rating: number
    stock: number
}
const ProductsListItem = ({
    id,
    title,
    description,
    price,
    images,
    category,
    stock,
    rating,
}: Props) => {
    return (
        <Card variant="outlined" className="product" key={id}>
            <CardContent className="product_content">
                <div className="product-image">
                    <Slider images={images} />
                </div>

                <div className="product-title">{title}</div>
                <div className="product-desc">{description}</div>
                <div className="product-features">Category: {category}</div>
                <div className="product-features">
                    Remaining {stock} products{' '}
                </div>
                <div className="product-price">{price}$</div>
            </CardContent>
            <Rating
                name="half-rating"
                defaultValue={rating}
                precision={0.1}
                readOnly
            />

            <CardActions className="product-btn-wrap">
                <Button variant="outlined">Add to cart</Button>
            </CardActions>
        </Card>
    )
}
export default ProductsListItem
