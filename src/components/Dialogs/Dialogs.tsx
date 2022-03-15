import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

type DialogsPropsType = {
    name: string
    id: number
}

type MessagePropsType = {
    message: string
    id: number
}

type DialogsType = {
    dialogs: Array<DialogsPropsType>
    messages: Array<MessagePropsType>
}

const DialogItem = (props: DialogsPropsType) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}> {props.name}</NavLink>
        </div>
    )
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props: DialogsType) => {

    let dialogsData = [
        {id: 1, name: 'Denis'},
        {id: 2, name: 'Eugene'},
        {id: 3, name: 'Olya'},
        {id: 4, name: 'Zhesha'},
        {id: 5, name: 'Kostya'},
        {id: 6, name: 'Ira'},
    ]

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
    ]

    let dialogsElements = dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);

    let messagesElements = messagesData.map(m => <Message key={m.id} id={m.id} message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;