import React from 'react'
import styled from "styled-components"

function RequestTitle() {
    const Text1 = styled.p`
    font-size: 20px;
    color: #252525;
    font-weight: 500;
    margin: 0;
`; 

    const Text2 = styled.p`
     font-size: 12px;
     line-height: 15px;
     color: #252525;
     font-weight: 500;
     margin: 0;
`; 

    return (
        <div>
            <Text1>Cancel / recall payment, GBP 1,000.00</Text1>
            <Text2>1234567890123456 (GB), KUIML Business Company</Text2> 
        </div> 
    )
}

export default RequestTitle
