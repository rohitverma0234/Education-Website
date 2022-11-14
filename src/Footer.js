import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper>
        <div className='footer'>
            {/* <img src="./logo.png" alt=''/> */}
            <h2 className='logo'>EDUCATION</h2>
            <p>Disclaimer-  @2011-2022-Network Kings. All Rights Reserved.<br></br>
We do not claim the ownership of the logos used above. They only belong to their respective organizations.</p>
        </div>

    </Wrapper>
  )
}

const Wrapper = styled.section`
    font-family: 'Montserrat', sans-serif;
    background-color:black;
    padding:50px;

    .footer{
        text-align:center;
        color:white;
    }
    
    .logo{
        color:#125278;
        font-weight:800;
        font-size: 37px;
    }`

export default Footer