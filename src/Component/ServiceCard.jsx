import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import Image from './Image';

function ServicesCard(props) {
    const { title, img, content } = props;
    return (
        <>
            <Col lg={4} md={6} sm={12}>
                <Card className=''>
                    <Image name={img} variant='top' />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{content}</Card.Text>
                        <Button
                            className='px-4 py-2'
                            style={{
                                background: '#6F5DE7',
                                border: 'none',
                                color: 'white',
                                letterSpacing: '2px',
                            }}>
                            LEARN MORE
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
}
export default ServicesCard;
