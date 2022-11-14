import React from 'react'
import styled from 'styled-components'
import Data from './WorldclassData'
import Data2 from './worldclassData2'
import WorldclassSection from './WorldclassSection'

const WorldClass = () => {
    return (
        <Wrapper>
            <h2 className='head'>What sets us apart?</h2>
            <hr className='hr'></hr>

            <div className='worldclass-maindiv'>
                {Data.map((val, index, key) => {
                    return <WorldclassSection img={val.img} head={val.head} para={val.para} />
                })}
            </div>

            <div className='worldclass-maindiv2'>
                {Data2.map((val, index, key) => {
                    return <WorldclassSection img={val.img} head={val.head} para={val.para} />
                })}

            </div>


        </Wrapper>
    )
}

const Wrapper = styled.section`
    font-family: 'Montserrat', sans-serif;
    background-color:#e7eef1;

    .head{
        font-weight:800;
        font-size:40px;
        text-align:center;
        padding-top: 70px;
        text-align:center;
    }

    .hr{
        width: 130px;
        border-top-width: 4px;
        border-color: #125278;
        margin-top: -20px;
    }

    .worldclass-maindiv{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5rem;
        padding-top: 50px;
    }

    .worldclass-maindiv2{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5rem;
        padding-top: 30px;
    }

    @media only screen and (max-width:600px){
        .worldclass-maindiv{
            display:inline-block;
        }

        .worldclass:hover {
            margin-left: 7px;
        }

        .worldclass{
            margin-left: 7px;
        }


        .worldclass-maindiv2{
            display:inline-block;
        }
    }

    `

export default WorldClass;