"use client"
import React from 'react'
import Image from 'next/image'
import  Link  from "next/link"
import { HiArrowDown } from "react-icons/hi"
import styles from "./header.module.css"






export const Header = () => {
  return (
    
  
  <section id="home" className="py-5">
      <div className="d-flex flex-column align-items-center justify-content-center my-5 py-5 md:flex-row">
        <div>
        <Image src="/headshot.jpg" className="rounded-circle shadow" alt="" width={300} height={300} />
        </div>
        <div className="ml-md-5 mt-3 mt-md-0 text-center text-md-left" >
          <h1>Hi, I'm Mohau!</h1>
          <p >
            I'm a <span className="font-weight-bold text-info">Junior Web Developer</span> currently in Pretoria, Centurion. I have a keen interest in all things related to Web and Software development. Aiming to improve the IT space with interactive designs.
          </p>
          <Link href="/contactPage">
            <div className="btn btn-primary rounded text-white text-xl font-semibold px-4 py-2 shadow-sm hover:bg-teal-300 mt-4">
              Contact
            </div>
          </Link>
          <a href="#about" className={styles['scroll-to-section']} onClick={(e) => {
  e.preventDefault();
  const target = document.querySelector("#about");
  target.scrollIntoView({ behavior: "smooth", block: "start" });
}}>
  <div style={{ borderBottom: '6px solid blue'  }}>
    <br />
    <HiArrowDown
      size={35}
      className={styles['animate-bounce']}
    />
  </div>
</a>
        

 
        
</div>
</div>         
 </section>

  )
}
  
export default Header
