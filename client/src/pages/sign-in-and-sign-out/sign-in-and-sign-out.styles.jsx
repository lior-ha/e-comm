import styled from 'styled-components';

export const SignInAndSignUpContainer = styled.div`
	width: 850px;
	display: flex;
	justify-content: space-between;
    margin: 30px auto;
    position: relative;
    
    @media screen and (max-width: 800px) {
        width: 90vw;
        flex-direction: column;
        
        &.signUp .signUp, &.signIn .signIn {
            border: 1px solid black;
            background-color: unset;
            outline: none;

            &:hover {
                background-color: unset;
                color: unset;
            }
        }
    }
`
export const SignInAndSignOutTabs = styled.div`
    display: none;

    @media screen and (max-width: 800px) {
        display: flex;
        justify-content:space-between;

        button {
            width: 48%;
            min-width: unset;
        }
    }
`