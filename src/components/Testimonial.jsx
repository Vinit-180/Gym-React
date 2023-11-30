import React from 'react'
import { useState } from 'react'
import SectionHeader from './SectionHeader'
import Card from '../UI/Card'
import {ImQuotesLeft} from 'react-icons/im';
import {IoIosArrowDropleftCircle,IoIosArrowDroprightCircle} from 'react-icons/io'
import { testimonials } from '../data';

const Testimonial = () => {
    const [index,Setindex]=useState(0);
    const {name,quote,job,avatar}= testimonials[index];

    const prevtestimonialHandler=()=>{
        Setindex(prev=>prev-1);
        if(index<=0)
        {
            Setindex(testimonials.length-1);
        }
    }
    const nexttestimonialHandler=()=>{
        Setindex(prev=>prev+1);
        if(index>=testimonials.length-1)
        {
            Setindex(0);
        }
    }


  return (
    <section className='testimonials'>
        <div className="testimonail__container">
            <SectionHeader icon={<ImQuotesLeft/>} title="Testimonials" className="testimonials__head"  />
            <Card className="testimonial" >
                <div className="testimonial__avatar">
                    <img src={avatar} alt={name} />
                </div>
                <p className='testimonial__quotes'>{`"${quote}"`}</p>
                <h5>{name}</h5>
                <small className='testimonial__title' >{job}</small>
            </Card>
            <div className="testimonial__btn-container">
                <button className="testimonial__btn" onClick={prevtestimonialHandler}>
                    <IoIosArrowDropleftCircle/>
                </button>
                <button className="testimonial__btn" onClick={nexttestimonialHandler}>
                <IoIosArrowDroprightCircle />
                </button>
            </div>
        </div>
    </section>
  )
}

export default Testimonial