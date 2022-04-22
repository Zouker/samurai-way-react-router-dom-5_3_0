import React from 'react';
import styles from './users.module.css';
import {UsersPropsType} from './UsersContainer';

export const Users = (props: UsersPropsType) => {

    if (props.usersPage.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://marcopilloni.com/Resources/avatar.svg',
                    followed: false,
                    fullName: 'Denis',
                    status: 'Hello World!',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: 'https://avatarfiles.alphacoders.com/113/113359.jpg',
                    followed: true,
                    fullName: 'Kostya',
                    status: 'I am a boss',
                    location: {city: 'Warsaw', country: 'Poland'}
                },
                {
                    id: 3,
                    photoUrl: 'https://img.freepik.com/free-vector/cute-orange-robot-cat-avatar_79416-86.jpg',
                    followed: false,
                    fullName: 'Natasha',
                    status: 'Girls power',
                    location: {city: 'Vienna', country: 'Austria'}
                },
            ]
        )
    }


    return <div>
        {
            props.usersPage.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                         <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

