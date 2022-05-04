import {combineReducers, createStore} from 'redux';
import profileReducer, {ActionsProfileTypes} from './profile-reducer';
import dialogsReducer, {ActionsDialogsTypes} from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer, {ActionsUsersTypes} from './users-reducer';

export type ActionsTypes = ActionsProfileTypes | ActionsDialogsTypes | ActionsUsersTypes

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
});

export type RootStateType = ReturnType<typeof rootReducer>
let store = createStore(rootReducer);

// @ts-ignore
window.store = store;

export default store;