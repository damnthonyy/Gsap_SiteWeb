import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Half2Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import { useTheme } from '../ThemeProvider';
import App from '../App.css';






function NavBar() {
    const Sun = '/sun.svg';
    const Vector = '/Vector.svg';

    const NavBar = styled.div`
        display:flex;
        margin: 40px 80px;
        justify-content:space-between;
        align-items:center;
        position:fixed;
        top:0;
        left:0;
        right:0;

        .IconTheme{
            cursor:pointer;
        }
    `
    const WrapperLogo = styled.div`
        display:flex;
        align-items:center;
        gap:20px;

        .LineLogo{
            color:var(--text-color-dark);
        }
        .LogoContent{
            color:var(--text-color-dark);
        }
    `
    const Logo = styled.h6`
        font-family: 'Cinzel', serif;
        font-size:16px;
        color:var(--text-color-dark);
    `
    const OpenMenu = styled.div`
        position:absolute;
        top:80px;
        left:80px;
        right:80px;
        display:flex;
        flex-direction:column;
        gap:22px;
        transform: translateX(${props => props.isOpen ? '0' : '-1%'});
        transition: transform 2s ease-in-out;
        

        .NavLink {
            
            width:100%;
            height:57vh;
            background-color:var(--background-color-navlink-ligth);
            border-radius:20px;

            ul{
                display:flex;
                flex-direction:column;
                height:100%;
                justify-content:space-around;
                padding-left:100px;

                
            }
            li{
                display:flex;
                align-items:center;
                gap:56px;
            }

            a{
                font-family: 'Cinzel', serif;
                font-size:44px;
                color:var(--text-color-dark);
            }
        }

    `
    const Legal = styled.h4`
        font-family: 'Nanum Myeongjo', serif;
        font-size:9px;
        color:var(--text-color-dark);
    `
    const Name = styled.span`
        font-family: 'Cinzel', serif;
        font-size:14px;
        color:var(--text-color-dark)
    `
    const Job = styled.span`
        font-family: 'Nanum Myeongjo', serif;
        font-size:12px;
        color:var(--text-color-dark)
    `
    const More = styled.div`
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding-left:40px;
        padding-right:40px;
        width:100%;
        height:29vh;
        background-color:var(--background-color-navlink-light);
        border-radius:20px;

        
        ul{
            display:flex;
            gap:40px;
        }
        li{
            display:flex;
            align-items:center;
            justify-content:flex-end;

            img{
                color:var(--text-color-dark)
            }
        }

        a{
            font-family: 'Cinzel', serif;
            color:var(--text-color-dark);
            font-size:12px;
        }

        .signed{
            display:flex;
            flex-direction:column;
            gap:2px;
        }


    `
    const MenuIcon = styled.div`
        padding: 10px 10px 10px 10px;
        cursor: pointer;
    `
    const { theme, toggleTheme } = useTheme();
    const [toggle, setToggle] = useState(false);

    const HandleToggle = () => {
        setToggle(!toggle);
    }

    return (

        <NavBar>
            <div className='IconTheme' >
                <Half2Icon onClick={toggleTheme} />
            </div>

            <WrapperLogo className='WrapperLogo'>
                <a className='LogoContent' href='/'> ANTOINE MAHASSADI </a>
            </WrapperLogo>

            {toggle && (
                <OpenMenu isOpen={toggle}>
                    <div className='NavLink'>
                        <ul>
                            <li> <img src={Vector} alt='#' /> <a href='/'> Home </a> </li>
                            <li> <img src={Vector} alt='#' /> <a href='/About' > About </a> </li>
                            <li> <img src={Vector} alt='#' /> <a href='/Work'> Work </a> </li>
                            <li> <img src={Vector} alt='#' /> <a href='/Contacts'> Contacts </a> </li>
                        </ul>
                    </div>

                    <More>

                        <div className='Reseau'>
                            <ul>
                                <li><a href='#'>linkedin </a> </li>
                                <li><a href='#'>instagram </a></li>
                                <li><a href='#'>github </a></li>
                                <li><a href='#'>dmantoinepro@gmail.com </a></li>
                            </ul>
                        </div>

                        <Legal>
                            copyright Antoine 2024.
                        </Legal>

                        <div className='signed'>
                            <Name>Antoine MAHASSADI</Name>
                            <Job>Front end developer & designer Ui</Job>
                        </div>

                    </More>

                </OpenMenu>
            )}

            <MenuIcon className='Menu'>
                <HamburgerMenuIcon className='MenuIcon' alt='Menu Icon' onClick={HandleToggle} />
            </MenuIcon>

        </NavBar>
    )
}



export default NavBar