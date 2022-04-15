import React from 'react';
import {addPostAC, updateNewPostTextAC} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';

type PropsType = {
    // store: StoreType
}

const MyPostsContainer = (props: PropsType) => {
    // let state = props.store.getState();

    // const addPost = (postText: string) => {
    //     props.store.dispatch(addPostAC(postText))
    // }
    //
    // const onPostChange = (text: string) => {
    //     let action = updateNewPostTextAC(text)
    //     props.store.dispatch(action)
    // }

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();

                    const addPost = (postText: string) => {
                        store.dispatch(addPostAC(postText))
                    }

                    const onPostChange = (text: string) => {
                        let action = updateNewPostTextAC(text)
                        store.dispatch(action)
                    }

                    return (
                        <MyPosts updateNewPostText={onPostChange}
                                 addPost={addPost}
                                 posts={store.getState().profilePage.posts}
                                 messageForNewPost={store.getState().profilePage.messageForNewPost}
                        />
                    )
                }
            }
        </StoreContext.Consumer>
    );
}

export default MyPostsContainer;