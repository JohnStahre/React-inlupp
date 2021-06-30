import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {addToCart} from '../../store/actions/cartActions';


const ProductCard = ({product, details}) => {

        const dispatch = useDispatch()

    return (
        <div className="col">
            <div className="card h-100">
                {details && <h1 className="text-center">{product.name}</h1>}
                <img src={product.image} alt="...product" className="card-img-top"/>
                <div className="card-body">
                    {!details && <h5 className="card-title">{product.name}</h5>}
                    <div className="card-text">
                     {details    
                    ?
                    <p>{product.desc}</p>
                    : <p>{product.short}</p>
                    }
                    <p className="h5">Pris: <span className="text-danger"> {product.price} </span></p>
                    </div>
                    <div className={`row row cols-1 ${!details && 'row-cols-lg-2'} g-2 mt-4`}> 
                    <div className="col"> 
                        <button className="btn btn-secondary btn-block" onClick={() => {
                            dispatch(addToCart(product))
                        }}>Lägg i korg</button>
                    </div>
                    {
                        !details && 
                        <div className="col"> 
                            <Link className="btn btn-secondary btn-block" to={`/products/${product._id}`}>läs mer</Link>
                        </div>
                    }
                   
                    </div>
                </div>
            </div>
            
        </div>
    )
}

ProductCard.defaultProps = {
    details: false
}

export default ProductCard
