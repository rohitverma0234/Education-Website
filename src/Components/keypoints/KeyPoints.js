import React from 'react'
import styled from 'styled-components'
import Data from './keysData'
import KeySection from './KeySection'

const KeyPoints = () => {
    return (
        <Wrapper>
            <h2 className='heading'>Education shouldn't ever be a liability,<br></br> rather an asset.</h2>
            <hr className='hr'></hr>
            <p className='para'>Begin learning with our affordable courses.</p>

            <div className='main'>
                {Data.map((val, index, key) => {
                    return <KeySection image={val.image} head={val.head} para={val.para} />
                })}
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    padding-top:150px;
    font-family: 'Montserrat', sans-serif;
    padding-bottom:100px;

    .main{
        display: flex;
        justify-content: center;
        margin-top: -118px;
        gap: 5rem;
    }

    .heading{
        font-weight:800;
        font-size:40px;
        text-align:center;
    }

    .para{
        font-weight:500;
        font-size:16px;
        text-align:center;
        color: #747474;
    }

    .hr{
        width: 130px;
        border-top-width: 4px;
        border-color: #125278;
        margin-top: -20px;
    }


    @media only screen and (max-width:600px){
        .heading{
            margin-top:-90px;
        }

        .main{
            display:inline-block;
        }

        .key1{
            width: 419px;
    height: 140px;
    margin-left: 10px;
    margin-right: 10px;
        }


        .key1-head{
            line-height: 38px;
        }

        .key1-para{
            margin-top: -22px;
        }


        .key1-img{
            margin-top: 28px;
        }

    }


    `
export default KeyPoints;