import {ActionsTypes} from './redux-store';
import {PostsType} from '../components/Profile/MyPosts/Post/Post';
import {ProfileType} from '../components/Profile/ProfileContainer';

let initialState = {
    messageForNewPost: '',
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 0},
        {id: 2, message: 'It\'s my first post', likesCount: 23},
    ],
    profile: null as null | ProfileType
}

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

export type InitialStateType = typeof initialState

const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case ADD_POST: {
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
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                messageForNewPost: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    }
}

export type ActionsProfileTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof setUserProfile>

export const addPostAC = (postText: string) => {
    return {
        type: ADD_POST,
        postText: postText
    } as const
}

export const updateNewPostTextAC = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const
}

export const setUserProfile = (profile: ProfileType | null) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}

export default profileReducer;