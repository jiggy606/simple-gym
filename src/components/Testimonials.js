import React, { useState } from 'react'
import styled from 'styled-components';

import leftArrow from '../assets/leftArrow.png'
import rightArrow from '../assets/rightArrow.png'

import { testimonialsData } from '../data/testimonialsData';

const Container = styled.div`
    display: flex;
    gap: 1rem;
    padding: 0 2rem;
`

const Left = styled.div`
    display: flex;
    flex: 1 1;
    gap: 2rem;
    flex-direction: column;
    text-transform: uppercase;
    color: white;
`

const LeftText = styled.span`
    &:nth-child(1) {
        color: var(--orange);
        font-weight: bold;
    }

    &:nth-child(2), &:nth-child(3) {
        font-weight: bold;
        font-size: 3rem;
    }
`

const TestimonialsDataReview = styled.span`
    text-transform: none;
    text-align: justify;
    letter-spacing: 1.5px;
    line-height: 40px;
`

const TestimonialsData = styled.span``

const TestimonialsDataName = styled.span`
    color: var(--orange);
`

const Right = styled.div`
    flex: 1;
    position: relative;
`
const Fill = styled.div`
    position: absolute;
    width: 17rem;
    height: 20rem;
    border: 2px solid var(--orange);
    top: 0.9rem;
    right: 9rem;
    background-color: transparent;
`

const Full = styled.div`
    position: absolute;
    width: 17rem;
    height: 19rem;
    right: 7rem;
    top: 4rem;
    background: var(--planCard);
`

const RightImage = styled.img`
    position: absolute;
    width: 17rem;
    height: 20rem;
    object-fit: cover;
    right: 8rem;
    top: 2rem;
`

const Arrows = styled.div`
    display: flex;
    position: absolute;
    bottom: 1rem;
    left: 3rem;
    gap: 1rem;
`

const ArrowsRight = styled.img`
    width: 1.5rem;
    cursor: pointer;
`

const ArrowsLeft = styled.img`
    width: 1.5rem;
    cursor: pointer;
`

const Testimonials = () => {

    const [selected, setSelected] = useState(0);
    const testimonialLenght = testimonialsData.length;

    return (
        <Container>
            <Left>
                <LeftText>testimonials</LeftText>
                <LeftText className='stroke-text'>what they</LeftText>
                <LeftText>say about us</LeftText>

                <TestimonialsDataReview>
                    {testimonialsData[selected].review}
                </TestimonialsDataReview>
                <TestimonialsData>
                    <TestimonialsDataName>
                        {testimonialsData[selected].name}
                    </TestimonialsDataName>{" "}
                    - {testimonialsData[selected].status}
                </TestimonialsData>
            </Left>
            <Right>
                <Fill></Fill>
                <Full></Full>
                <RightImage src={testimonialsData[selected].image} />

                <Arrows>
                    <ArrowsLeft src={leftArrow} onClick={() => {
                        selected === 0?setSelected(testimonialLenght - 1) : setSelected((prev) => prev - 1)
                    }} />
                    <ArrowsRight src={rightArrow} onClick={() => {
                        selected === testimonialLenght - 1 ? setSelected(0) : setSelected((prev) => prev + 1)
                    }} />
                </Arrows>
            </Right>
        </Container>
    );
}

export default Testimonials