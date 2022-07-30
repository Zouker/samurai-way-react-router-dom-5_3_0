import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Textarea} from '../../../common/FormsControls/FormsControls';
import {maxLengthCreator, required} from '../../../../utils/validators/validators';
import {Button} from 'antd';
import styles from './AddNewPostForm.module.css'

type MyPostFormPropsType = {
    newPostText: string
}
const maxLength30 = maxLengthCreator(30);
const AddNewPostForm: FC<InjectedFormProps<MyPostFormPropsType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={styles.container}>
                <Field
                    component={Textarea}
                    name={'newPostText'}
                    validate={[required, maxLength30]}
                    placeholder={'Post message'}
                    rows={3}
                />
                <div>
                    <Button htmlType={'submit'} type={'default'} shape={'round'}>Add post</Button>
                </div>
            </div>
        </form>
    )
}
export const AddNewPostFormRedux = reduxForm<MyPostFormPropsType>({form: 'ProfileAddNewPostForm'})(AddNewPostForm)