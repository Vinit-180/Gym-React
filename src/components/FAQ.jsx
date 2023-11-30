import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'
import { useState } from 'react'
import React from 'react'

const FAQ = ({question,answer}) => {
    const [isAnswerShowing,SetisAnswerShowing]=useState(false);
  return (
    <article className='faq' onClick={ ()=>SetisAnswerShowing(prev=>!prev) }>
    <div>
        <h4>{question}</h4>
        <button className='faq__icon' >
            {
                isAnswerShowing ? <AiOutlineMinus/> : <AiOutlinePlus/> 
            }
            
            </button>
        </div>
        {
            isAnswerShowing && <p>{answer}</p>
        }
        
    </article>
  )
}

export default FAQ