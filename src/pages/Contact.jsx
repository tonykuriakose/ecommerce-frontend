import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="Contact Mariya Fashions" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>
            Mariya Fashions<br />
            MG Road, Near Shenoy's Theatre<br />
            Ernakulam, Kerala, India
          </p>
          <p className='text-gray-500'>
            Tel: +91 79078 72704<br />
            Email: contact@mariyatextiles.com
          </p>
          <p className='font-semibold text-xl text-gray-600'>Careers at Mariya Fashions</p>
          <p className='text-gray-500'>Interested in joining our team? Get in touch with us to explore career opportunities.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>
            Contact HR
          </button>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default Contact
