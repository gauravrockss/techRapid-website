import React from 'react';
import Header from './Component/Header';
import Footer from './Component/Footer';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Services from './pages/Services';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Error from './pages/Error';
import Gototop from './Component/Gototop';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/services' element={<Services />} />
                <Route path='*' element={<Error />} />
            </Routes>
            <Gototop />
            <Footer />
        </>
    );
}

export default App;
