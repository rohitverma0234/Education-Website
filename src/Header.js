import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { CiUser } from "react-icons/ci";
import Button from './Components/Button';

const Header = () => {
  return (
    <Wrapper>
        <div className='main-header'>


        <div className='logo-div'>
            <NavLink to="/">
                {/* <img src="./logo.png" alt='' /> */}
                <h2 className='logo'>EDUCATION</h2>
                
                </NavLink>
        </div>

        <div className='main-menu'>
            <ul>
                <li><NavLink to="/courses">Courses</NavLink></li>
                <li><NavLink to="/about">About Us</NavLink></li>
                <li><NavLink to="/contact">Contact Us</NavLink></li>
            </ul>

            <div>
                
                <Button><CiUser className='icon' />Login</Button>
            </div>
        </div>

        </div>

        

    </Wrapper>
  )
}

const Wrapper = styled.header`
    font-family: 'Montserrat', sans-serif;

    .main-header{
        display: flex;
        justify-content: space-around;
        align-items:center;
        gap:28rem;
    }

    ul{
        display: flex;
        list-style: none;
        align-items:center;
        gap: 3.8rem;
    }

    ul li a{
        text-decoration:none;
    }

    .main-menu{
        display: flex;
        align-items:center;
        gap: 3rem;
    }

    .icon{
        padding-right: 10px;
    }

    .logo{
        color:#125278;
        font-weight:800;
        font-size: 24px;
    }

    .logo-div a{
        text-decoration:none;
    }

    `

export default Header;