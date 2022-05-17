import {sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {RootStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';
import {DialogsType} from './DialogItem/DialogItem';
import {MessageType} from './Message/Message';

type mapStateToPropsType = {
    dialogs: Array<DialogsType>,
    messages: Array<MessageType>,
    newMessageBody: string,
    isAuth: boolean,
}

type mapDispatchToPropsType = {
    updateNewMessageBody: (body: string) => void,
    sendMessage: () => void,
}

let mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageBody: state.dialogsPage.newMessageBody,
        isAuth: state.auth.isAuth,
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyAC(body))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}

const DialogsContainer = connect<mapStateToPropsType, mapDispatchToPropsType, {}, RootStateType>(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;