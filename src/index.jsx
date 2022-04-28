import './components/styles/reset.less'
import React from 'react'
import { createRoot } from 'react-dom/client';
import App from './components/App';
import { Provider } from 'react-redux';
import {store} from './reducers'

const container = document.getElementById('app');
const root = createRoot(container); 
root.render(
    //связываем редакс с приложением с помощью провайдера.
    <Provider store={store}>
        <App/>
    </Provider>

);