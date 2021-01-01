import { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import { SignInContainer, ButtonsContainer, TitleContainer} from './sign-in.styles.jsx';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [userCredentials, setCredentials] = useState({ email: '', password: ''});

    const { email, password } = userCredentials;

    const handleSubmit = async e => {
        e.preventDefault();

        emailSignInStart(email, password);
        // try {
        //     await auth.signInWithEmailAndPassword(email, password);
        //     this.setState({ email: '', password: '' })
            
        // } catch (error) {
        //     console.error(error)
        // }
    }

    const handleChange = e => {
        const {value, name} = e.target;
        setCredentials({ ...userCredentials, [name]: value });
    }


    return (
        <SignInContainer>
            <TitleContainer>I already have an account</TitleContainer>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput 
                    name="email"
                    type="email"
                    label="email"
                    value={email}
                    handleChange={handleChange}
                    required 
                />
                <FormInput 
                    name="password" 
                    type="password"
                    label="password"
                    value={password}
                    handleChange={handleChange}
                    required                        
                />
                <ButtonsContainer>
                    <CustomButton type="submit"> Sign In </CustomButton>
                    <CustomButton 
                        type="button" 
                        onClick={googleSignInStart} 
                        isGoogleSignIn
                    > Sign In With Google </CustomButton>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn)