import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p><b>Mariya Fashions</b> is your neighborhood destination for affordable, everyday fashion. Located in the heart of Ernakulam on MG Road near Shenoy's Theatre, we proudly serve the local community with a carefully chosen collection of stylish and comfortable clothing for men, women, and kids.</p>
              <p>Our journey began with a simple goal: to make quality fashion accessible to everyone without compromising on style or budget. Whether you're shopping for casual wear, festive outfits, or everyday essentials, Mariya Fashions offers a selection that fits your needs and lifestyle.</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>At Mariya Fashions, our mission is to provide a personalized shopping experience by blending current fashion trends with friendly, customer-focused service. We’re dedicated to helping you look good and feel confident — every single day.</p>
          </div>
      </div>

      <div className=' text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Curated Collections:</b>
            <p className=' text-gray-600'>Every piece in our store is handpicked to reflect the latest fashion trends and everyday comfort.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Local Touch:</b>
            <p className=' text-gray-600'>As a single-location store in Ernakulam, we understand and cater to the style preferences of our local customers.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Friendly Service:</b>
            <p className=' text-gray-600'>We’re always ready to assist with a warm smile — your satisfaction is what matters most to us.</p>
          </div>
      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About
