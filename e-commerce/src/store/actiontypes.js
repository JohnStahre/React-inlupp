const actiontypes = () => {
    return {
        productCatalog: {
            set: 'PRODUCT_CATALOG_SET'
        },
        product: {
            set: 'PRODUCT_SET',
            clear: 'PRODUCT_CLEAR'
        }
    }
}
export default actiontypes;
