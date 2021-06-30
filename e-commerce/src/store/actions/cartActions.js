import actiontypes from '../actiontypes';

export const addToCart = product => {
    return {
        type: actiontypes().cart.add,
        payload: product
    }
}