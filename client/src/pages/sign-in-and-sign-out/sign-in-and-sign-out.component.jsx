import React, { useState } from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { SignInAndSignUpContainer, SignInAndSignOutTabs } from './sign-in-and-sign-out.styles.jsx';

const SignInAndSignOutPage = () => {
    
    const [isActive, setActive] = useState(true);

    const handleClick = (e) => {
        if (e.target.value === "signIn") {
            setActive(true);
        } else {
            setActive(false);
        };
    };

    return (
        <SignInAndSignUpContainer className={isActive ? 'signIn' : 'signUp'}>
            <SignInAndSignOutTabs>
                <CustomButton onClick={handleClick} value="signIn" className="signIn">Sign In</CustomButton>
                <CustomButton onClick={handleClick} value="signUp" className="signUp">Sign Up</CustomButton>
            </SignInAndSignOutTabs>
            <SignIn />
            <SignUp />
        </SignInAndSignUpContainer>
    )
};

export default SignInAndSignOutPage;