import {combineReducers, createStore} from 'redux';
import profileReducer, {ActionsProfileTypes} from './profile-reducer';
import dialogsReducer, {ActionsDialogsTypes} from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer, {ActionsUsersTypes} from './users-reducer';
import authReducer, {ActionsAuthTypes} from './auth-reducer';

export type ActionsTypes = ActionsProfileTypes | ActionsDialogsTypes | ActionsUsersTypes | ActionsAuthTypes

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
});

export type RootStateType = ReturnType<typeof rootReducer>
let store = createStore(rootReducer);

export type StoreType = typeof store
// @ts-ignore
window.store = store;

export default store;