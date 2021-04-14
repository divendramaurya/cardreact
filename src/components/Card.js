import React, { Component } from 'react';
import './Card.css';
import FullDetails from './FullDetails';
import RequestCTA from './RequestCTA';
import RequestDetails from './RequestDetails';
import RequestTitle from './RequestTitle';

class Card extends Component {
    render() { 
        return (
            <div className="card-wrapper">
            <div className="row1">
               <RequestTitle/>
               <RequestCTA/>
              
            </div> 
            
            <div className="row2">
               <RequestDetails/>
               <FullDetails/>     
               
            </div>
            
        </div>   
        )
    }
}

export default Card
