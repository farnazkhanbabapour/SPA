import React from 'react'
import { useParams } from 'react-router-dom'
import { Container,Row,Col } from 'react-bootstrap'
import CourseData from './CourcesData'


export default function MainCource() {
    let params= useParams()
    let data= CourseData.find((cource)=>cource.id == params.courceId)
    console.log(data)
  return (
    <div>
        <Container className='mt-5'>
            <Row>
                <Col style={{width: "80%",height:"300px"}}><img src={data.img}/></Col>
                <Col> 
                    <h2>{data.title}</h2>
                    <p>{data.description}</p>
                </Col>
            </Row>
        </Container>

    </div>
  )
}
