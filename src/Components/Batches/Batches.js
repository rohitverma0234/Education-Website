import React from 'react'
import styled from 'styled-components'
import Data from './BatchesData'
import BatchesSection from './BatchesSection'

const Batches = () => {
  return (
    <Wrapper>
      <h2 className='head'>Upcoming Batches</h2>
      <hr className='hr'></hr>

      <div className='batches'>
        {Data.map((val, index, key)=>{
          return <BatchesSection img={val.img} head={val.head} date={val.date} btnLink={val.btnLink}/>
        })}
      </div>

    </Wrapper>
  )
}

const Wrapper = styled.section`
  font-family: 'Montserrat', sans-serif;
  margin-top:100px;

    .head{
      font-weight:800px;
      font-size:40px;
      text-align:center;
    }

    .batches{
      display: flex;
    justify-content: center;
    gap: 3rem;
    }

    .hr{
      width: 130px;
      border-top-width: 4px;
      border-color: #125278;
      margin-top: -20px;
      margin-bottom:50px;
      }

      @media only screen and (max-width:600px){
        .batches{
          display: inline-block;
        justify-content: center;
        gap: 3rem;
        }


        .batches-div {
          margin-left: 6px;
      }

      .btn {
        margin-top: -15px;
        margin-left: 8px;
        margin-bottom: 40px;
    }

      }


    `

export default Batches