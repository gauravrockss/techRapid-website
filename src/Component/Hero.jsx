import React from 'react';
import { Button, Col, Container, Form, Row, Stack } from 'react-bootstrap';
import Image from './Image';

export default function Hero(props) {
    const { title, content, image } = props;
    return (
        <>
            <section className='hero pb-5'>
                <Container>
                    <Row>
                        <Col lg={6} md={12} className='mt-5'>
                            <div className='leftside d-flex flex-column align-items-start justify-content-center h-100 px-lg-0 px-4'>
                                <h1
                                    className='display-5 '
                                    style={{ fontWeight: '600' }}>
                                    {title}
                                </h1>
                                <p className='my-3'>{content}</p>
                                <h5
                                    style={{ fontWeight: '400' }}
                                    className='mb-3'>
                                    Get Early access for you.
                                </h5>
                                <Stack
                                    direction='vertical'
                                    gap={2}
                                    className='d-flex  stack  flex-md-row lg-align-items-start'>
                                    <Form className='form'>
                                        <Form.Group className='input'>
                                            <Form.Control
                                                type='text'
                                                className='rounded-pill  px-3'
                                                placeholder='Enter email'
                                            />
                                        </Form.Group>
                                    </Form>
                                    <Button className='main-button'>
                                        Get it now
                                    </Button>
                                </Stack>
                            </div>
                        </Col>
                        <Col lg={6} md={12} className='mt-4'>
                            <div className='right d-flex justify-content-center align-items-center my-5 '>
                                <Image name={image} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}
