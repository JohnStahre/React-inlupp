import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../components/products/ProductCard';
import { getProductCatalog } from '../store/actions/ProductCatalogActions';
// import ProductCard from '../components/products/ProductCard';

// fixar in produkterna på sidan behöver dispatchas
const Products = () => {

    const dispatch = useDispatch();
    // vill hämta produkterna
    const productCatalog = useSelector(state => state.productCatalog);

    useEffect(() => {
     dispatch(getProductCatalog());
    }, [dispatch])

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
        
            {
              productCatalog && productCatalog.map(product => (
                //   <p> {product.name}</p> istället för att göra så här gör vi nedan för att hämta från productcard
                <ProductCard  product={product} key={product._id}/>
                  
              ))
                
            }
        </div>
    )
}

export default Products
