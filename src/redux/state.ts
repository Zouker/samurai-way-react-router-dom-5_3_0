export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type DialogsType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}

type ProfilePageType = {
    posts: Array<PostType>
}
type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}
type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 0},
            {id: 2, message: 'It\'s my first post', likesCount: 23},
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Denis'},
            {id: 2, name: 'Eugene'},
            {id: 3, name: 'Olya'},
            {id: 4, name: 'Zhesha'},
            {id: 5, name: 'Kostya'},
            {id: 6, name: 'Ira'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'},
        ]
    },
    sidebar: {}
}

export default state;