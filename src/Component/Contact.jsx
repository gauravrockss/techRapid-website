import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Image from './Image';

function Contact() {
    return (
        <>
            <section className='my-5 contact'>
                <Container>
                    <Row>
                        <Col lg={10} className='mx-auto mt-5'>
                            <Row>
                                <Col lg={5}>
                                    <div className=' mt-5 px-lg-0 px-4'>
                                        <h2 className='text-lg-start text-center'>
                                            Contact with our sales Team
                                        </h2>
                                        <p className='my-3 text-lg-start text-center'>
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Commodi, repellendus?
                                        </p>
                                    </div>
                                    <div className='px-lg-0 px-4'>
                                        <Image name='contact.jpg' />
                                    </div>
                                </Col>

                                <Col lg={7} className='mt-5'>
                                    <Form className='mt-4 px-4'>
                                        <div className='d-flex'>
                                            <Form.Group
                                                className='mb-4 me-3 w-75'
                                                controlId='formBasicEmail'>
                                                <Form.Control
                                                    type='text'
                                                    placeholder='First Name'
                                                />
                                            </Form.Group>

                                            <Form.Group
                                                className='mb-3 w-75'
                                                controlId='formBasicPassword'>
                                                <Form.Control
                                                    type='text'
                                                    placeholder='Last Name'
                                                />
                                            </Form.Group>
                                        </div>
                                        <div className='d-flex'>
                                            <Form.Group
                                                className='mb-3 me-3 w-75'
                                                controlId='formBasicEmail'>
                                                <Form.Control
                                                    type='email'
                                                    placeholder='Enter email'
                                                />
                                            </Form.Group>

                                            <Form.Group
                                                className='mb-4 w-75'
                                                controlId='formBasicPassword'>
                                                <Form.Control
                                                    type='number'
                                                    placeholder='Moblie Number'
                                                />
                                            </Form.Group>
                                        </div>
                                        <Form.Group
                                            className='mb-4'
                                            controlId='formBasicPassword'>
                                            <Form.Control
                                                type='text'
                                                placeholder='Enter Address'
                                            />
                                        </Form.Group>
                                        <Form.Group
                                            className='mb-4'
                                            controlId='formBasicPassword'>
                                            <Form.Control
                                                type='text'
                                                placeholder='Enter Message'
                                            />
                                        </Form.Group>
                                        <Form.Group
                                            className='mb-4'
                                            controlId='formBasicCheckbox'>
                                            <Form.Check
                                                type='checkbox'
                                                label=' Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Commodi, repellendus?'
                                            />
                                        </Form.Group>
                                        <Button className='main-button  w-100'>
                                            Learn More
                                        </Button>
                                    </Form>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}
export default Contact;
