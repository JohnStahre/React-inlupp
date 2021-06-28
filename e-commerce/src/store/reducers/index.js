import { combineReducers } from 'redux';
import productCatalogReducer from './productCatalogReducer'

export default combineReducers({
    productCatalog: productCatalogReducer
    
})
