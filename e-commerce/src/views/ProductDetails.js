import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import ProductCard from '../components/products/ProductCard';
// import { getProductById } from '../store/actions/ProductCatalogActions';
import {clearProduct, getProductById} from '../store/actions/ProductCatalogActions';
import ProductCard from '../components/products/ProductCard';

const ProductDetails = () => {
    const id = useParams().id
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductById(id))

            return () => {
                dispatch(clearProduct())
            }

    }, [dispatch, id])

    const product = useSelector(state => state.product.product)

    return (
        <div>
            {/* {product && product.name} */}
            {product && <ProductCard product={product} details={true} />}
        </div>
    )
}

export default ProductDetails
