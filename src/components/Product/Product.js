import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const {handleAddCart,product}=props;
    const{name,seller,img,ratings,price}=product;
    return (
     <div className="product-container">
           <div className='product'>
            <img  src={img} alt="" />
            <h3>{name}</h3>
            <p>Seller : {seller}</p>
            <h5>Price : {price}</h5>
            <p>Ratings : {ratings} Stars</p>
            
        </div>
        <button className='btn-cart' onClick={()=>handleAddCart(product)}>
            <p>Add to cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </button>
     </div>
    );
};

export default Product;