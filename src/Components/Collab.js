import React from 'react'
import styled from 'styled-components'

const Collab = () => {
  return (
    <Wrapper>
    <div className='hero-image'>
        <div>
            <h1 className='heading'>In Collaboration</h1>
            <p className='para'>This platform is dedicated to bring, you the obsolete quality learning experience. For the same,<br></br> we have collaborated with the big names, in the business.</p>
            <hr className='hr'></hr>


            <div className='main-para2'>
                <div className='para2-img'>
                    <img src='./brands-1 1.png' alt='' />
                    <img src='./brands-2 1.png' alt='' />
                    <img src='/brands-3 1.png' alt='' />
                    <img src='./brands-4 1.png' alt='' />
                    <img src='./brands-5 1.png' alt='' />
                    <img src='./brands-6 1.png' alt='' />
                </div>
                
            </div>
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
    height: 417px;
    display:flex;
    align-items:center;
 
    justify-content: space-around; 
    gap: 12rem;
}

    .heading{
        font-weight:800;
        font-size:40px;
        color:white;
        text-align: center;
    }

    .para{
        font-weight:500;
        font-size:16px;
        color:white;
        text-align: center;
    }

    .main-para2{
        background-color:#00385A;
        padding:30px;
        margin-top:80px;
    }

    .para2-img{
        display: flex;
    gap: 5rem;
    }


    .hr{
        width: 130px;
        border-top-width: 4px;
        border-color: #8AC73D;
    }


    @media only screen and (max-width:600px){
        .para2-img{
            display:inline-block;
            padding-right: 40px;
        }

        .para2-img img{
            padding-right: 10px;
            padding-left:10px
        }

        .hero-image {
            height: 700px;
        }
    }

    
`

export default Collab