import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import workdetails from '../Services/workdetails';

function Howitwork() {
    return (
        <>
            <section className='work'>
                <Container className='work-container'>
                    <Row>
                        <div className='text-center py-4'>
                            <h2>How does it Work</h2>
                        </div>
                        {workdetails.map(detail => {
                            const { logo, title, content } = detail;
                            return (
                                <Col lg={4} className='text-center'>
                                    <h6 className='icon'>{logo}</h6>
                                    <h5 className='my-3'>{title}</h5>
                                    <p>{content}</p>
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            </section>
        </>
    );
}
export default Howitwork;
