//Создаю стор и корневой редьюсер

import { combineReducers } from 'redux';
import { legacy_createStore as createStore, applyMiddleware} from 'redux'
import usersReducer from './usersReducer';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import userReducer from './userReducer';
import modalReducer from './modalReducer'
import listReducer from './listReducer'

const rootReducer = combineReducers(
    {
        users: usersReducer,
        user: userReducer,
        modal: modalReducer,
        list: listReducer
    }
)


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))