import React from 'react';
import './index.css';
import store from './redux/state';
import ReactDOM from 'react-dom';
import App from './App';


const renderTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderTree();

store.subscribe(renderTree);