import React from 'react'
import { Link } from 'react-router'

export default function Footer() {
  return (
    <footer className=' p-4 mt-10 text-center  text-secondary/80 border-t border-secondary/20'>
      <div>Copyright © {new Date().getFullYear()} <b>Redistribute.io</b> Inc. All Rights Reserved.</div>
      <div className='flex text-accent justify-center items-center gap-2 flex-wrap '>
        <Link to={'privacy-policy'} className='pr-2 border-r'>Privacy Policy</Link>
        <Link to={'terms-and-conditions'}>Terms and Conditions</Link>
      </div>
    
    </footer>
  )
}
