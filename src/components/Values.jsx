import Image from '../Images/values.jpg'
import SectionHeader from './SectionHeader'
import {GiCutDiamond} from 'react-icons/gi'
import { values} from '../data';
import Card from '../UI/Card';
// import Card from '../UI/Card';


const Values = () => {
  return (
    <section className="values">
        <div className="container values__container">
             <div className="values__left">
                <div className="values__image">
                    <img src={Image}  alt="Values Image" />
                </div>
             </div>
             <div className="values__right">
                <SectionHeader icon={<GiCutDiamond/>} title="values"  />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos minima ex, repudiandae quaerat amet veritatis!
                <p>
                    <div className="values__wrapper">
                        {
                            values.map( ({id,icon,title,desc})=>{
                                return <Card key={id} className='values__value'>
                                        <span>
                                            {icon}
                                        </span>
                                        <h4>
                                            {title}
                                        </h4>
                                        <small>{desc}</small>
                                </Card>
                            })
                        }
                    </div>
                </p>
             </div>
        </div>
    </section>
  )
}

export default Values