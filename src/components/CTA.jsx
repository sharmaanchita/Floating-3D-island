import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>
        <p className='cta-text'>Do you have amazing projects in mind?<br className='sm:block hidden'/>
        Let's build it together</p>
        <Link to='/contact' className='btn'>Let's Talk</Link>
    
    </section>
  )
}

export default CTA;