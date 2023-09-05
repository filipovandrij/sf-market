import Footer from './container/Footer/Footer'
import Header from './container/Header/Header'
import { StyledEngineProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import './styles/App.scss'
import { Route, Routes } from 'react-router-dom'
import ProductList from './pages/ProductList'
import AddProduct from './pages/AddProduct'
import { useState } from 'react'

function App() {
    const [searchQuery, setSearchQuery] = useState<string>('')

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header setSearchQuery={setSearchQuery} />
            <Routes>
                <Route
                    path="/"
                    element={<ProductList searchQuery={searchQuery} />}
                ></Route>

                <Route path="/addProduct" element={<AddProduct />}></Route>
            </Routes>
            <Footer />
        </StyledEngineProvider>
    )
}

export default App
