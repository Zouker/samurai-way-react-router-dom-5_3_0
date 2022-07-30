import React, {useRef, useState} from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from '../../common/preloader/Preloader';
import {ContactsType, ProfileType} from '../ProfileContainer';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/user.png';
import ProfileDataForm from './ProfileDataForm';
import {Button} from 'antd';
import {DownloadOutlined} from '@ant-design/icons';

type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: string) => void
    saveProfile: (profile: ProfileType | null) => void
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = ({
                                                         profile,
                                                         status,
                                                         updateStatus,
                                                         isOwner,
                                                         savePhoto,
                                                         saveProfile
                                                     }) => {
    const ref = useRef<HTMLInputElement>(null);

    const [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: { target: any }) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData: ProfileType | null) => {
        saveProfile(formData)
        setEditMode(false)
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <div className={s.avatar}>
                    <img src={profile.photos.large || userPhoto} className={s.mainPhoto} alt={'large avatar'}/>
                </div>
                <div>
                    <Button
                        type="default"
                        shape="circle"
                        icon={<DownloadOutlined/>}
                        onClick={() => ref.current?.click()}
                    />
                </div>
                {isOwner &&
                    <input
                        type={'file'}
                        onChange={onMainPhotoSelected}
                        ref={ref}
                        style={{display: 'none'}}
                    />
                }
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                {editMode
                    ? <ProfileDataForm initialValues={profile} onSubmit={onSubmit}/>
                    : <ProfileData goToEditMode={() => {
                        setEditMode(true)
                    }} profile={profile} isOwner={isOwner}/>}
            </div>
        </div>
    );
};

type ContactType = {
    contactTitle: string
    contactValue: string
}

type ProfileDataType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}

const ProfileData: React.FC<ProfileDataType> = ({profile, isOwner, goToEditMode}) => {
    return <div>
        {isOwner && <div>
            <Button type="default" shape="round" onClick={goToEditMode}>edit</Button>
        </div>}
        <div>
            <b>Full name: </b> {profile.fullName}
        </div>
        <div>
            <b>Looking For A Job: </b>{profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        {profile.lookingForAJob &&
            <div>
                <b>My professional skills: </b> {profile.lookingForAJobDescription}
            </div>}
        <div>
            <b>About Me: </b> {profile.aboutMe}
        </div>
        <div>
            <b>Contacts: </b> {Object.keys(profile.contacts).map(key => {

            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType]}/>
        })}
        </div>
    </div>
}

const Contact: React.FC<ContactType> = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}: </b> {contactValue}</div>
}

export default ProfileInfo;