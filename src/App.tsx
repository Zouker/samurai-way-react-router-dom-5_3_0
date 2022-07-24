import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {HashRouter, Redirect, Route, Switch, withRouter} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import HeaderContainer from './components/Header/HeaderContainer';
import {connect, Provider} from 'react-redux';
import store, {RootStateType} from './redux/redux-store';
import {compose} from 'redux';
import {initializeApp} from './redux/app-reducer';
import {Preloader} from './components/common/preloader/Preloader';
import {withSuspense} from './hoc/withSuspense';
import {LoginForm} from './components/Login/Login';
import {notification} from 'antd';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
// const LoginPage = React.lazy(() => import('./components/Login/Login'));

type MapStatePropsType = {
    initialized: boolean,
    globalError: string | null
}

type MapDispatchToPropsType = {
    initializeApp: () => void
}

export type AppPropsType = MapStatePropsType & MapDispatchToPropsType

class App extends React.Component<AppPropsType> {
    catchAllUnhandledErrors = (promiseRejectionEvent: PromiseRejectionEvent) => {
        alert('Some error occured');
        console.error(promiseRejectionEvent)
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }

    openNotificationWithIcon = (type: 'error') => {
        notification[type]({
            message: this.props.globalError
        });
    };

    componentDidUpdate() {
        if (this.props.globalError) {
            this.openNotificationWithIcon('error')
        }
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className={'app-wrapper app-wrapper-content'}>
                <HeaderContainer/>
                <Navbar/>
                <Switch>
                    <Route exact path="/" render={() => <Redirect to={'/profile'}/>}/>
                    <Route path="/dialogs" render={withSuspense(DialogsContainer)}/>
                    <Route path="/profile/:userId?"
                           render={withSuspense(ProfileContainer)}/>
                    <Route path="/users" render={withSuspense(UsersContainer)}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                    <Route path="/login" render={withSuspense(LoginForm)}/>
                    <Route path={'*'} render={() => <div>404 NOT FOUND </div>}/>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => ({
    initialized: state.app.initialized,
    globalError: state.app.globalError
})

let AppContainer = compose<React.ComponentType>(withRouter, connect<MapStatePropsType, MapDispatchToPropsType, {}, RootStateType>(mapStateToProps, {initializeApp}))(App);

const SamuraiJSApp = () => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}

export default SamuraiJSApp