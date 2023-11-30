import Header from '../../components/Header';
import HeaderImage from '../../Images/header_bg_1.jpg'
import '../About/About.css'
import StoryImage from '../../Images/gallery3.jpg'
import VisionImage from '../../Images/gallery4.jpg'
import MissionImage from '../../Images/trainer6.jpg'

const About=()=>{
    return (
        <>
        <Header title="About Us" Image={HeaderImage} >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quisquam repellat commodi, tempore perspiciatis incidunt vero aliquid quidem alias ipsum.
        </Header>
        <section className="about__story">
            <div className="container about__story-container">
        <div className="about__section-image">
            < img src={`${StoryImage}`} alt="story image" />
        </div>
        <div className="about__section-content">
            <h1>
                Our Story
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, aperiam eum enim iure, suscipit deleniti consequuntur vel consectetur animi iusto magnam eveniet rerum in quo quia a voluptatum vero odit nobis aut, id perspiciatis? Iure placeat dolores dolorem blanditiis vitae.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius impedit ducimus autem earum illum nulla excepturi quaerat explicabo iste cum?
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, facilis.
            </p>
        </div>
            </div>
        </section>
        <section className="about__Vision">
            <div className="container about__Vision-container">
        <div className="about__section-content">
            <h1>
                Our Vision
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, aperiam eum enim iure, suscipit deleniti consequuntur vel consectetur animi iusto magnam eveniet rerum in quo quia a voluptatum vero odit nobis aut, id perspiciatis? Iure placeat dolores dolorem blanditiis vitae.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius impedit ducimus autem earum illum nulla excepturi quaerat explicabo iste cum?
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, facilis.
            </p>
        </div>
        <div className="about__section-image">
            <img src={`${VisionImage}`} alt="story image" />
        </div>
            </div>
        </section>
        <section className="about__mission">
            <div className="container about__mission-container">
            <div className="about__section-image">
            <img src={MissionImage} alt="story image" />
        </div>
        <div className="about__section-content">
            <h1>
                Our Mission
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, aperiam eum enim iure, suscipit deleniti consequuntur vel consectetur animi iusto magnam eveniet rerum in quo quia a voluptatum vero odit nobis aut, id perspiciatis? Iure placeat dolores dolorem blanditiis vitae.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius impedit ducimus autem earum illum nulla excepturi quaerat explicabo iste cum?
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, facilis.
            </p>
        </div>
        
            </div>
        </section>
        </>

    )
}


export default About;