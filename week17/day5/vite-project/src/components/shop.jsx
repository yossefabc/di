import React from "react";
import {Link} from 'react-router-dom';
const Shop=(props)=>{
    const products=[
        {id:1, name: 'imac', price:500},
        {id:2, name: 'iphone', price:600},
        {id:3, name:'iwatch', price:700}
    ]
    
    return (
    <>
    <h2>Shop</h2>;
    {products.map((item)=>{
       return <div key={item.id}>
        <h3>{item.name}</h3>
        <p>{item.price}</p>
        <Link to={`/product/${item.id}/${item.name}`}>buy now</Link>
        <button>buy now</button>
       </div>
    })}



    </>
    );
};

export default Shop;