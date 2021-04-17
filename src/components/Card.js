import React, { Component } from "react";
import FullDetails from "./FullDetails";
import RequestCTA from "./RequestCTA";
import RequestDetails from "./RequestDetails";
import RequestTitle from "./RequestTitle";
import styled from "styled-components";

function Card() {
  const CardWrapper = styled.p`
    padding: 2px 0 10px 0;
    border: 1px solid #000;
    max-width: 780px;
    .row1 {
      display: flex;
      justify-content: space-between;
      /* margin-bottom: 20px; */
    }
    .row2 {
      display: flex;
      justify-content: space-between;
    }
  `;

  return (
    <CardWrapper>
      <div className="row1">
        <RequestTitle />
        <RequestCTA />
      </div>
      <div className="row2">
        <RequestDetails />
        <FullDetails />
      </div>
    </CardWrapper>
  );
}

export default Card;
