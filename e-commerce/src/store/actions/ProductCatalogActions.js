import actiontypes from "../actiontypes";
import axios from 'axios';

export const getProductCatalog = () => {
    return async dispatch => {
        const res = await axios.get('http://localhost:9999/api/products')
        dispatch(setProducts(res.data))
    }
}

export const setProducts = products => {
    return {
        type: actiontypes().productCatalog.set,
        payload: products
    }
}

// Singel produkt allt som har med enskild produkt hämtar en produkt
// denna strular att hämta, samma strul som i vue uppgiften

export const getProductById = id => {
    return async dispatch => {
        const res = await axios.get(`http://localhost:9999/api/products/${id}`)
        dispatch(setOneProduct(res.data))
    }
}

export const setOneProduct = product => {
    return {
        type: actiontypes().product.set,
        payload: product
    }
}

export const clearProduct = () => {
    return {type: actiontypes().product.clear}
}