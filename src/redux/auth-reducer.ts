import {ActionsTypes} from './redux-store';
import {authAPI} from '../api/api';
import {ThunkDispatchType, ThunkType} from './users-reducer';

const SET_USER_DATA = 'SET_USER_DATA'

let initialState: authStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}

export type authStateType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
}

const authReducer = (state: authStateType = initialState, action: ActionsTypes): authStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export type ActionsAuthTypes = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (userId: number, email: string, login: string) => ({
    type: SET_USER_DATA,
    data: {userId, email, login}
}) as const

export const getAuthUserData = (): ThunkType => (dispatch: ThunkDispatchType) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login))
            }
        });

}

export default authReducer;