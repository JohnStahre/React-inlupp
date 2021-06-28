import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import { getProductById } from '../store/actions/ProductCatalogActions';
import {getProductById} from '../store/actions/ProductCatalogActions';

const ProductDetails = () => {
    const id = useParams().id
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductById(id))
    }, [dispatch, id])


    return (
        <div>
            ProductDetails
        </div>
    )
}

export default ProductDetails
