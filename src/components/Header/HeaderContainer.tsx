import React from 'react';
import Header from './Header';
import axios from 'axios';
import {connect} from 'react-redux';
import {RootStateType} from '../../redux/redux-store';
import {setAuthUserData} from '../../redux/auth-reducer';

type MapStatePropsType = {
    login: string | null,
    isAuth: boolean,
}

type MapDispatchToPropsType = {
    setAuthUserData: (userId: number, email: string, login: string) => void
}

export type HeaderContainerPropsType = MapStatePropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => {

            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                this.props.setAuthUserData(id, email, login)
            }
        });
    }

    render() {
        return (
            <Header login={this.props.login} isAuth={this.props.isAuth}/>
        );
    }
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect<MapStatePropsType, MapDispatchToPropsType, {}, RootStateType>(mapStateToProps, {setAuthUserData})(HeaderContainer);