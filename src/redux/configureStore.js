import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './modules/reducer';

export default function configureStore(initialState){
    return createStore(
        reducer,
        initialState,
        applyMiddleware(thunk)
    );
}