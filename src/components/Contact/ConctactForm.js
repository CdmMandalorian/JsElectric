import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form className="contactForm" onSubmit={handleSubmit(onSubmit)}>
      <input className="input-contactForm" type="text" placeholder="Name" {...register("Name", {required: true, maxLength: 30})} />
      <input className="input-contactForm" type="email" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input className="input-contactForm" type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, maxLength: 12})} />
      <input className="input-contactForm" type="text" placeholder="Subject" {...register("Subject", {required: true, maxLength: 75})} />
      <textarea className="text-contactForm" {...register("Message", {required: true, maxLength: 30})} />

      <input className="input-contactButton" type="submit" />
    </form>
  );
}