import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import {
    addToDb, 
    getStoredCart
} from '../../utilities/fakedb.js';

const Shop = () => {
    const [products,setProducts]=useState([]);
    const [cart,setCart]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[]);

    useEffect(()=>{
        const storedCart= getStoredCart();
        const savedCart = [];
      
        for(const id in storedCart){
            console.log(id);
            const addedProduct = products.find(p=>p.id===id);
            console.log(addedProduct);
           if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);

           }
        }
       setCart(savedCart)
    },[products])

    function handleAddCart(selectedProduct){
        // console.log(product);
        let newCart=[];
        const exist = cart.find(product=>product.id===selectedProduct.id);
        if(!exist){
            selectedProduct.quantity=1;
            newCart =[...cart,selectedProduct];
        }
        else{
            const rest = cart.filter(product=>product.id!==selectedProduct.id);
            exist.quantity=exist.quantity +1;
            newCart =[...rest,exist];
        }
        
        setCart(newCart);
        addToDb(selectedProduct.id);
         
    }
    
    return (
        <div className='shopContainer'>
            <div className="products">
                {products.map(product=><Product key={product.id} product={product} handleAddCart={handleAddCart}></Product>)}
            </div>
            <div className="orders">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;