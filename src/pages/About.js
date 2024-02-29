import './Mediaq.css';
import React from 'react';
import Resume from '../components/Resume';
import styled from 'styled-components';



function About() {

    const Style = {
        display: 'block',
        width: '100%',
        height: '2px',
        backgroundColor: 'var(--color-grey-light)',
    }

    const title = {
        fontFamily: "'Nanum Myeongjo', 'serif'",
        fontSize: '16px',
    }


    const Wrapper = styled.div`
        margin-top:311px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        gap:45px;

        .aboutTitle{
            display:flex;
            width:100%;
            padding-left:20px;
            padding-right:20px;
            align-items:center;
            gap:20px;
        }
        .aboutText{
            
            height:fit-content;

            .ofMe{
                text-align:center;
                font-family: 'Nanum Myeongjo',serif;
                font-size:16px;
                text-align:center;
            }
        }
    `

    return (
        <div>
            <Wrapper>
                <div className='aboutTitle'>
                    <div className='Left' style={Style}></div>
                    <span style={title}>About</span>
                    <div className='Right' style={Style}></div>
                </div>
                <div className='aboutText'>
                    <p className='ofMe'>Antoine Mahassadi, Ivorian based in Paris. self-taught, passionate about creative development. I am preparing a bahcelor<br /> designer and developer of digital solutions in 2nd year.</p>
                </div>
                <Resume />
            </Wrapper>
        </div>
    )
}

export default About