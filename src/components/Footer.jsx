import React from 'react'
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
<div >
<img src={assets.Logo} className="w-30 h-30 rounded-full" alt="" />
</div>
<div>
  <p className='text-xl font-medium mb-5'> COMPANY</p>
  <ul className='flex flex-col gap-1 text-gray-600'>
    <Link to='/about'><li className='hover:text-gray-800 cursor-pointer'>About Us</li></Link>
    <Link to='/contact'><li className='hover:text-gray-800 cursor-pointer'>Contact Us</li></Link>
 </ul>
</div>
 <div>
 <p className='text-xl font-medium mb-5'>Talk with us</p>
 <ul className='flex flex-col gap-1 text-gray-600'>
 <li>+333 333333</li>
 <li>gfurtado.sw@gmail.com</li>
 <li>francescotorchia10@gmail.com</li>
 </ul>
  </div>
</div>
<div>
  <hr />
  <p className='py-5 text-sm text-center'>Copyright 2025@ Surfology.com - All Rights Reserved.</p>
</div>
      </div>
  )
}
export default Footer;
