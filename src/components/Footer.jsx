import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
          <img src={assets.logo} className='mb-5 w-32' alt="Mariya Fashions Logo" />
          <p className='w-full md:w-2/3 text-gray-600'>
            Located in the heart of Ernakulam, <b>Mariya Fashions</b> brings you a curated collection of stylish, comfortable, and affordable clothing for the whole family. Whether it's daily wear or festive fashion, we offer trend-forward designs that suit every occasion.
          </p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+91 79078 72704</li>
            <li>contact@mariyatextiles.com</li>
            <li>MG Road, Near Shenoy's Theatre, Ernakulam, Kerala</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>
          © 2025 Mariya Fashions | Developed by Asubrix International. All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
