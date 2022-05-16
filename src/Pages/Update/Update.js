import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {
    const {productId} =useParams();
    const [product, setProduct] = useState();
    useEffect(()=>{
        fetch(`http://localhost:5000/product/${productId}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

    console.log(product)
    return (
        <div>
            <h1>udataesdffvsfa</h1>
        </div>
    );
};

export default Update;