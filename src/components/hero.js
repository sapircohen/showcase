import React from 'react';
import LazyHero from 'react-lazy-hero';
import CountdownTimer from './countdown';
import {background,ruppin} from '../assets/images';
import Navbar from 'react-bootstrap/Navbar'
const Hero = ()=> {
    return (
        <div style={{borderBottom:'2px solid',direction:'rtl'}}>
            <LazyHero opacity={0.1} imageSrc={background}>
                <Navbar style={{background:'transparent',direction:'ltr',width:'100vw',justifyContent:'center'}}>
                    <Navbar.Brand style={{cursor:'pointer'}} onClick={()=>window.open('http://proj.ruppin.ac.il/gallery/','_blank')}>
                        <img
                            alt="ruppin we learn"
                            src={ruppin}
                            width={220}
                            height={50}
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                </Navbar>
                <span className="text" style={{fontFamily:'Varela Round, sans-serif'}}>כנס הפרויקטים של המחלקה להנדסת תעשייה וניהול <br/>במרכז האקדמי רופין 2020</span>
                <br/>
                <CountdownTimer/>
            </LazyHero>
        </div>
    );
}

export default Hero;