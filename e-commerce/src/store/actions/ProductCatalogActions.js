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

