import { onLoginClick, onLoginFieldChange } from '../actions/authAction';
import { connect } from 'react-redux';
import Login from '../components/LoginComponent';

const mapStateToProps = (state, ownProps) => {
    return {
        userName: state.auth.userName,
        password: state.auth.password
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLoginClick: () => dispatch(onLoginClick()),
        onLoginFieldChange: (id, val) => dispatch(onLoginFieldChange(id, val))
    }
};

export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);
export default LoginContainer;
