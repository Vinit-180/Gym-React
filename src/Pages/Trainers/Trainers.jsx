import Header from '../../components/Header';
import HeaderImages from '../../Images/header_bg_5.jpg'
import { trainers } from '../../data';
import { BsInstagram } from 'react-icons/bs';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import './Trainers.css'
import Trainer from '../../components/Trainer';

const Trainers=()=>{
    return (
        <>
        <Header title='Our Trainer' Image={HeaderImages}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum illo dolor vero consectetur architecto! Amet eaque optio, dolorum perferendis soluta voluptate quos dolorem ipsum nemo.
        </Header>
        <section className="trainers">
            <div className="container trainers__container">
                {
                    trainers.map(({id,image,name,job,socials})=>{
                        return <Trainer key={id} image={image} name={name} job={job} socials={
                            [
                                {icon : <BsInstagram/>,link:socials[0]},
                                {icon : <AiOutlineTwitter/>,link:socials[1]},
                                {icon : <FaFacebookF/>,link:socials[2]},
                                {icon : <FaLinkedinIn/>,link:socials[-1]},
                                
                            ]}
                        >
                            
                        </Trainer>
                    })
                }
            </div>
        </section>
        </>
    )
};

export default Trainers;