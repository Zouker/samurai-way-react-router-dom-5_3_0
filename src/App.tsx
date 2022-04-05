import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {StoreType} from './redux/state';

export type PropsType = {
    store: StoreType
    addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
}

const App: React.FC<PropsType> = (props) => {
    const state = props.store.getState()

    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path="/profile"
                           render={() => <Profile messageForNewPost={state.profilePage.messageForNewPost}
                                                  posts={state.profilePage.posts}
                                                  updateNewPostText={props.updateNewPostText}
                                                  addPost={props.addPost}/>}/>
                    <Route path="/dialogs" render={() => <Dialogs dialogs={state.dialogsPage.dialogs}
                                                                  messages={state.dialogsPage.messages}/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
