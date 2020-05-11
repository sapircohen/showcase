import React from 'react';
import LazyHero from 'react-lazy-hero';
import CountdownTimer from './countdown';
import {cover2} from '../assets/images';

const Hero = ()=> {
    return (
        <div style={{borderBottom:'1px solid',direction:'rtl'}}>
            <LazyHero opacity={0.1} imageSrc={cover2}>
                <span className="text" style={{fontFamily:'Varela Round, sans-serif'}}>כנס הפרויקטים של המחלקה להנדסת תעשיית וניהול <br/>במרכז האקדמי רופין</span>
                <br/>
                <CountdownTimer/>
            </LazyHero>
        </div>
    );
}

export default Hero;