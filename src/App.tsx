import Footer from './container/Footer/Footer'
import Header from './container/Header/Header'
import Main from './container/Main/Main'

import { StyledEngineProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import './styles/App.scss'
import { Route, Routes } from 'react-router-dom'
import ProductList from './pages/ProductList'
import AddProduct from './pages/AddProduct'

function App() {
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header />
            <Routes>
                <Route path="/" element={<ProductList />}></Route>

                <Route path="/addProduct" element={<AddProduct />}></Route>
            </Routes>
            <Footer />
        </StyledEngineProvider>
    )
}

export default App
