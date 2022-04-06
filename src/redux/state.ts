export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type DialogsType = {
    id: number
    name: string
    avatar: string
}
export type MessageType = {
    id: number
    message: string
}

type ProfilePageType = {
    messageForNewPost: string
    posts: Array<PostsType>
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

export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    addPost: (postText: string) => void
    updateNewPostText: (newText: string) => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}

type AddPostActionType = {
    type: 'ADD-POST'
    postText: string
}

type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

export type ActionsTypes = AddPostActionType | UpdateNewPostTextActionType

const store: StoreType = {
    _state: {
        profilePage: {
            messageForNewPost: '',
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 0},
                {id: 2, message: 'It\'s my first post', likesCount: 23},
            ],
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Denis', avatar: 'https://klike.net/uploads/posts/2019-03/1551511856_25.jpg'},
                {id: 2, name: 'Eugene', avatar: 'https://klike.net/uploads/posts/2019-03/1551515594_15.jpg'},
                {id: 3, name: 'Olya', avatar: 'https://klike.net/uploads/posts/2019-03/1551511808_5.jpg'},
                {id: 4, name: 'Zhesha', avatar: 'https://klike.net/uploads/posts/2019-03/1551511823_2.jpg'},
                {id: 5, name: 'Kostya', avatar: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'},
                {id: 6, name: 'Ira', avatar: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg'},
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
    },
    _callSubscriber() {
        console.log('State was changed');
    },

    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer;
    },

    addPost(postText: string) {
        const newPost: PostsType = {
            id: new Date().getTime(),
            message: postText,
            likesCount: 0,
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.messageForNewPost = '';
        this._callSubscriber();
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.messageForNewPost = newText;
        this._callSubscriber();
    },
    dispatch(action) {  // { type: 'ADD-POST' }
        if (action.type === 'ADD-POST') {
            const newPost: PostsType = {
                id: new Date().getTime(),
                message: action.postText,
                likesCount: 0,
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.messageForNewPost = '';
            this._callSubscriber();
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.messageForNewPost = action.newText;
            this._callSubscriber();
        }
    }
}

export default store;