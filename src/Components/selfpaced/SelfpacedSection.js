import React from 'react'
import styled from 'styled-components'

const SelfpacedSection = (props) => {
  return (
    <Wrapper>
        <div className='selfpaced-div'>
            <img src={props.img} alt='' />
            <h2 className='head'>{props.head}</h2>
            <p className='para'>{props.para}</p>
        </div>

    </Wrapper>
  )
}

const Wrapper = styled.section`
    .selfpaced-div{
        background-color:white;
        width:311px;
        height:200px;
        text-align:center;
        padding: 5px;
        padding-top: 34px;
    }

    .selfpaced-div:hover{
        background-color: white;
        box-shadow: 2px 2px 2px 2px #bfbfbf;
        border-radius: 20px;
        padding: 5px;
        padding-top: 34px;
    }
    
    .head{
        font-weight:700;
        font-size:24px;
    }
    
    .para{
        font-weight:500;
        font-size:16px;
        color:#747474;
        margin-top: -14px;
    }
    
        `

export default SelfpacedSection