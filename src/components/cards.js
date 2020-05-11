import React from 'react';
import {Col,Row,Card,Button} from 'react-bootstrap';
import {code,idea,tapi} from '../assets/images';
import {FcIdea,FcRuler,FcMultipleSmartphones} from 'react-icons/fc'
const Cards = (props)=>{
    return(
        <Row style={{textAlign:'center'}}>
            <Col style={{padding:'3%'}} xs="12" md="4" lg="4" sm="4">
                <Card  dir="rtl">
                    <Card.Img style={{height:'auto'}} alt="יזמות" variant="top" src={idea}/>
                    {/* <Card.Body>
                        <Card.Title className="Text Title">יזמות</Card.Title>
                    </Card.Body> */}
                    <Card.Footer className="Text">
                        <Button variant="outline-dark"><FcIdea size={40}/>  לפרויקטים ביזמות</Button>
                    </Card.Footer>
                </Card>
            </Col>
            <Col style={{padding:'3%'}} xs="12" md="4" lg="4" sm="4">
                <Card  dir="rtl">
                    <Card.Img style={{height:'auto'}} alt="תפעול פיקוח יצור" variant="top" src={tapi}/>
                    {/* <Card.Body>
                        <Card.Title className="Text Title">תפ״י</Card.Title>
                    </Card.Body> */}
                    <Card.Footer className="Text">
                        <Button variant="outline-dark"><FcRuler size={40}/>  לפרויקטים בתפ״י</Button>
                    </Card.Footer>
                </Card>
            </Col>
            <Col style={{padding:'3%'}} xs="12" md="4" lg="4" sm="4">
                <Card  dir="rtl">
                    <Card.Img style={{height:'auto'}} alt="מערכות מידע" variant="top" src={code}/>
                    {/* <Card.Body>
                        <Card.Title className="Text Title">מערכות מידע</Card.Title>
                    </Card.Body> */}
                    <Card.Footer className="Text">
                        <Button variant="outline-dark"><FcMultipleSmartphones size={40}/>  לפרויקטים במערכות מידע</Button>
                    </Card.Footer>
                </Card>
            </Col>
        </Row>
    )
}

export default Cards;