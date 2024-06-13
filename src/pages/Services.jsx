import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Hero from '../Component/Hero';
import ServicesCard from '../Component/ServiceCard';
import serviceDetails from '../Services/serviceDetail';

function Services() {
    return (
        <div>
            <Hero
                image='Services.svg'
                title='Our Services'
                content=' Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Voluptas asperiores maxime
                in corporis nemo quia et consequuntur
                delectus sint omnis, deleniti, adipisci
                suscipit. Placeat inventore delectus saepe
                tenetur quas hic.'
            />
            <div className='my-5 text-center'>
                <h1>Our Services</h1>
            </div>
            <Container className='my-5'>
                <Row className='gy-4'>
                    {serviceDetails.map((detail, ind) => {
                        return (
                            <ServicesCard
                                key={ind}
                                title={detail.title}
                                img={detail.img}
                                content={detail.content}
                            />
                        );
                    })}
                </Row>
            </Container>
        </div>
    );
}
export default Services;
