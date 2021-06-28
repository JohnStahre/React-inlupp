import {createStore, applyMiddleware, compose} from 'redux'
// thunk för att returnera funktioner och inte bara objekt
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)