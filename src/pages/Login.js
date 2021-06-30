import React from 'react';
import LoginForm from '../components/LoginForm';

class Login extends React.Component {

    render() {
        return (
            <>
                <LoginForm history={this.props.history} />
            </>
        )
    }
}

export default Login;