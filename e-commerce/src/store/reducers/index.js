import { combineReducers } from 'redux';
import productCatalogReducer from './productCatalogReducer'
import productReducer from './productReducer';

export default combineReducers({
    productCatalog: productCatalogReducer,
    product: productReducer,
    
})
