import React from 'react';
import { Button } from 'react-bootstrap';
import { FaArrowUp } from 'react-icons/fa';

export default function Gototop() {
    const Gotobtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };
    return (
        <>
            <section className='d-flex justify-content-center align-items-center'>
                <div className='gototopbtn ' style={{}}>
                    <Button onClick={Gotobtn}>
                        <FaArrowUp className='icon-btn' />
                    </Button>
                </div>
            </section>
        </>
    );
}
