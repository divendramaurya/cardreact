import React from 'react'
import styled from "styled-components"

function FullDetails() {

    const FullDetails = styled.p`
    color: #252525; 
    margin: 0; 
    padding-right: 6px;
    cursor: pointer;
    .fa-angle-down{
        padding-left: 10px; 
      }
`; 

  return <FullDetails><a>Full Details<span><i class="fa fa-angle-down"></i></span></a></FullDetails>   
}

export default FullDetails
