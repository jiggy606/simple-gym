import React from 'react'
import styled from 'styled-components';

import { plansData } from '../data/plansData';

import whiteTick from '../assets/whiteTick.png'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    padding: 0 2rem;
    margin-top: -4rem;
    position: relative;
`

const Blur1 = styled.div`
    width: 32rem;
    height: 23rem;
    left: 0rem;
    top: 6rem;
`
const Blur2 = styled.div`
    width: 32rem;
    height: 23rem;
    top: 10rem;
    right: 0rem;
`

const SubscriptionHeader = styled.div`
    display: flex;
    gap: 5rem;
    font-weight: bold;
    font-size: 3.5rem;
    justify-content: center;
    color: #fff;
    text-transform: uppercase;
    font-style: italic;
`
const SubscriptionText = styled.span`
    cursor: pointer;
    

    &:hover {
        color: black;
    }
`

const SubscriptionPlans = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const SubscriptionPlan = styled.div`
    display: flex;
    flex-direction: column;
    background: var(--caloryCard);
    color: #fff;
    gap: 2rem;
    padding: 1.5rem;
    width: 15rem;

    &:nth-child(2) {
        background: var(--planCard);
        transform: scale(1.1);

        svg {
            fill: #fff;
        }

        @media (max-width: 768px) {
            transform: none;
        }

        button {
            color: orange;
        }

        &:hover {
            transform: scale(1.15);
        }
    }

    svg {
        fill: var(--orange);
        width: 2rem;
        height: 2rem;
    }
`

const SubscriptionPlanName = styled.span`
    font-weight: bold;
    font-size: 1rem;
`

const SubscriptionPlanPrice = styled.span`
    font-weight: bold;
    font-size: 3rem;
`

const SubscriptionPlanFeatures = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const SubscriptionPlanFeature = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center; 
`

const SubscriptionPlanImage = styled.img`
    width: 1rem;
`

const SubscriptionPlanFeatureText = styled.span``

const Benefits = styled.div``

const BenefitsText = styled.span`
    font-size: 0.8rem;
`

const BenefitsButton = styled.button``



const Subscriptions = () => {
    return (
        <Container>
            
            <Blur1 className='blur' />
            <Blur2 className='blur' />

            <SubscriptionHeader>
                <SubscriptionText className='stroke-text'>ready to start</SubscriptionText>
                <SubscriptionText>your journey</SubscriptionText>
                <SubscriptionText className='stroke-text'>with us today </SubscriptionText>
            </SubscriptionHeader>

            <SubscriptionPlans>
                {plansData.map((plan, i) => (
                    <SubscriptionPlan key={i}>
                        {plan.icon}
                        <SubscriptionPlanName>{plan.name}</SubscriptionPlanName>
                        <SubscriptionPlanPrice>$ {plan.price}</SubscriptionPlanPrice>

                        <SubscriptionPlanFeatures>
                            {plan.features.map((feature, i) => (
                                <SubscriptionPlanFeature>
                                    <SubscriptionPlanImage src={whiteTick} />
                                    <SubscriptionPlanFeatureText key={i}>{feature}</SubscriptionPlanFeatureText>
                                </SubscriptionPlanFeature>
                            ))}
                        </SubscriptionPlanFeatures>

                        <Benefits>
                            <BenefitsText>see more benefits -></BenefitsText>
                        </Benefits>
                        <BenefitsButton className='btn'>join now</BenefitsButton>
                    </SubscriptionPlan>
                ))}
            </SubscriptionPlans>
        </Container>
    );
}

export default Subscriptions