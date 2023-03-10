import React from 'react';
import Image from 'next/image';
import { Row, Col } from 'react-bootstrap';
const skills = [
  { skill: 'JavaScript' },
  { skill: 'React' },
  { skill: 'Node.js' },
  { skill: 'HTML' },
  { skill: 'CSS' },
];

const About = () => {
  return (
    <section id="about">
      <Row className="flex-column flex-md-row justify-content-center align-items-stretch">
        <Col md={6} className="order-2 order-md-1">
          <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
            Get to know me!
          </h1>

          <p>
            Hi, my name is Mohau and I am a{' '}
            <span className="font-bold">highly ambitious</span>,{' '}
            <span className="font-bold">self-motivated</span>, and{' '}
            <span className="font-weight-bold">driven</span> junior developer based in Pretoria.
          </p>
          <br />
          <p>
            I am currently studying in AIE and UNISA where I do Systems development & Law. I have a keen interest in web
            development and Machine Learning.
          </p>
          <br />
          <p>
            I have a wide range of hobbies and passions that keep me busy. From reading, playing basketball, and writing,
            I am always seeking new experiences and constantly try to engage myself in new projects, learning new things
            whenever the opportunity arises as you can never truly know everything.
          </p>
          <br />
          <p>
            I believe that you should{' '}
            <span className="font-weight-bold text-info">never stop growing</span> and that's what I strive to do. I have
            a passion for technology and a desire to always push the limits of what is possible. I am excited to see where
            my career takes me and to see the endless possibilities that are involved in the ever-growing Tech space. I
            want to see innovations and be part of them as well.
          </p>
        </Col>

        <Col md={6} className="order-1 order-md-2">
          <h1 className="text-center text-2xl font-bold mb-6 md:text-left">My Skills</h1>
          <div className="d-flex flex-wrap justify-content-center justify-content-md-start">
            {skills.map((item, idx) => {
              return (
                <p
                  key={idx}
                  className="bg-dark px-4 py-2 mx-4 my-4 text-secondary rounded font-weight-bold"
                >
                  {item.skill}
                </p>
              );
            })}
          </div>
          <div className="col-12 col-md- order-2 order-md-2 ml-auto"> 
            <img
              src="/about.png"
              alt=""
              width={325}
              height={325}
              className="d d-md-block position-relative bottom-4 left-32"
            />
          </div> 
        </Col>
      </Row>
    </section>
  );
};


export default About;

