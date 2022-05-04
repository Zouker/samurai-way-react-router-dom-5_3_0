import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {RootStateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';
import {PostsType} from './Post/Post';
import {addPostAC, updateNewPostTextAC} from '../../../redux/profile-reducer';

type mapStateToPropsType = {
    posts: Array<PostsType>
    messageForNewPost: string
}

type mapDispatchToPropsType = {
    updateNewPostText: (text: string) => void
    addPost: (postText: string) => void
}


let mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        messageForNewPost: state.profilePage.messageForNewPost
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        updateNewPostText: (text: string) => {
            let action = updateNewPostTextAC(text);
            dispatch(action)
        },
        addPost: (postText: string) => {
            dispatch(addPostAC(postText))
        },
    }
}

const MyPostsContainer = connect<mapStateToPropsType, mapDispatchToPropsType, {}, RootStateType>(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;