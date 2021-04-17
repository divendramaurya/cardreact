import React from 'react'
import styled from "styled-components"

function RequestDetails() { 

    const ReqHeader = styled.p`
    font-size: 12px;
    line-height: 15px;
    color: #767676;
    `; 

    const ReqDetail = styled.p`
    font-size: 12px;
    line-height: 15px;
    color: #252525;
    font-weight: 500; 
    `; 

    const ReqParent = styled.div`
    display: flex;
    align-items: center;
    .reqblock {
    border-left: 1px solid #000;
    padding: 0 25px 0 10px;
    margin :0;
    p{
        margin: 0;
     }
    }
   `; 
 
    return (
        <ReqParent>
        <div className="reqblock"> 
            <ReqHeader> Request reference </ReqHeader>
            <ReqDetail> SET29383ABCH </ReqDetail>
        </div>
        <div className="reqblock">
            <ReqHeader> Category </ReqHeader>
            <ReqDetail> Payment </ReqDetail>
        </div>
        <div className="reqblock">
            <ReqHeader> Request status </ReqHeader>
            <ReqDetail><i class="fa fa-info-circle" style={{fontSize:"16px",color:"red"}}></i>Pending authorisation</ReqDetail>
        </div>
        </ReqParent> 
    )
}

export default RequestDetails
