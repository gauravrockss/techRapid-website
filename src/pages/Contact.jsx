import React from 'react';
import {
    Button,
    Col,
    Container,
    FloatingLabel,
    Form,
    Row,
} from 'react-bootstrap';

function Contact() {
    return (
        <>
            <section>
                <div className='text-center my-5'>
                    <h1>Feel Free To Contact Us</h1>
                </div>
                <div>
                    <iframe
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56884.595082503234!2d82.30686589077008!3d26.98946350662815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3997531f7b157007%3A0xe6dfb0f324d43348!2sMaskanwa%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1679907702844!5m2!1sen!2sin'
                        width='100%'
                        height='450'
                        style={{ border: '0' }}
                        allowFullScreen=''
                        loading='lazy'
                        referrerpolicy='no-referrer-when-downgrade'></iframe>
                </div>

                <div className='my-5'>
                    <Container>
                        <Row>
                            <Col lg={5} className='mx-auto'>
                                {' '}
                                <Form
                                    action='https://formspree.io/f/mknavaek'
                                    method='post'>
                                    <Form.Group
                                        className='mb-4'
                                        controlId='formBasicEmail'>
                                        <Form.Control
                                            type='email'
                                            placeholder='Enter email'
                                            name='Email'
                                        />
                                    </Form.Group>

                                    <Form.Group
                                        className='mb-4'
                                        controlId='formBasicPassword'>
                                        <Form.Control
                                            type='password'
                                            placeholder='Password'
                                            name='password'
                                        />
                                    </Form.Group>

                                    <Form.Control
                                        as='textarea'
                                        placeholder='Leave a Message here'
                                        style={{ height: '100px' }}
                                        className='mb-4'
                                        name='message'
                                    />

                                    <Button
                                        className='main-button'
                                        type='submit'>
                                        Submit
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    );
}
export default Contact;
