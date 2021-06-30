import actiontypes from '../actiontypes';

const initState = {
    shoppingCart: [],
    totalCartQuantity: 0,
    totalCartAmount: 0
}

const cartReducer = (state = initState, action) => {
    switch(action.type) {
        case actiontypes().cart.add:
            // kolla om produkte vi får i payload om den finns loopar igenom shoppingcart
            let itemIndex = state.shoppingCart.findIndex(product => product._id === action.payload._id)
            itemIndex < 0
            // om den är mindre än noll varav ?
            // Nedan: if state om den inte finns byter vi ut arrayen spreadar och  lägger vi till 1 trycker vi på knappen ökas den med 1
            ? state.shoppingCart = [...state.shoppingCart, {...action.payload, quantity: 1}]
            // om den däremot finns :
            : state.shoppingCart[itemIndex].quantity +=1
            return state

        default:
            return state
    }
}

export default cartReducer;