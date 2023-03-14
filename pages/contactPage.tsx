import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';





type FormValues = {
  firstName: string;
  lastName: string;
  Email: string;
  phoneNumber?: number;
  message?: string;
};

const schema = yup.object().shape({
  firstName: yup.string().required().max(50),
  lastName: yup.string().required().max(80),
  Email: yup.string().required().email(),
  phoneNumber: yup.number(),
  message: yup.string().max(1000),
});

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

const onSubmit: SubmitHandler<FormValues> = (data) => {
    const formName = "Contact Form";
    const clientDetails = {
      name: "Your Name",
      email: "Your Email",
      website: "Link to your website"
    };
    const ccEmails = ["example@domain.co.za"];
    const fields = [
      { name: "First Name", value: data.firstName, isRequired: true },
      { name: "Last Name", value: data.lastName, isRequired: true },
      { name: "Subject", value: data.subject || "", isRequired: false },
      { name: "Message", value: data.message || "", isRequired: false },
      { name: "Email", value: data.Email, isRequired: true },
      { name: "Phone", value: data.phoneNumber || "", isRequired: false }
    ];
  

  return (

    <>
    <Navbar />
    
    <div className= "container  text-center mx-auto">
    <form  className="text-center border border-light p-5" onSubmit={handleSubmit(onSubmit)} action="/" method="post">
      <p className="h4 mb-4">Contact Me</p>
      <div className="from-row mb-4">
        <div className="col">
      <input
        type="text"
        id="firstName"
        className="form-control"
        placeholder="First Name"
        {...register('firstName', { required: true, maxLength: 80 })}
        name="First Name"
        
      />
      {errors.firstName && 'First Name required'}
      </div>

      <div className="col">
      <input
        type="text"
        id="lastName"
        className="form-control"
        placeholder="Last Name"
        {...register('lastName', { required: true, maxLength: 100 })}
        name="Last Name"
        
      />
      {errors.lastName && 'Last Name required'}
      </div>
      </div>

      <input
        type="email"
        id="Email"
        className="form-control md-4"
        placeholder="E-mail"
        {...register('Email', { required: true, maxLength: 80 })}
        name="Email"
        
      />
      {errors.Email && 'Email required'}

      <input 
        type="text"
        id="phone Number"
        className="form-control md-4"
        placeholder="Phone Number (optional)"
        {...register('phoneNumber', { required: false })}
        name="phone Number"
        
        
      />
      {errors.phoneNumber && 'Number required'}

      <textarea id="message" className="form-control md-4" placeholder="Message"
        {...register('message', { required: false, maxLength: 1000 })}
        
        name="message"
      />
      {errors.message && 'Message required'}

      <button className="btn btn-info my-4 btn-block" type="submit">Submit</button>
    </form>
    </div>
    <Footer/>
    </>
    
    
  );
}





 
