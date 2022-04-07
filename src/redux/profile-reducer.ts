import {ActionsTypes, PostsType, ProfilePageType} from './state';

const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {

    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostsType = {
                id: new Date().getTime(),
                message: action.postText,
                likesCount: 0,
            }
            state.posts.push(newPost);
            state.messageForNewPost = '';

            return state;
        case 'UPDATE-NEW-POST-TEXT':
            state.messageForNewPost = action.newText;

            return state;
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