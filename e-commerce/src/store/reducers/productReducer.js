import actiontypes from "../actiontypes";
// tom array är det bara en vi ska hämta kan vi sätta den till null är det en bara är null bättre än []
const initState = {
    product: null,
}

const productReducer = (state = initState, action) => {
    switch(action.type) {
        // när vi hämtat alla produkter byter vi ut vår array initstate = null med produkterna
        case actiontypes().product.set:
            return {
                ...state,
                product: action.payload
            }
            // skickar tillbaka
            // return state

            case actiontypes().product.clear:
                return {
                    // spreadar vår state
                    ...state, 
                    product: null
                }
                // state = null
                // return state

        default:
            return state
    }

}

export default productReducer;