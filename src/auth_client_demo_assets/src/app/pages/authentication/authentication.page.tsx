import React from 'react';
import Button from 'react-bootstrap/Button';

import {connect} from 'react-redux';
import {AppState} from '../../store/reducers';
import {AuthenticationState} from '../../store/states';
import {getInternetIdentity, login, logout} from '../../store/actions';

export interface AuthenticationPropsComponent {
    authentication?: AuthenticationState;
    login: typeof login;
    logout: typeof logout;
    getInternetIdentity: typeof getInternetIdentity;
}

export class AuthenticationPageComponent extends React.Component<AuthenticationPropsComponent> {

    constructor(props: AuthenticationPropsComponent) {
        super(props);

        this.onLogin = this.onLogin.bind(this);
        this.onLogout = this.onLogout.bind(this);
        this.getInternetIdentity = this.getInternetIdentity.bind(this);
    }

    /**
     * @param event
     */
    public onLogin(event: React.MouseEvent<HTMLElement>): void {
        this.props.login();
    }

    /**
     * @param event
     */
    public onLogout(event: React.MouseEvent<HTMLElement>): void {
        this.props.logout();
    }

    /**
     * @param event
     */
    public getInternetIdentity(event: React.MouseEvent<HTMLElement>): void {
        this.props.getInternetIdentity();
    }

    public render() {
        const authentication = this.props.authentication;

        return (
            <div className='d-flex align-items-center justify-content-center'>
                <div className='d-flex flex-column align-items-center'>
                    <div className='d-flex flex-row align-items-center auth-logo-container'>
                        <div className='auth-logo-name'>Internet Identity Client</div>
                    </div>

                    <div style={{
                        display: !authentication?.loggingIn ? 'inline' : 'none'
                    }}>
                        <div className='auth-content'
                             style={{
                                 display: !authentication?.loggedIn ? 'block' : 'none'
                             }}>
                            <div className='d-flex flex-column align-items-start'>
                                <p style={{
                                    marginTop: '10px',
                                    fontSize: '12px'
                                }}>If you would like to learn what Internet Identity is, see <a href="https://sdk.dfinity.org/docs/ic-identity-guide/what-is-ic-identity.html">What is Internet Identity?</a>
                                </p>

                                <Button className='tdm-button'
                                        variant='primary'
                                        style={{
                                            backgroundColor: '#2798c6',
                                            borderColor: '#2798c6',
                                            marginTop: '20px',
                                            fontSize: '14px',
                                            width: '100%'
                                        }}
                                        onClick={this.onLogin}>
                                    Log In
                                </Button>
                            </div>
                        </div>

                        <div className='auth-content'
                             style={{
                                 display: authentication?.loggedIn ? 'block' : 'none'
                             }}>
                            <div className='d-flex flex-column align-items-start'>
                                <Button className='tdm-button'
                                        variant='primary'
                                        style={{
                                            backgroundColor: '#d27b4c',
                                            borderColor: '#d27b4c',
                                            marginTop: '20px',
                                            fontSize: '14px',
                                            width: '100%',
                                            display: !authentication?.internetIdentity ? 'block' : 'none'
                                        }}
                                        onClick={this.getInternetIdentity}>
                                    Get Internet Identity
                                </Button>

                                <span style={{
                                    marginTop: '10px',
                                    fontSize: '12px',
                                    display: authentication?.internetIdentity ? 'block' : 'none'
                                }}>{authentication?.internetIdentity}</span>

                                <p style={{
                                    marginTop: '10px',
                                    fontSize: '12px'
                                }}>If you would like to learn what Internet Identity is, see <a href="https://sdk.dfinity.org/docs/ic-identity-guide/what-is-ic-identity.html">What is Internet Identity?</a>
                                </p>

                                <Button className='tdm-button'
                                        variant='primary'
                                        style={{
                                            backgroundColor: '#2798c6',
                                            borderColor: '#2798c6',
                                            marginTop: '20px',
                                            fontSize: '14px',
                                            width: '100%'
                                        }}
                                        onClick={this.onLogout}>
                                    Log Out
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className='lds-dual-ring'
                         style={{
                             display: authentication?.loggingIn ? 'inline' : 'none'
                         }}>
                    </div>

                    <span style={{marginTop: '10px'}}>version: 0.0.1</span>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppState) => {
    return {
        authentication: state.authentication
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        login: () => dispatch(login()),
        logout: () => dispatch(logout()),
        getInternetIdentity: () => dispatch(getInternetIdentity())
    }
}

const connectedAuthPage = connect(mapStateToProps, mapDispatchToProps)(AuthenticationPageComponent);
export {connectedAuthPage as AuthenticationPage};
