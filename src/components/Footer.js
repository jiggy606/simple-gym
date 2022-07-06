import React from 'react'
import styled from 'styled-components';
import { css } from "styled-components";

import github from '../assets/github.png';
import ig from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
import logo from '../assets/logo.png';

const Container = styled.div`
    position: relative;
`

const Break = styled.hr`
    border: 1px solid var(--lightgray);
`

const FooterContainer = styled.div`
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    align-items: center;
    justify-content: center;
    height: 20rem;
`

const FooterLinks = styled.div`
    display: flex;
    gap: 4rem;
`

const Image = styled.img`
    width: 2rem;
    height: 2rem;
    cursor: pointer;
`

const FooterLogo = styled.div``

const FooterImage = styled.img`
    width: 12rem;
`

const Blur1 = styled.div`
    bottom: 0;
    right: 15%;
    width: 26rem;
    height: 12rem;
    filter: blur(200px);
    background: red;
`

const Blur2 = styled.div`
    bottom: 0;
    left: 15%;
    width: 26rem;
    height: 12rem;
    filter: blur(200px);
    background: rgb(255, 115, 0);
`


const Footer = () => {
    return (
        <Container>
            <Break />
            <FooterContainer>
                <FooterLinks>
                    <Image src={github} />
                    <Image src={linkedin} />
                    <Image src={ig} />
                </FooterLinks>

                <FooterLogo>
                    <FooterImage src={logo} />
                </FooterLogo>
            </FooterContainer>

            <Blur1 />
            <Blur2 className='blur' />
        </Container>
    );
}

export default Footer