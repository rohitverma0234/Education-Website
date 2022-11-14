import React from 'react'
import styled from 'styled-components'

const KeySection = (props) => {
    return (
        <Wrapper>
            <div className='main-keys'>
                <div className='key1'>
                    <div>
                        <img className='key1-img' src={props.image} alt='' />
                    </div>

                    <div className='key-desc'>
                        <p className='key1-head'>{props.head}</p>
                        <p className='key1-para'>{props.para}</p>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    padding-top:150px;
    font-family: 'Montserrat', sans-serif;

    .key1-head{
        font-weight:800;
        font-size:32px;
    }

    .key1-para{
        font-weight:500;
        font-size:16px;
        color:#8AC73D;
    }

    .key1-img{
        width:72px;
        height:72px;
    }

    .key1{
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 5px;
        background-color:#ecf1f4;
        width:550px;
        height:180px;
        border-radius:20px;
        border-bottom: 10px solid #125278;
    }

        .key-desc{
            padding-left: 20px;
    }

        .main-keys{
            display: flex;
            justify-content: center;
            align-items: center;
    }

    
    `

export default KeySection