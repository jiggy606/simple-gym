import React from 'react'
import styled from 'styled-components';

import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import nb from '../assets/nb.png';
import adidas from '../assets/adidas.png';
import nike from '../assets/nike.png';
import tick from '../assets/tick.png'

const Container = styled.div`
    padding: 0 2rem;
    display: flex;
    gap: 2rem;
`

const Left = styled.div`
    flex: 1 1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    grid-auro-rows: 1fr;
`

const Image = styled.img``

const Right = styled.div`
    flex: 1 1;
    text-overflow: uppercase;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const RightSpan = styled.span`
    font-weight: bold;
    color: var(--orange);
`

const RightText = styled.div`
    color: #fff;
    font-size: 3rem;
    font-weight: bold;
`

const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const DetailsBody = styled.div`
    display: flex;
    font-size: 1rem;
    gap: 1rem;
`

const DetailsImage = styled.img`
    width: 2rem;
    height: 2rem;
`

const DetailsText = styled.span`
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
`

const PartnersText = styled.span`
    color: var(--lightgray);
    font-weight: normal;
`

const Partners = styled.div`
    display: flex;
    gap: 1rem;
`

const PartnersImage = styled.img`
    width: 2.5rem;
`

const Reasons = () => {
    return (
        <Container>
            <Left>
                <Image src={image1} className='img1' />
                <Image src={image2} className='img2' />
                <Image src={image3} className='img3' />
                <Image src={image4} className='img4' />
            </Left>

            <Right>
                <RightSpan>some reasons</RightSpan>

                <RightText>
                    <span className='stroke-text'>why? </span>
                    <span className=''>choose us</span>
                </RightText>

                <DetailsContainer>
                    <DetailsBody>
                        <DetailsImage src={tick} />
                        <DetailsText>over 140+ expert coaches</DetailsText>
                    </DetailsBody>
                    <DetailsBody>
                        <DetailsImage src={tick} />
                        <DetailsText>a free program for members</DetailsText>
                    </DetailsBody>
                    <DetailsBody>
                        <DetailsImage src={tick} />
                        <DetailsText>train faster and be better</DetailsText>
                    </DetailsBody>
                    <DetailsBody>
                        <DetailsImage src={tick} />
                        <DetailsText>reliable partners</DetailsText>
                    </DetailsBody>
                </DetailsContainer>

                <PartnersText> our partners </PartnersText>

                <Partners>
                    <PartnersImage src={nb} />
                    <PartnersImage src={nike} />
                    <PartnersImage src={adidas} />
                </Partners>
            </Right>
        </Container>
    );
}

export default Reasons