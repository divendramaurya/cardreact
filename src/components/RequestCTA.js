import React from 'react'
import styled from "styled-components"

function RequestCTA() {


  const StyledButton1 = styled.button`
    padding: 10px 10px;
    cursor: pointer;
    border: ${props => props.type === "reject" ? "1px solid #000" : ""};
    margin-right: ${props => props.type === "reject" ? "10px" : ""};
    background-color: ${props => props.type === "auth" ? "#4d6474" : ""};
    color: ${props => props.type === "auth" ? "#fff" : ""};

    &:hover {
        background-color: ${props => props.type === "auth" ? "#fff" : "grey"};
        color: ${props => props.type === "auth" ? "#000" : ""};
        border: ${props => props.type === "auth" ? "1px solid #000" : ""};
      }   
`; 

  const RequestCTA = styled.p`
    display: flex;
    align-items: center;
    .icon1,.icon2 {
    padding: 0 20px 0 20px;
   }
   .icon1{
    border-right: 2px solid;
   }
`;  

    return (
        <RequestCTA>
            <div className="icon1"><i className="fa fa-file-pdf-o"></i></div>
            <div className="icon2"><i className="fa fa-file-archive-o"></i></div>
            <StyledButton1 type="reject" className="btn-reject"> Reject </StyledButton1>
            <StyledButton1 type="auth" className="btn-auth"> Authorize </StyledButton1>   
        </RequestCTA>
      )
}

export default RequestCTA
