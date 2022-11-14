import React from 'react'
import styled from 'styled-components'


const CoursesSection = (props) => {
    return (
        <Wrapper>

            <div className='course-section'>
                <div className='course-main-div'>
                    <div>
                        <h2 className='course-heading'>{props.name}<br></br>Master's Program</h2>
                        <p className='course-para'>{props.subName}</p>
                        <p className='main-price-div'><img className='course-price-img' src='./rupee.png' alt='' /><span className='course-price'>{props.price}</span><sub>Per Month</sub></p>
                    </div>
            

                    <div className='course-img-section'>
                        <div className='course-img'>

                            <div className='banner'>
                                <h2 className='banner-head'>{props.name}<br>
                                </br><span className='banner-sub-head'>Masters Program</span></h2>
                                <p className='banner-duration'>{props.duration}</p>
                                <p className='banner-para'><span className='learn'>Learn </span>{props.para}</p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </Wrapper>
    )
}


const Wrapper = styled.section` 
    font-family: 'Montserrat', sans-serif;

.course-heading{
    font-size:32px;
    font-weight:800;
    text-align:center;
    margin-bottom:11px;
  }

  .course-main-div{
    background-color:#e7eef1;
    width:354px;
  height: 344px;
  padding:51px;

  }

  .course-para{
    font-weight:500px;
    font-size:16px;
    text-align:center;
    color:#125278;
    margin-bottom:12px;
  }


  .course-price-img{
    width:40px;
    height:40px;
  }

  .course-price{
    font-weight:800;
    font-size:50px;
    text-align:center;
  }

  .main-price-div{
    text-align:center;
  }

  .course-img{
    width: 500px;
  height: 200px;
  border-radius:20px;
  background-image:url("./course1.png");
  background-size: contain;
  background-repeat: no-repeat;
  }

  .course-img-section{
    margin-top: 40px;
    display: flex;
  justify-content: center;
  border-radius:20px;
  background-color: white;
  box-shadow: 2px 2px 2px 2px wheat;
  border: 2px solid wheat;
  padding: 20px;
    margin-left: -40px;
    width: 385px;
  }

  .course-section{
    display: flex;
  justify-content: center;
  align-items: center;
  }

  .banner-head{
    color:white;
    font-weight:800;
    font-size:32px;
  }

  .banner-sub-head{
    color:#8AC73D;
    font-size:24px;
    font-weight:700;
  }

  .banner-duration{
    font-size:16px;
    font-weight:500;
    color:white;
    margin-top: -20px;
  }

  .learn{
    font-weight:500;
    font-size:24px;
    color:white;
  }

  .banner-para{
    font-weight:700;
    font-size:24px;
    color:white;
    margin-top: -10px;
  }

  .banner{
    padding-left: 23px;
  padding-top: 12px;
  line-height: 26px;
  }
  `

export default CoursesSection