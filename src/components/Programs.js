import React from 'react'
import styled from 'styled-components';

import { programsData } from '../data/programsData';

import RightArrow from '../assets/rightArrow.png';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 0 2rem;
`

const ProgramsHeader = styled.div`
    display: flex;
    gap: 5rem;
    font-weight: bold;
    font-size: 3.5rem;
    justify-content: center;
    color: #fff;
    text-transform: uppercase;
    font-style: italic;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 1rem;
        font-size: x-large;
        align-items: center;
        justify-content: center;
        margin-top: 2rem;
    }
`

const ProgramsText = styled.span`
    cursor: pointer;

    &:hover {
        color: black;
    }
`

const ProgramCategories = styled.div`
    display: flex;
    gap: 1rem;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const ProgramCategory = styled.div`
    display: flex;
    flex-direction: column;
    background-color: gray;
    padding: 2rem;
    gap: 1rem;
    color: #fff;
    justify-content: space-between;

    &:hover {
        background: var(--planCard);
        cursor: pointer;
    }

    svg {
        width: 2rem;
        height: 2rem;
        fill: #fff;
    }
`

const ProgramHeading = styled.span`
    font-weight: bold;
    font-size: 1rem;
`

const ProgramDetails = styled.span`
    line-height: 20px;
    font-size: 0.9rem;
`

const JoinNow = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
`

const JoinNowText = styled.span``

const JoinNowImage = styled.img`
    width: 1rem;
`


const Programs = () => {
    return (
        <Container>
            <ProgramsHeader>
                <ProgramsText className='stroke-text'>explore our</ProgramsText>
                <ProgramsText>programs</ProgramsText>
                <ProgramsText className='stroke-text'>to shape you</ProgramsText>
            </ProgramsHeader>

            <ProgramCategories>
                {programsData.map((program) => (
                    <ProgramCategory>
                            {program.image}
                        <ProgramHeading>
                            {program.heading}
                        </ProgramHeading>
                        <ProgramDetails>
                            {program.details}
                        </ProgramDetails>

                        <JoinNow>
                            <JoinNowText>join now</JoinNowText>
                            <JoinNowImage src={RightArrow}></JoinNowImage>
                        </JoinNow>
                    </ProgramCategory>
                ))}
            </ProgramCategories>
        </Container>
    );
}

export default Programs