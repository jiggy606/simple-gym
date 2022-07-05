import React from 'react'
import Logo from '../assets/logo.png'

import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
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
`;

const ListMenuItem = styled.li`
    cursor: pointer;

    &:hover {
        color: var(--orange);
    }
`;

const Header = () => {
    return (
        <Container>
            <Image src={Logo} />
            <ListMenu>
                <ListMenuItem>home</ListMenuItem>
                <ListMenuItem>programs</ListMenuItem>
                <ListMenuItem>why us</ListMenuItem>
                <ListMenuItem>plans</ListMenuItem>
                <ListMenuItem>testimonials</ListMenuItem>
            </ListMenu>
        </Container>
    );
}

export default Header