import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Modal,
    Rating,
    TextField,
} from '@mui/material'
import { useAppDispatch } from '../../redux/hooks'
import { removeProduct, updateProduct } from '../../redux/newProductsSlice'
import { useState } from 'react'
import './AddedProductsItem.scss'

type Props = {
    id: number
    title: string
    author: string
    year: number
    rating: number
}
const AddedProductsItem = ({ id, title, author, year, rating }: Props) => {
    const dispatch = useAppDispatch()

    const handleRemoveProduct = () => {
        dispatch(removeProduct(id))
    }

    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    }

    const [updatedData, setUpdatedData] = useState({
        title: title,
        author: author,
        year: '',
        rating: '',
    })

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUpdatedData({ ...updatedData, title: e.target.value })
    }

    const handleAuthorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUpdatedData({ ...updatedData, author: e.target.value })
    }

    const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUpdatedData({ ...updatedData, year: e.target.value })
    }

    const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUpdatedData({ ...updatedData, rating: e.target.value })
    }

    const handleSaveChanges = () => {
        const updatedProduct = {
            id,
            title: updatedData.title,
            author: updatedData.author,
            year: parseInt(updatedData.year),
            rating: parseFloat(updatedData.rating),
        }

        dispatch(updateProduct({ id, updatedProduct }))

        handleClose()
    }

    return (
        <Card variant="outlined" className="product" key={id}>
            <CardContent className="product_content">
                <div className="product-title">{title}</div>
                <div className="product-desc">{author}</div>
                <div className="product-features">Year: {year}</div>
            </CardContent>
            <Rating
                name="half-rating"
                defaultValue={rating}
                precision={0.1}
                readOnly
            />

            <CardActions className="product-btn-wrap">
                <Button variant="contained">Buy</Button>
                <Button
                    variant="outlined"
                    color="error"
                    onClick={handleRemoveProduct}
                >
                    Delete
                </Button>
                <Button onClick={handleOpen}>update</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style} className="modal_box">
                        <div className="update_name">
                            <TextField
                                id="outlined-basic"
                                label="Name"
                                variant="outlined"
                                value={updatedData.title}
                                onChange={handleTitleChange}
                            />
                            <TextField
                                id="outlined-basic"
                                label="Author"
                                variant="outlined"
                                value={updatedData.author}
                                onChange={handleAuthorChange}
                            />
                        </div>
                        <div className="update_years">
                            <TextField
                                id="outlined-basic"
                                label="Year"
                                variant="outlined"
                                value={updatedData.year}
                                onChange={handleYearChange}
                            />
                            <TextField
                                id="outlined-basic"
                                label="Rating"
                                variant="outlined"
                                value={updatedData.rating}
                                onChange={handleRatingChange}
                            />
                        </div>
                        <Button
                            className="save_btn"
                            variant="contained"
                            onClick={handleSaveChanges}
                        >
                            save
                        </Button>
                    </Box>
                </Modal>
            </CardActions>
        </Card>
    )
}
export default AddedProductsItem
