import { Button, Grid, TextField } from '@mui/material'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import './AddProduct.scss'

import { NewProduct } from '../types/ProductsTypes'
import { useAppDispatch } from '../redux/hooks'
import { addProduct } from '../redux/newProductsSlice'
import { useState } from 'react'

type Props = {}

const AddProduct = (props: Props) => {
    const dispatch = useAppDispatch()

    const [initialValues, setInitialValues] = useState<NewProduct>({
        id: 0,
        title: '',
        author: '',
        year: 0,
        rating: 0,
    })

    const validationSchema = Yup.object({
        title: Yup.string().required(`Mandatory field`),
        author: Yup.string().required(`Mandatory field`),
        year: Yup.number()
            .required(`Mandatory field`)
            .integer('The year must be an integer'),
        rating: Yup.number()
            .required(`Mandatory field`)
            .min(1, 'The rating should be from 1 to 5')
            .max(5, 'The rating should be from 1 to 5'),
    })

    const handleSubmit = (values: NewProduct) => {
        console.log('These forms:', values)
        const newProduct = { ...values, id: Date.now() }
        dispatch(addProduct(newProduct))
        setInitialValues(newProduct)
    }

    return (
        <main className="add_new_product">
            <h3>Add New Product</h3>
            <Formik
                className="form_container"
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ errors, touched }) => (
                    <Form>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Field
                                    name="title"
                                    as={TextField}
                                    label="Name"
                                    variant="outlined"
                                    fullWidth
                                    error={Boolean(
                                        errors.title && touched.title
                                    )}
                                    helperText={touched.title && errors.title}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Field
                                    name="author"
                                    as={TextField}
                                    label="Author"
                                    variant="outlined"
                                    fullWidth
                                    error={Boolean(
                                        errors.author && touched.author
                                    )}
                                    helperText={touched.author && errors.author}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Field
                                    name="year"
                                    as={TextField}
                                    label="Year of publication"
                                    variant="outlined"
                                    fullWidth
                                    type="number"
                                    error={Boolean(errors.year && touched.year)}
                                    helperText={touched.year && errors.year}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Field
                                    name="rating"
                                    as={TextField}
                                    label="Рейтинг"
                                    variant="outlined"
                                    fullWidth
                                    type="number"
                                    error={Boolean(
                                        errors.rating && touched.rating
                                    )}
                                    helperText={touched.rating && errors.rating}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                >
                                    ADD Product
                                </Button>
                            </Grid>
                        </Grid>
                    </Form>
                )}
            </Formik>
        </main>
    )
}
export default AddProduct
