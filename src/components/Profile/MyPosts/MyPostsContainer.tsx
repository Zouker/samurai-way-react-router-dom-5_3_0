import React from 'react';
import {addPostAC, updateNewPostTextAC} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {storeType} from '../../../redux/redux-store';

type PropsType = {
    store: storeType
}

const MyPostsContainer = (props: PropsType) => {
    let state = props.store.getState();

    const addPost = (postText: string) => {
        props.store.dispatch(addPostAC(postText))
    }

    const onPostChange = (text: string) => {
        let action = updateNewPostTextAC(text)
        props.store.dispatch(action)
    }

    return (<MyPosts updateNewPostText={onPostChange}
                     addPost={addPost}
                     posts={state.profilePage.posts}
                     messageForNewPost={state.profilePage.messageForNewPost}
        />

    );
}

export default MyPostsContainer;