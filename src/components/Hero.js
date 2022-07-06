import React from 'react'
import styled from 'styled-components';

// import { motion } from 'framer-motion';

import Header from './Header';

import hero_image from '../assets/hero_image.png';
import hero_image_back from '../assets/hero_image_back.png';
import heart from '../assets/heart.png';
import calories_img from '../assets/calories.png';

const Container = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const Blur = styled.div`
    width: 22rem;
    height: 30rem;
    left: 0;

    @media (max-width: 768px) {
        width: 14rem;
    }
`

const Left = styled.div`
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
    padding: 2rem;
    padding-top: 1.5rem;
    flex: 3;
`;

const Advert = styled.div`
    margin-top: 4rem;
    background-color: #363d42;
    border-radius: 4rem;
    width: fit-content;
    padding: 20px 12px;
    text-transform: uppercase;
    color: white;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    @media (max-width: 768px) {
        margin-top: 0;
        font-size: small;
        align-self: center;
        transform: scale(0.8);
    }
`;

const DivAnimate = styled.div`
    position: absolute;
    background-color: var(--orange);
    width: 4.5rem;
    height: 80%;
    left: 8px;
    border-radius: 3rem;
    z-index: 1;
`;

const DivAnimateText = styled.span`
    z-index: 2;
`;

const HeroText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    text-transform: uppercase;
    font-size: 4.5rem;
    font-weight: bold;
    color: white;
    text-overflow: inherit;

    @media (max-width: 768px) {
        font-size: xx-large;
        align-items: center;
        justify-content: center;
    }
`

const HeroTextFirst = styled.div``
const HeroTextSecond = styled.div``

const HeroTextSpan = styled.span`
    font-weight: 200;
    font-size: 1rem;
    text-transform: none;
    letter-spacing: 1px;
    width: 80%;

    @media (max-width: 768px) {
        font-size: small;
        font-weight: 200;
        letter-spacing: 1px;
        text-align: center;
    }
`
const Figures = styled.div`
    display: flex;
    gap: 2rem;
`

const FiguresBox = styled.div`
    display: flex;
    flex-direction: column;
`

const FiguresNumbers = styled.span`
    color: white;
    font-size: 2rem;

    @media (max-width: 768px) {
        font-size: large;
    }
`

const FiguresDetails = styled.span`
    color: var(--gray);
    text-transform: uppercase;

    @media (max-width: 768px) {
        font-size: small;
    }
`

const ButtonParent = styled.div`
    display: flex;
    gap: 1rem;
    font-weight: normal;

    @media (max-width: 768px) {
        justify-content: center;
    }
`

const ButtonA = styled.button`
    color: #fff;
    background-color: var(--orange);
    width: 8rem;
    padding: 0.5rem;
`

const ButtonB = styled.button`
    color: #fff;
    background-color: transparent;
    width: 8rem;
    border: 2px solid var(--orange);
`

const Right = styled.div`
    flex: 1;
    position: relative;
    background-color: var(--orange);

    @media (max-width: 768px) {
        position: relative;
        background: none;
    }
`;

const ButtonRight = styled.button`
    position: absolute;
    right: 3rem;
    top: 2rem;
    color: black;
    padding: 0.5rem;
    font-weight: bold;
    border: 4px solid transparent;

    &:hover {
        background-color: var(--darkGrey);
        color: #fff;
    }
`

const HeartRate = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: var(--darkGrey);
    width: fit-content;
    padding: 1rem;
    align-items: start;
    border-radius: 5px;
    position: absolute;
    right: 4rem;
    top: 7rem;

    @media (max-width: 768px) {
        top: 2rem;
        left: 1rem;
    }
`

const Image = styled.img`
    width: 2rem;
`

const HeartRateDetail = styled.span`
    color: var(--gray);
`

const HeartRateNumber = styled.span`
    color: #fff;
    font-size: 1.5rem;
`

const HeroImage = styled.img`
    position: absolute;
    top: 10rem;
    right: 8rem;
    width: 21.5rem;

    @media (max-width: 768px) {
        position: relative;
        width: 15rem;
        left: 7rem;
        top: 4rem;
        align-self: center;
    }
`

const HeroImageBack = styled.img`
    position: absolute;
    top: 4rem;
    right: 20rem;
    z-index: -1;
    width: 15rem;

    @media (max-width: 768px) {
        width: 15rem;
        left: 2rem;
        top: 0rem;
    }
`

const Calories = styled.div`
    display: flex;
    gap: 2rem;
    background-color: var(--caloryCard);
    border-radius: 5px;
    padding: 1rem;
    width: fit-content;
    position: absolute;
    top: 32rem;
    right: 28rem;

    @media (max-width: 768px) {
        position: relative;
        top: 5rem;
        left: 2rem;
    }
`

const CaloriesImg = styled.img`
    width: 3rem;

    @media (max-width: 768px) {
        width: 2rem;
    }
`

const CaloriesDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const CaloriesText = styled.span`
    color: var(--gray);
`

const CaloriesNumber = styled.span`
    color: #fff;
    font-size: 1.5rem;

    @media (max-width: 768px) {
        font-size: 1rem;
        color: #fff;
    }
`

const Hero = () => {

    // const transition = { type: 'spring', duration: 3 };
    // const mobile = window.innerWidth<=768 ? true : false;

    return (
        <Container>
            
            <Blur className='blur'/>

            <Left>
                <Header />
                <Advert>
                    {/* <DivAnimate initial={{left: '238px'}} whileInView={{left: '8px'}} transition={{transition}}></DivAnimate> */}
                    <DivAnimateText>talk of the town. come and find out!</DivAnimateText>
                </Advert>

                <HeroText>
                    <HeroTextFirst>
                        <span className='stroke-text'>shape</span>
                        <span> your</span>               
                    </HeroTextFirst>
                    <HeroTextSecond>
                        <span>ideal body</span>
                    </HeroTextSecond>
                    <HeroTextSpan>
                        here, we'll work with you to get the physique of your dreams and
                        enjoy life to the fullest.
                    </HeroTextSpan>
                </HeroText>

                <Figures>
                    <FiguresBox>
                        <FiguresNumbers>+150</FiguresNumbers>
                        <FiguresDetails>expert coaches</FiguresDetails>
                    </FiguresBox>
                    <FiguresBox>
                        <FiguresNumbers>+1000</FiguresNumbers>
                        <FiguresDetails>members joined</FiguresDetails>
                    </FiguresBox>
                    <FiguresBox>
                        <FiguresNumbers>+50</FiguresNumbers>
                        <FiguresDetails>fitness programs</FiguresDetails>
                    </FiguresBox>
                </Figures>

                <ButtonParent>
                    <ButtonA>get started</ButtonA>
                    <ButtonB>learn more</ButtonB>
                </ButtonParent>
                
            </Left>

        
            <Right>
                <ButtonRight>join today</ButtonRight>

                <HeartRate>
                    <Image src={heart} />
                    <HeartRateDetail>heart rate</HeartRateDetail>
                    <HeartRateNumber>110 bpm</HeartRateNumber>
                </HeartRate>

                <HeroImage src={hero_image} />
                <HeroImageBack src={hero_image_back} />

                <Calories>
                    <CaloriesImg src={calories_img} />
                    <CaloriesDetails>
                        <CaloriesText>calories burned</CaloriesText>
                        <CaloriesNumber>300 kcal</CaloriesNumber>
                    </CaloriesDetails>
                </Calories>

            </Right>
        </Container>
    );
}

export default Hero