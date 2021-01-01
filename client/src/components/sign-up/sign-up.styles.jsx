import styled from 'styled-components';

export const SignUpContainer = styled.div`
    width: 380px;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 800px) {
        width: 90vw;

        transition: all 0.5s;
        position: absolute;
        top: 50px;
        display: none;

        .signUp & {
            display: flex;
        }
    }
`;

export const TitleContainer = styled.h2`
    margin: 10px 0;
`;
