import {ActionsTypes} from './store';

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

type ProfilePageType = {
    messageForNewPost: string
    posts: Array<PostsType>
}

let initialState: ProfilePageType = {
    messageForNewPost: '',
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 0},
        {id: 2, message: 'It\'s my first post', likesCount: 23},
    ],
}

export type InitialStateType = typeof initialState

const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case 'ADD-POST': {
            const newPost: PostsType = {
                id: new Date().getTime(),
                message: action.postText,
                likesCount: 0,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                messageForNewPost: ''
            };
        }
        case 'UPDATE-NEW-POST-TEXT': {
            return {
                ...state,
                messageForNewPost: action.newText
            };
        }
        default:
            return state;
    }
}

export type ActionsProfileTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>

export const addPostAC = (postText: string) => {
    return {
        type: 'ADD-POST',
        postText: postText
    } as const
}

export const updateNewPostTextAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText
    } as const
}

export default profileReducer;