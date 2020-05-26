import React from 'react';
import Countdown from 'react-countdown';
import Count2 from './countdown2';
import '../css/countdown.css'
const CountdownRPS=()=>{
    return(
    //     <div className="countText" style={{fontFamily:'Montserrat, sans-serif'}}>
    //         <Countdown 
    //         date={'2020-06-23'}
    // renderer={(props)=><span>{props.days}:{props.hours}:{props.minutes}:{props.seconds}</span>}
    //          />
             
    //     </div>
        <Count2 targetDate="Jun 25, 2020" targetTime="18:00:00"/>
    )
}

export default CountdownRPS;