import React from 'react';
import './index.css';
import store, {RootStateType} from './redux/redux-store';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from './StoreContext';
import {BrowserRouter} from 'react-router-dom';

const renderTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

renderTree(store.getState());

store.subscribe(() => {
    let state = store.getState()
    renderTree(state)
});