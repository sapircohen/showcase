import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';
 
const Completionist = () => <span></span>;
 
// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <span>{hours}:{minutes}:{seconds}</span>;
  }
};

const CountdownRPS=()=>{
    return(
        <div className="countText" style={{fontFamily:'Wallpoet, cursive'}}>
            <Countdown date={'2020-06-23'} />
        </div>
    )
}

export default CountdownRPS;