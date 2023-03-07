import React from 'react';
import Image from 'next/image';

const skills = [    { skill: 'JavaScript' },    { skill: 'React' },    { skill: 'Node.js' },    { skill: 'HTML' },    { skill: 'CSS' },];

const About = () => {
  return (
    <section id="about">
      
        
          <div className="col-12 col-md-6 mt-4">
            <h1>Get to know me!</h1>
            <hr className="border-0 bg-teal-500 h-1 my-4 mx-auto rounded w-6"></hr>

            <p>
              Hi, my name is Mohau and I am a{" "}
              <span className="font-weight-bold">{"highly ambitious"}</span>,
              <span className="font-weight-bold">{" self-motivated"}</span>, and
              <span className="font-weight-bold">{" driven"}</span> junior developer based in Pretoria 
            </p>
            <br />
            <p>
              I am currently studying in AIE and UNISA where I do Systems development & Law. I have a keen interest in web development and Machine Learning 
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From reading, playing basketball and writing . I am always seeking new experiences and constantly try to engage myself in new projects
              learning new things whenever the opportunity arises as you can never truly know everything. 
            </p>
            <br/> 
            <p>
              I believe that you should{" "}
              <span className="font-weight-bold text-info">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and to see the endless possibilities 
              that are involved in the ever growing Tech space. I want to see innovations and be part of them as well
            </p>
            
            <div className="container-md">
            <div className="row justify-content-center justify-content-md-start align-items-center">
            <div className="col-12 col-md-6 order-2 order-md-1">
            <h1 className='text-center'text-md-left mb4--md-0>My Skills</h1>
            <div className="d-flex flex-wrap justify-content-center justify-content-md-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-dark px-4 py-2 mx-2 my-2 text-secondary rounded font-weight-bold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="col-12 col-md-6 order-1 order-1md-2">
            <img
              src="/about.png"
              alt=""
              width={325}
              height={325}
              className="mx-auto d-blcok my-5 my-md-0"
            />
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
