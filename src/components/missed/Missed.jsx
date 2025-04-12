import React from 'react'
import { missed } from '../../data'
import "./missed.css"

const Missed = () => {
    return (
        <div className='missed-main'>
            {
                missed.map((m,i) => {
                    return (
                        <div key={i} className="missed-child cursor-pointer">
                            <div className='layer-main'>
                                <div className='layer-child'>
                                <span className=' text-[white] text-sm md:text-4xl w-[100%]'>{m.title}</span>
                                <span className='text-[lightgrey] md:text-2xl c-bg'>{m.desc}</span>
                                    </div>
                            </div>
                                <img src={m.image} alt='' />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Missed
