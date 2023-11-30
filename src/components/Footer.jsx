import { Link } from 'react-router-dom'
import Logo from '../Images/logo.png'
import { FaFacebookF, FaLinkedin } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className=" container footer__container">
            <article>
                <Link to='/' className='logo__footer'>
                    <img src={Logo} alt="footer logo" />
                </Link>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque iste aliquam facilis? Corrupti placeat, impedit quas ullam sapiente illo commodi!
                </p>
                <div className="footer__socials">
                    <a href="http://linkdin.com" target='__blank' rel='noreferrer noopener'><FaLinkedin/></a>
                    <a href="http://instagram.com" target='__blank' rel='noreferrer noopener'><AiFillInstagram/></a>
                    <a href="http://facebook.com" target='__blank' rel='noreferrer noopener'><FaFacebookF/></a>
                    <a href="http://twitter.com" target='__blank' rel='noreferrer noopener'><AiOutlineTwitter/></a>
                </div>
                {/* <img src={Lin} alt="" /> */}
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to='/About'>About</Link>
                <Link to='/plans'>Plans</Link>
                <Link to='/trainer'>Trainer</Link>
                <Link to='/gallery'>Gallery</Link>
                <Link to='/Contact'>Contact</Link>
            </article>
            <article>
                <h4>Insights</h4>
                <Link to='/s'>Blog</Link>
                <Link to='/s'>Case Studies</Link>
                <Link to='/s'>Events</Link>
                <Link to='/s'>Communicates</Link>
                <Link to='/s'>FAQs</Link>
            </article>
            <article>
                <h4>Get in touch</h4>
                <Link to='/Contact'>Contact us</Link>
                <Link to='/s'>Support</Link>
            </article>
            
        </div>
        <div className="footer__copyright">
            <small>
                2023 Vinit &copy;  All rights reserved
            </small>
        </div>
    </footer>
  )
}

export default Footer