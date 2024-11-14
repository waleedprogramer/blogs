import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <>
      <footer className="bg-card py-16 px-8">
  <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
    <div>
      <h3 className="text-2xl text-dark font-semibold mb-4">About Me</h3>
      <p className="text-clr">
      I am Waleed Bin Mehmood, a front-end developer focused on creating responsive and user-friendly web experiences. My goal is to build visually appealing websites that are both functional and engaging.
      </p>
    </div>

    {/* Quick Links Section */}
    <div>
      <h3 className="text-2xl text-dark  font-semibold mb-4">Quick Links</h3>
      <ul className='flex flex-col gap-2 '>
        <li><Link href="/" className="text-clr hover:text-dark">Home</Link></li>
        <li><Link href="/about" className="text-clr  hover:text-dark">About</Link></li>
        <li><Link href="/blog" className="text-clr hover:text-dark">Blog</Link></li>
        <li><Link href="/contact" className="text-clr hover:text-dark">Contact</Link></li>
      </ul>
    </div>

    {/* Social Media Links */}
    <div>
      <h3 className="text-2xl text-dark  font-semibold mb-4">Follow Me</h3>
      <div className="flex lg:flex-col gap-2"> 
        <div></div>
        <Link href="https://twitter.com" className="text-clr hover:text-dark"><i className="fab fa-twitter"></i> Twitter</Link>
        <Link href="https://facebook.com" className="text-clr hover:text-dark"><i className="fab fa-facebook"></i> Facebook</Link>
        <Link href="https://instagram.com" className="text-clr hover:text-dark"><i className="fab fa-instagram"></i> Instagram</Link>
        <Link href="https://linkedin.com" className="text-clr hover:text-dark"><i className="fab fa-linkedin"></i> LinkedIn</Link>
      </div>
    </div>

    <div>
      <h3 className="text-2xl text-dark  font-semibold mb-4">Contact Me</h3>
      <p className="text-clr">Feel free to reach out to us with any questions or feedback. i would love to hear from you!</p>
      <ul>
        <li className="text-clr">Email: <Link href="waleedbinmehmoodahmed@gmail.com" className="hover:text-dark">waleedbinmehmood@gmail.com</Link></li>
        <li className="text-clr">Phone: <Link href="03182164523" className="hover:text-dark">03182164523</Link></li>
      </ul>
    </div>
  </div>

  <div className="text-center mt-12 py-6 border-t border-gray-700">
    <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} BLogs. All rights reserved.</p>
  </div>
</footer>

    </>
  )
}

export default Footer
