import React from 'react';
import './index.css';
import state, {addPost, RootStateType, subscribe, updateNewPostText} from './redux/state';
import ReactDOM from 'react-dom';
import App from './App';

const renderTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderTree(state);

subscribe(renderTree);