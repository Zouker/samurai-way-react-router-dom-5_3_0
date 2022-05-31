import React, {FC} from 'react';
import s from './MyPosts.module.css';
import Post, {PostsType} from './Post/Post';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

type PropsType = {
    posts: Array<PostsType>
    messageForNewPost: string
    addPost: (postMessage: string) => void
}

const MyPosts = (props: PropsType) => {

    const postsElements = props.posts.map(p => <Post key={p.id} id={p.id} message={p.message}
                                                     likesCount={p.likesCount}/>)

    const onAddPost = (values: { newPostText: string }) => {
        props.addPost(values.newPostText)
        values.newPostText = ''
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    );
}

type MyPostFormPropsType = {
    newPostText: string
}

const AddNewPostForm: FC<InjectedFormProps<MyPostFormPropsType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newPostText'}/>
            </div>
            <div>
                <button type={'submit'}>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm<MyPostFormPropsType>({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

export default MyPosts;