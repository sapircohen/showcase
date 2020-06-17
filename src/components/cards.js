import React from 'react';
import {Col,Row,Card,Button} from 'react-bootstrap';
import {code4,tapi2,inter} from '../assets/images';
import {FcIdea,FcRuler,FcMultipleSmartphones} from 'react-icons/fc';

const IS = "https://proj.ruppin.ac.il/gallery/#/FavoriteList/-M8ArZzXyw-Ngidy8Ua1/%D7%9E%D7%A2%D7%A8%D7%9B%D7%95%D7%AA%20%D7%9E%D7%99%D7%93%D7%A2%202020";
const tapi  = "https://proj.ruppin.ac.il/gallery/#/FavoriteList/-M9nOeKf1GURSa1W3V7_/%D7%A4%D7%A8%D7%95%D7%99%D7%99%D7%A7%D7%98%D7%99%20%D7%92%D7%9E%D7%A8%20%D7%99%D7%99%D7%A6%D7%95%D7%A8%20%D7%95%D7%A9%D7%99%D7%A8%D7%95%D7%AA%20%D7%91%D7%A1%D7%91%D7%99%D7%91%D7%94%20%D7%93%D7%99%D7%92%D7%99%D7%98%D7%9C%D7%99%D7%AA%202020";
const yazamut = "https://proj.ruppin.ac.il/gallery/#/FavoriteList/-M9mu40AIv0NgYQ2RXQ-/%D7%A4%D7%A8%D7%95%D7%99%D7%A7%D7%98%D7%99%20%D7%99%D7%96%D7%9E%D7%95%D7%AA%202020";

const Cards = (props)=>{
    return(
        <Row style={{textAlign:'center'}}>
            <Col style={{padding:'1% 3% 3% 3%'}} xs="12" md="4" lg="4" sm="4">
                <Card  dir="rtl">
                    <Card.Img style={{height:'300px'}} alt="יזמות" variant="top" src={inter}/>
                    <Card.Footer className="Text">
                        <Button onClick={()=>window.open(yazamut,"_blank")} variant="outline-dark"><FcIdea size={40}/>  לפרויקטים ביזמות</Button>
                    </Card.Footer>
                </Card>
            </Col>
            <Col style={{padding:'1% 3% 3% 3%'}} xs="12" md="4" lg="4" sm="4">
                <Card  dir="rtl">
                    <Card.Img style={{height:'300px'}} alt="תפעול פיקוח יצור" variant="top" src={tapi2}/>
                    <Card.Footer className="Text">
                        <Button onClick={()=>window.open(tapi,"_blank")} variant="outline-dark"><FcRuler size={40}/>  לפרויקטים בייצור ושירות בסביבה דיגטלית</Button>
                    </Card.Footer>
                </Card>
            </Col>
            <Col style={{padding:'1% 3% 3% 3%'}} xs="12" md="4" lg="4" sm="4">
                <Card  dir="rtl">
                    <Card.Img style={{height:'300px'}} alt="מערכות מידע" variant="top" src={code4}/>
                    <Card.Footer className="Text">
                        <Button onClick={()=>window.open(IS,"_blank")} variant="outline-dark"><FcMultipleSmartphones size={40}/>  לפרויקטים במערכות מידע</Button>
                    </Card.Footer>
                </Card>
            </Col>
        </Row>
    )
}

export default Cards;