import actiontypes from "../actiontypes";
// tom array är det bara en vi ska hämta kan vi sätta den till null
const initState = []

const productCatalogReducer = (state = initState, action) => {
    switch(action.type) {

        // när vi hämtat alla produkter byter vi ut vår array initstate = null med produkterna
        case actiontypes().productCatalog.set:
            state = action.payload 
            // skickar tillbaka
            return state

        default:
            return state
    }

}

export default productCatalogReducer ;