import React from 'react'
import { useSelector } from 'react-redux';
import CartProduct from './CartProduct';

const ShoppingCart = () => {

    const shoppingCart = useSelector(state => state.cartReducer.shoppingCart)
    const totalCartAmount = useSelector(state => state.cartReducer.totalCartAmount);

    const empty = (
        <div className="p-2 d-flex justify-content-center align-items-center">
            Din varukorg är tom
        </div>
    )

    return (
        <div>
            { 
            shoppingCart.map(product => (
                <CartProduct product={product} key={product._id} />
            ))
            }

            {/* inte shoppingcart längd då vill vi skriva ut tom */}
            {!shoppingCart.length && empty}

            <div className="dropdowndivider"></div>

            <div className="p-2 d-flex justify-content-between align-items-center">
                <div>
                    <div>
                       Total: <span>{totalCartAmount} SEK</span>
                    </div>
                    <small className="text-muted">inklusive moms</small>
                </div>
                <button className="btn btn-secondary">till kassan</button>


            </div>
        </div>
    )
}

export default ShoppingCart
