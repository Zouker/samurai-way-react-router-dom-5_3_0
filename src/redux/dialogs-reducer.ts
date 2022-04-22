import {ActionsTypes} from './store';
import {v1} from 'uuid';

export type DialogsType = {
    id: number
    name: string
    avatar: string
}
export type MessageType = {
    id: string
    message: string
}

let initialState = {
    dialogs: [
        {id: 1, name: 'Denis', avatar: 'https://klike.net/uploads/posts/2019-03/1551511856_25.jpg'},
        {id: 2, name: 'Eugene', avatar: 'https://klike.net/uploads/posts/2019-03/1551515594_15.jpg'},
        {id: 3, name: 'Olya', avatar: 'https://klike.net/uploads/posts/2019-03/1551511808_5.jpg'},
        {id: 4, name: 'Zhesha', avatar: 'https://klike.net/uploads/posts/2019-03/1551511823_2.jpg'},
        {id: 5, name: 'Kostya', avatar: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'},
        {id: 6, name: 'Ira', avatar: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg'},
    ] as Array<DialogsType>,
    messages: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'How are you?'},
        {id: v1(), message: 'Yo'},
        {id: v1(), message: 'Yo'},
        {id: v1(), message: 'Yo'},
    ] as Array<MessageType>,
    newMessageBody: ''
}

export type InitialStateType = typeof initialState

const dialogsReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            return {
                ...state,
                newMessageBody: action.body
            };
        case 'SEND-MESSAGE':
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: v1(), message: body}]
            };
        default:
            return state;
    }
}

export type ActionsDialogsTypes =
    ReturnType<typeof updateNewMessageBodyAC>
    | ReturnType<typeof sendMessageAC>

export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        body: body
    } as const
}

export const sendMessageAC = () => {
    return {
        type: 'SEND-MESSAGE'
    } as const
}

export default dialogsReducer;