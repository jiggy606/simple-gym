import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import Bar from '../assets/bars.png'

import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
        position: fixed;
        right: 2rem;
        z-index: 99;
        justify-content: space-between;
        display: flex;
    }
`;

const Image = styled.img`
    width: 10rem;
    height: 3rem;
`;

const ListMenu = styled.ul`
    list-style-type: none;
    display: flex;
    gap: 2rem;
    color: white;

    @media (max-width: 768px) {
        flex-direction: column;
        background-color: var(--appColor);
        padding: 2rem;
    }
`;

const ListMenuItem = styled.li`
    cursor: pointer;

    &:hover {
        color: var(--orange);
    }
`;

const Header = () => {

    const mobile = window.innerWidth <= 768 ? true : false;
    const [menuOpened, setMenuOpened] = useState(false)

    return (
        <Container>
            <Image src={Logo} /> 
            {(menuOpened === false && mobile === true) ? (
                <div
                    style={{
                        backgroundColor: 'var(--appColor)',
                        padding: '0.5rem',
                        borderRadius: '5px',
                    }}
            
                    onClick={() => setMenuOpened(true)}
                >
                    <img
                        src={Bar}
                        alt=''
                        style={{ width: '1.5rem', height: '1.5rem' }}
                    />
                    </div>
            ) : (
                <ListMenu>
                    <ListMenuItem onClick={() => setMenuOpened(false)}>home</ListMenuItem>
                    <ListMenuItem onClick={() => setMenuOpened(false)}>programs</ListMenuItem>
                    <ListMenuItem onClick={() => setMenuOpened(false)}>why us</ListMenuItem>
                    <ListMenuItem onClick={() => setMenuOpened(false)}>plans</ListMenuItem>
                    <ListMenuItem onClick={() => setMenuOpened(false)}>testimonials</ListMenuItem>
                </ListMenu> 
            )}        
        </Container>
    );
}

export default Header