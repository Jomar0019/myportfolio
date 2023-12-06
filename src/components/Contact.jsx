import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='page dark-mode flex justify-center items-center p-4'>
      <form action="https://getform.io/f/73978d5f-eb51-4a42-a231-9bd39306a350" method='POST' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
            <p className='title'>Contact</p>
            <p className='text-white/50 py-4'>Submit the form below or shoot me an email - jomarmagpoot24@gmail.com</p>
        </div>
        <input className=' contact-input' type="text" name="name" id="" placeholder='Name' />
        <input className='my-4  contact-input' type="email" name="email" id="" placeholder='Email' />
        <textarea name="message" placeholder='Message' className=' contact-textbox' id="" cols="30" rows="10"></textarea>
        <button type='submit' className='contact-btn'>Let's Collaborate</button>
      </form>
    </div>
  )
}

export default Contact
