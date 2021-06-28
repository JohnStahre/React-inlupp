import React from 'react'

const ProductCard = ({product}) => {
    return (
        <div className="col">
            <div className="card h-100">
                <img src={product.image} alt="...product" className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <div className="card-text">
                    <p>{product.short}</p>
                    <p className="text-danger">{product.price}</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ProductCard
