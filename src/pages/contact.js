import React from 'react';
import Footer from '../components/footer'
import Header from '../components/header'


const ContactPage = () => {
    return (
        <div>
            <Header />

            <h1>Contact Us</h1>
            <p>Contact me at <a href="https://stackoverflow.com/" target="_blank">wongkokwah@gmail.com</a></p>
            <Footer />
        </div>
    );
};

export default ContactPage;