import {ActionsTypes} from './redux-store';
import {ThunkDispatchType, ThunkType} from './users-reducer';
import {getAuthUserData} from './auth-reducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'
const SET_ERROR = 'SET_ERROR'

let initialState: appType = {
    initialized: false,
    globalError: null,
}

export type appType = {
    initialized: boolean,
    globalError: null | string
}

const appReducer = (state: appType = initialState, action: ActionsTypes): appType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        case SET_ERROR:
            return {
                ...state,
                globalError: action.error
            }
        default:
            return state;
    }
}

export type ActionsAppTypes = ReturnType<typeof initializedSuccess> | ReturnType<typeof setAppError>

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS}) as const
export const setAppError = (error: string | null) => ({type: SET_ERROR, error}) as const

export const initializeApp = (): ThunkType => (dispatch: ThunkDispatchType) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        })
}

export default appReducer;