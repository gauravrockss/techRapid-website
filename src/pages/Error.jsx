import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Image from '../Component/Image';

function Error() {
    return (
        <>
            <section className='error'>
                <Container>
                    <div className='d-flex mt-5 '>
                        <Image name='error.svg' />
                    </div>
                    <div className='text-center my-2'>
                        <NavLink
                            to='/'
                            className='px-5 py-2 btn'
                            style={{
                                background: '#6F5DE7',
                                border: 'none',
                                color: 'white',
                                fontSize: '20px',
                            }}>
                            Go back
                        </NavLink>
                    </div>
                </Container>
            </section>
        </>
    );
}
export default Error;
