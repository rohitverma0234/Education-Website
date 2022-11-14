import React from 'react'
import styled from 'styled-components'
import Data from './CoursesData'
import CoursesSection from './CoursesSection'

const Courses = () => {
  return (
    <Wrapper>
      <div className='courses'>
        <h2 className='heading'>Our Courses</h2>
        <hr className='hr'></hr>
      </div>

<div className='section'>
      {Data.map((val,index,key)=>{
        return <CoursesSection name={val.name} subName={val.subName} price={val.price} duration={val.duration} para={val.para}/>
      })}
</div>



    </Wrapper>
  )
}
const Wrapper = styled.section`
    padding-top:50px;
    font-family: 'Montserrat', sans-serif;
    
    .heading{
        font-weight:800;
        font-size:40px;
        display: flex;
      align-items: center;
      justify-content: center;
    }

    .section{
      display:flex;
      justify-content:center;
      align-items:center;
      gap:2rem;
      padding-top:50px;
      padding-bottom:50px;
    }

    .hr{
      width: 130px;
      border-top-width: 4px;
      border-color: #125278;
      margin-top: -20px;
  }

  .hr{
    width: 130px;
    border-top-width: 4px;
    border-color: #125278;
    margin-top: -20px;
}

  @media only screen and (max-width:600px){
    .section{
      display:inline-block;
      justify-content:center;
      align-items:center;
    }

    .course-main-div{
      margin-bottom: 140px;
    }
  }

    `

export default Courses;