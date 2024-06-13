import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {
    AiOutlineTwitter,
    AiFillInstagram,
    AiFillYoutube,
} from 'react-icons/ai';
function Footer() {
    return (
        <>
            <section className='my-3'>
                <Container>
                    <div style={{ transform: 'translatey(60%)' }}>
                        <div className='d-flex justify-content-between short-contact align-items-center'>
                            <div>
                                <h6 className='m-0 p-0'>
                                    Ready to get started
                                </h6>
                                <h6>Talk to us today</h6>
                            </div>
                            <div>
                                <NavLink
                                    to='/'
                                    className='btn'
                                    style={{
                                        background: '#6F5DE7',
                                        border: 'none',
                                        color: 'white',
                                    }}>
                                    Get started
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <footer className='footer'>
                <Container>
                    <Row
                        className='d-flex lg-px-0 px-4'
                        style={{ padding: ' 120px 0 50px 0 ' }}>
                        <Col lg={3} className=''>
                            <h5>Frontend Developer</h5>
                            <p>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Voluptatem, neque?
                            </p>
                        </Col>
                        <Col lg={3} className='my-lg-0 my-4'>
                            <h5>Subscribe to get important update</h5>
                            <Form>
                                <Form.Group
                                    className='my-4 '
                                    controlId='formBasicPassword'>
                                    <Form.Control
                                        type='text'
                                        placeholder='Password'
                                        name='password'
                                    />
                                </Form.Group>
                            </Form>
                            <Button
                                className='px-4 py-2'
                                style={{
                                    background: '#6F5DE7',
                                    border: 'none',
                                    color: 'white',
                                    letterSpacing: '2px',
                                }}>
                                SUBSCRIBE
                            </Button>
                        </Col>
                        <Col lg={3} className='my-lg-0 my-4 ps-lg-5 ps-3'>
                            <h5 className>Follow Us</h5>
                            <div className='d-flex  justify-content-center text-white'>
                                <a href='' className='social-icon'>
                                    <AiFillYoutube />
                                </a>
                                <a href='' className='social-icon'>
                                    <AiFillInstagram />
                                </a>
                                <a href='' className='social-icon'>
                                    <AiOutlineTwitter />
                                </a>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <h5 className=''>Call Us</h5>
                            <p>+91 6392212192</p>
                        </Col>
                    </Row>
                </Container>
                <hr style={{ color: 'white' }} className='py-3 m-0' />
                <div>
                    <Container>
                        <Row className='m-auto'>
                            <Col lg={8}>
                                <Row className='text-center'>
                                    <Col lg={6}>
                                        <p>
                                            @ {new Date().getFullYear()} All
                                            Right Reserved
                                        </p>
                                    </Col>
                                    <Col
                                        lg={6}
                                        className='d-flex justify-content-between'>
                                        <p>PRIVACY POLICY</p>
                                        <p>TERMS & CONDITIONS</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </footer>
        </>
    );
}
export default Footer;
