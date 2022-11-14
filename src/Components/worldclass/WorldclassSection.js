import React from 'react'
import styled from 'styled-components'

const WorldclassSection = (props) => {
    return (
        <Wrapper>
            <div>
                <div className='worldclass-img-div'>
                    <div className='worldclass-img-circle'>
                        <img className='worldclass-img' src={props.img} alt='' />
                    </div>
                </div>

                <div className='worldclass-main'>
                    <div className='worldclass'>

                        <p className='icon-head'>{props.head}</p>
                        <p className='para'>{props.para}</p>
                    </div>
                </div>
            </div>

        </Wrapper>

    )
}

const Wrapper = styled.section`
    font-family: 'Montserrat', sans-serif;
    padding-bottom: 40px;
    padding-top: 40px;
    background-color:#e7eef1;

    .icon-head{
        font-weight:800;
        font-size:32px;
        text-align:center;
    }

    .worldclass{
        width:428px;
        height:162px;
        border-radius: 20px;
        padding-top: 30px;
    }

    .worldclass:hover{
        background-color:white;
        padding-top: 30px;
        box-shadow: 2px 2px 2px 2px #dee4e7;
    }


    .worldclass-img{
        width:64px;
        height:64px;
        background-color:white;
        border-radius: 47px;
        padding: 7px;
        border: 10px solid #e7eef1;
    }

    .worldclass-img-circle{
        position: absolute;
        margin-left: 165px;
        margin-top: -48px;
    }

    .worldclass-main{
        display: flex;
        justify-content: left;
        align-items: center;
        z-index: 50;
    }

    .worldclass-img-div{
        width: 428px;
        text-align: center;
    }


    .para{
        font-weight:500;
        font-size:16px;
        text-align:center;
        color:#747474;
        margin-top: -20px;
        padding-left:10px;
        padding-right:10px;
        
    }`

export default WorldclassSection;