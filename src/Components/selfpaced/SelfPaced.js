import React from 'react'
import styled from 'styled-components'
import Data from './SelfpacedData'
import SelfpacedSection from './SelfpacedSection'

const SelfPaced = () => {
  return (
    <Wrapper>
      <div className='self-main'>
        {Data.map((val, index, key) => {
          return <SelfpacedSection img={val.img} head={val.head} para={val.para} />
        })}
      </div>

    </Wrapper>

  )
}


const Wrapper = styled.section`
    font-family: 'Montserrat', sans-serif;

    .self-main{
        display: flex;
        justify-content: center;
        gap: 3rem;
        padding-bottom: 100px;
        padding-top:100px;
    }
    
    
    @media only screen and (max-width:600px){
      .self-main{
        display: inline-block;
        justify-content: center;
        margin-left: 60px;
    }

      .selfpaced-div:hover {
        margin-bottom: 20px;
      }

    }
    
    
    `





export default SelfPaced