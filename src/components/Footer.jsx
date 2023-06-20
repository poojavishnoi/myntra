import React from 'react'

function Footer() {
  return (
    <div className='bg-zinc-900 text-white p-20 '>
    <div className="flex gap-40">
      <div className="">
        <p>ONLINE SHOPPING</p>
        <ul className='mt-4 text-slate-300'>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
        <li>Home & Living</li>
        <li>Beauty</li>
        <li>Gift Cards</li>
        <li>Myntra Insider</li>

        </ul>
      </div>

      <div className="">
        <p>USEFUL LINKS</p>
        <ul className='mt-4 text-slate-300'>
        <li>Blog</li>
        <li>Careers</li>
        <li>Site Map</li>
        <li>Corporate Information</li>
        <li>Whitehat</li>


        </ul>
      </div>

      <div className="">
        <p>CUSTOMER POLICIES</p>
        <ul className='mt-4 text-slate-300'>
        <li>Contact Us</li>
        <li>FAQ</li>
        <li>T & C</li>
        <li>Terms of Use</li>
        <li>Track Orders</li>
        <li>Shipping</li>
        <li>Returns</li>
        <li>Privacy Policy</li>
        <li>Grievance Officer</li>

        </ul>
      </div>

      

    </div>
    </div>
  )
}

export default Footer