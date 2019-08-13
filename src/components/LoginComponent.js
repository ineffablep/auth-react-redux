import React from 'react';

const Login = ({ userName, password, onLoginClick, onLoginFieldChange }) => {
    return (
        <div className="login">
            <div className="form-group">
                <label className="form-label">Email or Phone Number</label>
                <input type="text"
                    className="form-control"
                    onChange={(e) => onLoginFieldChange('userName', e.target.value)}
                    value={userName} />
            </div>
            <div className="form-group">
                <label className="form-label">Password</label>
                <input type="password"
                    className="form-control"
                    onChange={(e) => onLoginFieldChange('password', e.target.value)}
                    value={password} />
            </div>
            <div className="form-group">
                <button className="btn btn-primary" onClick={onLoginClick}>Submit</button>
            </div>
        </div>
    )
}

export default Login;
