import { StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import HomeLayout from './layouts/HomeLayout.jsx'
import LoginForm from './components/LoginForm.jsx'
import ProductList from './components/ProductList.jsx'
import ProductDetails from './components/ProductDetails.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import AdminPage from './components/AdminPage.jsx'   
import { ToastContainer } from 'react-toastify'

const AppRouter = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://vite-backend-1sq4.onrender.com/products', {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <>
            <ToastContainer/>
            <BrowserRouter>
                <Routes>
                    <Route element={<HomeLayout />}>
                        <Route path='/' element={<App />} />
                        <Route path="/products">
                            <Route index element={<ProductList products={products} />} />
                            <Route path=':id' element={<ProductDetails />} />
                            <Route path='details' element={<ProductList />} />
                        </Route>
                        <Route path='/About' element={<About />} />
                        <Route path='/Contact' element={<Contact />} />
                    </Route>
                    <Route path='/LoginForm' element={<LoginForm />} />
                    <Route
                        path='/adminPage'
                        element={
                            <ProtectedRoute>
                                <AdminPage />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
};

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AppRouter />
    </StrictMode>
)
