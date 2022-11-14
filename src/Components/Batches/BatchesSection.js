import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const BatchesSection = (props) => {
  return (

    <Wrapper>
    <div className='batches-div'>
        <div className=''>
          <img src={props.img} alt='' />
          <h2 className='batch-head'>{props.head}<br></br><span className='batch-subhead'>Master Program</span></h2>

          <div className='date-div'>
            <img className='calender-img' src='./calender.png' alt='' />
            <p className='date'>{props.date}</p>
          </div>
        </div>

      
      </div>

      <NavLink to={props.btnLink}><button className='btn'>Book A Session Now!</button></NavLink>

      </Wrapper>
  )
}


const Wrapper = styled.section`
  font-family: 'Montserrat', sans-serif;

    .head{
      font-weight:800px;
      font-size:40px;
      text-align:center;
    }

    .batch-head{
      font-weight:800;
      font-size:32px;
      padding-left: 20px;
    }

    .batch-subhead{
      font-weight:700;
      font-size:24px;
      color:#8AC73D;
    }

    .date-div{
      display: flex;
      margin-top: -14px;
      padding-bottom: 25px;
      padding-left: 20px;
    }

    .calender-img{
      width:24px;
      height:24px;
    }


    .date{
      margin-top: 2px;
      padding-left: 15px;
      font-weight:700;
      font-size:16px;
    }


    .batches-div{
      width: 428px;
    background-color: white;
    box-shadow: 4px 4px 4px 4px #f2f2f8;
    border-radius: 20px;
    }

    .btn{
      background-color: #125278;
    color: white;
    width: 428px;
    height:60px;
    text-align: start;
    border: 2px solid #125278;
    margin-top: -10px;
    padding-left: 20px;
    border-radius:0px 0px 10px 10px;
    cursor:pointer;
    }
    
    `

export default BatchesSection