import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    padding: 0 2rem;
    gap: 10rem;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 1rem;
    }
`

const Left = styled.div`
    color: #fff;
    font-size: 3rem;
    font-weight: bold;
    text-transform: uppercase;
    position: relative;

    @media (max-width: 768px) {
        font-size: x-large;
        flex-direction: column;
    }
`

const Break = styled.hr`
    position: absolute;
    width: 11rem;
    border: 3px solid var(--orange);
    border-radius: 20%;
    margin: -10px 0;
` 

const Right = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;

    @media (max-width: 768px) {
        padding: 2rem;
    }
`

const EmailContainer = styled.form`
    display: flex;
    gap: 3rem;
    background-color: var(--caloryCard);
    padding: 1rem 3rem;
`

const Input = styled.input`
    background-color: transparent;
    border: none;
    outline: none;
    color: var(--lightgray);

    ::placeholder {
        color: var(--lightgray);
    }
`

const Button = styled.button`
    color: var(--orange);

    &:hover {
            background-color: var(--gray);
            color: var(--orange);
        }
`

const Join = () => {
    return (
        <Container>
            <Left>
                <div>
                    <span className='stroke-text'>ready to</span>
                    <span> level up</span>
                </div>
                <div>
                    <span>your body</span>
                    <span className='stroke-text'> with us?</span>
                </div>
            </Left>
            <Break />

            <Right>
                <EmailContainer action=''>
                    <Input type='email' name='user_email' placeholder='enter your email address' />
                    <Button className='btn'>join now</Button>
                </EmailContainer>
            </Right>
        </Container>
    );
}

export default Join