import React from 'react'
import styled from 'styled-components'

const SmartStop = () => {
  return (
    <Wrapper className='section'>
        <h2 className='head'>Why Education EMI Is Your Smartstop?</h2>
        <p className='para'>We provide 100% access to quality education, without burning a whole in your pockets.</p>
        <hr className='hr'></hr>

        <div className='image-div'>
            <div className='image'>
            <img className="img-width" src="./smartstop.png" alt="" />
            </div>

            <div className="image2 bg-img">
                <div className='bg-img2'>
                <p className='bg-para'>Cisco Certified<br></br> Network Associate<br></br>Course (CCNA)</p>
                </div>
            </div>


            <div className="image">
            <img className="img-width" src="./smartstop.png" alt="" />
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    font-family: 'Montserrat', sans-serif;
    padding-top:50px;
    background-color:#e7eef1;
    margin-top:100px;

    .head{
        font-weight:800;
        font-size:40px;
        text-align:center;
    }
    
    .para{
        font-weight:500;
        font-size:16px;
        color:#747474;
        text-align:center;
    }
    
    .img-width{
        width:220px;
        height:220px;
    }
    
    .image{
        border: 8px solid #125278;
    width: 220px;
    height: 220px;
    border-radius: 32px;
    margin-bottom:200px;
    }
    
    
    .image-div{
        display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    }
    
    .image2{
        margin-top: 86px;
    }
    
    
    .bg-img{
        background-image:url("./smartstop.png");
        border: 8px solid #8AC73D;
    width: 220px;
    height: 220px;
    border-radius: 32px;
    background-size:cover;
    background-repeat:no-repeat;
    }
    
    .bg-para{
        color: white;
    font-weight: 700;
    font-size: 18px;
    padding-top: 80px;
    text-align: center;
    }

    .bg-img2{
        background-image:url("./Rectangle 26.png");
        width: 220px;
    height: 220px;
    margin-top: -18px;
    background-size:cover;
    background-repeat:no-repeat;
    }

    .hr{
        width: 130px;
        border-top-width: 4px;
        border-color: #125278;
    }


    @media only screen and (max-width:600px){
        .image-div{
            display: inline-block;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        margin-left: 22%;
    margin-top: 40px;
        }

        .image2{
            margin-top: -120px;
    margin-bottom: 100px;
        }
        
    }
    
    `

export default SmartStop