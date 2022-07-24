import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import profileReducer, {ActionsProfileTypes} from './profile-reducer';
import dialogsReducer, {ActionsDialogsTypes} from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer, {ActionsUsersTypes} from './users-reducer';
import authReducer, {ActionsAuthTypes} from './auth-reducer';
import thunkMiddleWare, {ThunkDispatch} from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'
import appReducer, {ActionsAppTypes} from './app-reducer';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

export type ActionsTypes =
    ActionsProfileTypes
    | ActionsDialogsTypes
    | ActionsUsersTypes
    | ActionsAuthTypes
    | ActionsAppTypes

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleWare)));

export type RootStateType = ReturnType<typeof rootReducer>
// let store = createStore(rootReducer, applyMiddleware(thunkMiddleWare));

export type AppDispatch = ThunkDispatch<RootStateType, unknown, ActionsTypes>
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector

export type StoreType = typeof store
// @ts-ignore
window.__store__ = store;

export default store;