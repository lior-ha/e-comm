import { useState } from 'react'
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.actions'

import { SignUpContainer, TitleContainer } from './sign-up.styles.jsx';

const SignUp = ({ signUpStart }) => {
    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const { email, displayName, password, confirmPassword } = userCredentials;

    const handleSubmit = async e => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert(`Password Don't Match`);
            return;
        }
        
        signUpStart({ email, displayName, password });
        
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setUserCredentials({...userCredentials, [name]: value});
    }

    return (
        <SignUpContainer>
            <TitleContainer>I do not have an account</TitleContainer>
            <span>Sign up with your email and password</span>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    onChange={handleChange}
                    label="Display Name"
                    required
                />
                <FormInput
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    label="Email"
                    required
                />
                <FormInput
                    type="password"
                    name="password"
                    value={password}
                        onChange={handleChange}
                    label="Password"
                    required
                />
                <FormInput
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                    label="Confirm Password"
                    required
                />
                <CustomButton type="submit"> Sign Up </CustomButton>
            </form>
        </SignUpContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredntials => dispatch(signUpStart(userCredntials))
});

export default connect(null, mapDispatchToProps)(SignUp);