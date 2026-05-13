import React from 'react';

const Feature = ({title,name,price}) => {
    return (
        <div>
            <h1>Product {title}</h1>
            <p>Name : {name}</p>
            <p>Price : {price}</p>
        </div>
    );
}

export default Feature;
