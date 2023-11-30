import React from 'react'
import Header from '../../components/Header'
import HeaderImage from '../../Images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import './Contact.css';

const Contact = () => {
  return (
    <>
    <Header title="GET IN TOUCH" Image={HeaderImage} >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque in veniam, obcaecati incidunt dignissimos alias nostrum ducimus! Voluptates, repudiandae explicabo.
    </Header>
    <section className="contact">
      <div className="container contact__container">
        <div className="contact__wrapper">
        <a href="mailto:vinitchokshi1809@gmail.com" target='_blank' rel='noreferrer noopener '><MdEmail/></a>
        <a href="http://m.me/vinitchokshi" target='_blank' rel='noreferrer noopener '><BsMessenger/></a>
        <a href="https://wa.me/7228806111" target='_blank' rel='noreferrer noopener '><IoLogoWhatsapp/></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact