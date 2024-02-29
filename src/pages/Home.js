import './Mediaq.css';
import React from 'react'
import styled from 'styled-components'
import App from '../App.css';



function Home() {


    const Home = styled.div`
        
    `
    const Wrapper = styled.div`
        margin:100px;
        margin-top:150px;
        height:auto;
        
    `

    const Title = styled.div`
        font-family: 'Cinzel', serif;
        font-size:70px;
        color:var(--text-color-dark);
    `

    const TitleContent = styled.div`
        padding-top:86px;
        padding-bottom:86px;
        display:flex;
        flex-direction:column;
        gap:74px;
        text-align:center;

        a{
            color:var(--text-color-dark);
        }
    `

    const Job = styled.div`
        text-align:center;
    `
    const Contact = styled.div`
        padding:5px 5px 5px 5px;
        a{
            font-family: 'Nanum Myeongjo',serif;
            font-size:16px;
        }
    `
    const Line = styled.div`
        width:100%;
        height:2px;
        background-color:var(--background-color-dark);
    `
    return (
        <Home>
            <Wrapper>
                <Line className='line'></Line>
                <TitleContent>

                    <Job>
                        <Title className='title'>Front-end developer</Title>
                        <Title className='title'>&</Title>
                        <Title className='title'>designer UI</Title>
                    </Job>

                    <Contact>
                        <a className='Dm' href="#">Contact me</a>
                    </Contact>

                </TitleContent>
                <Line className='line'></Line>
            </Wrapper>
        </Home>
    )
}

export default Home