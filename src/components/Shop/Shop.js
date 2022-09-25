import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products,setProducts]=useState([]);
    const [orders,setOrders]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[]);
    function handleAddCart(product){
        console.log(product);
        const newOrder =[...orders,product];
        setOrders(newOrder);
         
    }
    return (
        <div className='shopContainer'>
            <div className="products">
                {products.map(product=><Product key={product.id} product={product} handleAddCart={handleAddCart}></Product>)}
            </div>
            <div className="orders">
            <h1>Orders : {orders.length}</h1>
            </div>
        </div>
    );
};

export default Shop;