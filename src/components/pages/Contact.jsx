import React from "react"
import { Heading } from "../common/Heading"
import { contact } from "../data/dummydata"

export const Contact = () => {
  return (
    <>
      <div className='contact'>
        <div className='container'>
          <Heading title='Contact Us' />
          <p>
Any question about our products or technologies?
Just text us!</p>
          <div className='content flexsb'>
            <div className='right'>
              <form>
                <div className='flex'>
                  <input type='text' placeholder='Name' data-aos='flip-left' />
                  <input type='email' placeholder='Email' data-aos='flip-right' />
                </div>
                <input type='email' placeholder='Subject' data-aos='flip-up' />
                <textarea name='' id='' cols='30' rows='10' data-aos='flip-down' placeholder="your question"></textarea>
                <button data-aos='zoom-in-up'>Send</button>
              </form>
            </div>
           
          </div>
        </div>
      </div>
    </>
  )
}
