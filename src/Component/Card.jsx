import React from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import carddetail from '../Services/carddetail';

function Cards() {
    return (
        <>
            <section className='mt-5'>
                <div className='text-center'>
                    <h2 className='py-5'>How to send money</h2>
                </div>
                <div>
                    <Container>
                        <Row>
                            {carddetail.map((deatil, ind) => {
                                const { logo, title, content } = deatil;
                                return (
                                    <Col lg={4} className='g-3'>
                                        <Card className='p-4 cards'>
                                            <h4 className='icon m-0'>{logo}</h4>
                                            <Card.Body>
                                                <Card.Title>{title}</Card.Title>
                                                <Card.Text>{content}</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                );
                            })}
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    );
}
export default Cards;
