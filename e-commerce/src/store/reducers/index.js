import { combineReducers } from 'redux';
import productCatalogReducer from './productCatalogReducer'
import productReducer from './productReducer';
import cartReducer from './cartReducer';

export default combineReducers({
    productCatalog: productCatalogReducer,
    product: productReducer,
    cartReducer
    
})
