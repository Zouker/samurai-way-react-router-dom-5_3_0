import React from 'react';
import {createField, Input, Textarea} from '../../common/FormsControls/FormsControls';
import {InjectedFormProps, reduxForm} from 'redux-form';
import s from './ProfileInfo.module.css'
import style from '../../common/FormsControls/FormControls.module.css';
import {ProfileType} from '../ProfileContainer';

const ProfileDataForm = (props: InjectedFormProps<ProfileType>) => {
    const {handleSubmit, initialValues, error} = props
    return <form onSubmit={handleSubmit}>
        <div>
            <button>save</button>
            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
        </div>
        <div>
            <b>Full name: </b> {createField('Full name', 'fullName', [], Input)}
        </div>
        <div>
            <b>Looking For A Job: </b> {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
        </div>

        <div>
            <b>My professional
                skills: </b> {createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}
        </div>
        <div>
            <b>About me: </b> {createField('About me', 'aboutMe', [], Textarea)}
        </div>
        <div>
            <b>Contacts: </b> {Object.keys(initialValues.contacts ?? {}).map(key => {
            return <div key={key} className={s.contact}>
                <b>{key}: {createField(key, 'contacts.' + key, [], Input)}</b>
            </div>
        })}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm<ProfileType>({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;