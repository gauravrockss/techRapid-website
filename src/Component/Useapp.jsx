import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Image from './Image';
import Appuse from '../Services/Appuse';

function Useapp(props) {
    const { headtitle, head2title, reverse = false, image } = props;
    return (
        <>
            <section className='mt-5 about'>
                <Container>
                    <Row
                        className={`text-lg-start ${
                            reverse && 'flex-row-reverse'
                        } align-items-center `}>
                        <Col lg={5} className='text-center mb-4'>
                            <Image name={image} />
                        </Col>
                        <Col lg={7}>
                            <div className='text-center'>
                                <h6
                                    style={{ fontWeight: 'normal' }}
                                    className='mt-3 lg-mb-0 mb-3 '>
                                    {headtitle}
                                </h6>
                                <h4 style={{ fontWeight: 'bold' }}>
                                    {head2title}
                                </h4>
                            </div>

                            {Appuse.map(item => (
                                <Row className='mt-4 lg-px-0 px-4'>
                                    <Col lg={1}>
                                        <div className=''>
                                            <h6 className='serviceli'>
                                                {item.no}{' '}
                                            </h6>
                                        </div>
                                    </Col>
                                    <Col lg={10}>
                                        <h4 className=''>{item.maintitle}</h4>
                                        <p className='mt-3'>{item.content}</p>
                                    </Col>
                                </Row>
                            ))}
                            <div className='text-center'>
                                <Button className='main-button2  mt-4 w-50 '>
                                    Learn More
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}
export default Useapp;
