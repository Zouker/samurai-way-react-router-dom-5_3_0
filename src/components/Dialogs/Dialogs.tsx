import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import state, {DialogsType, MessageType} from '../../redux/state';

type PropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}

const Dialogs = (props: PropsType) => {

    let dialogsElements = state.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);

    let messagesElements = state.dialogsPage.messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>);

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