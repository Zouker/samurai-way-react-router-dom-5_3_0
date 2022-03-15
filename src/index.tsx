import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let dialogsData: Array<DialogsType> = [
    {id: 1, name: 'Denis'},
    {id: 2, name: 'Eugene'},
    {id: 3, name: 'Olya'},
    {id: 4, name: 'Zhesha'},
    {id: 5, name: 'Kostya'},
    {id: 6, name: 'Ira'},
]

let messagesData: Array<MessageType> = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'},
]

let posts: Array<PostType> = [
    {id: 1, message: 'Hi, how are you?', likesCount: 0},
    {id: 2, message: 'It\'s my first post', likesCount: 23},
]

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type DialogsType = {
    name: string
    id: number
}

export type MessageType = {
    message: string
    id: number
}

ReactDOM.render(
    <React.StrictMode>
        <App posts={posts} dialogsData={dialogsData} messagesData={messagesData}/>
    </React.StrictMode>,
    document.getElementById('root')
);