import React from 'react'
import styled from 'styled-components'

const HeroSection = () => {
    return (
        <Wrapper>
            <div className='hero-image'>
                <div>
                    <h1 className='heading'>Quality Education; a dream</h1>
                    <p className='para'>Let us take care of it.</p>
                    <div className='main-para2'>
                        <img className='clock' src="./clock.png" alt="" />
                        <p className='para2'>Quick, easy and hassle free.</p>
                    </div>
                </div>

                <div>
                    <img className='image-responsive' src="./hero2.png" alt=" " />
                </div>
            </div>

        </Wrapper>
    )
}

const Wrapper = styled.section`
    font-family: 'Montserrat', sans-serif;
  
    .hero-image{
        background-image:url("./hero.png");
        background-color: #125278;
        height: 550px;
        display:flex;
        align-items:center;
        padding-left:40px;
        justify-content: space-around; 
        gap: 12rem;
    }

    .heading{
        font-size:40px;
        color:white;
        font-weight:800;
       
    }

    .para{
        font-size:40px;
        font-weight:500;
        margin-top: -30px;
        color: white;    
    }

    .para2{
        font-weight:500;
        font-size:16px;
        color:#8AC73D;
        margin-top: -30px;
        margin-left: 45px;
    }

    .main-para2{
        margin-top: -30px;
    }

    @media only screen and (max-width:600px){
                .hero-image{
                    background-image:url("./hero.png");
                    background-color: #125278;
                    height: 744px;
                    display:inline-block;
                    align-items:center;
                    padding-left:10px;
                    padding-right:10px;
                    padding-top:40px;
                    padding-bottom:40px;
                    justify-content: space-around; 
                    gap: 12rem;
    }
}
    
    
    `


export default HeroSection