import React, {FC} from 'react';
import s from './Dialogs.module.css'
import DialogItem, {DialogsType} from './DialogItem/DialogItem';
import Message, {MessageType} from './Message/Message';
import {Redirect} from 'react-router-dom';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newMessageBody: string
    sendMessage: (values: string) => void
    isAuth: boolean
}

const Dialogs = (props: DialogsPageType) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} avatar={d.avatar}/>);

    let messagesElements = props.messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>);

    let addNewMessage = (values: { newMessageBody: string }) => {
        props.sendMessage(values.newMessageBody);
        values.newMessageBody = '';
    }

    if (!props.isAuth) return <Redirect to={'/login'}/>;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    );
};

type DialogsFormPropsType = {
    newMessageBody: string
}

const AddMessageForm: FC<InjectedFormProps<DialogsFormPropsType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newMessageBody'} placeholder={'Enter your message'}/>
            </div>
            <div>
                <button type={'submit'}>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<DialogsFormPropsType>({form: 'dialogAddMessageForm'})(AddMessageForm)


export default Dialogs;