import axios from 'axios';
import React, { useState } from 'react';

const ProductForm = (props) => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productImage, setProductImage] = useState('');

    const handleProductImageChange = (e) => {
        setProductImage(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post('http://localhost:3000/products', {
            name: productName,
            price: productPrice,
            image: productImage
        });
        console.log('axios =>', res);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Product Name" 
                value={productName} 
                onChange={(e) => setProductName(e.target.value)} 
            />
            <input 
                type="number" 
                placeholder="Product Price" 
                value={productPrice} 
                onChange={(e) => setProductPrice(e.target.value)} 
            />
            <input 
                type="text" 
                placeholder="Product Image URL" 
                value={productImage} 
                onChange={handleProductImageChange} 
            />
            <button type="submit">Add Product</button>
        </form>
    );
};

export default ProductForm;
