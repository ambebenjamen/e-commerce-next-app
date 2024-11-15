
'use client'
import NavbarComponent from '@/src/components/navbar/NavbarComponent'
import React, { useState, useRef } from 'react'
import Image from "next/image"
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; // for React, Vue, and Svelte
import emailjs from '@emailjs/browser';

// Page component as default export
const Page = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});

    const validateName = (name) => /^[a-zA-Z\s]+$/.test(name); // Only letters and spaces
    const validateEmail = (email) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email); // Basic email validation
    const validatePhone = (phone) => /^\d{10}$/.test(phone); // Simple 10 digit phone number validation
    const form = useRef();
    const handleSubmit = (e) => {
        const notyf = new Notyf({
            duration: 3000,
            position: {
                x: "right",
                y: "top",
            },
        });

        e.preventDefault();

        const validationErrors = {};

        // Name validation
        if (!name) {
            validationErrors.name = 'Name is required';
        } else if (!validateName(name)) {
            validationErrors.name = 'Name can only contain letters and spaces';
        }

        // Email validation
        if (!email) {
            validationErrors.email = 'Email is required';
        } else if (!validateEmail(email)) {
            validationErrors.email = 'Please enter a valid email address';
        }

        // Phone validation
        if (!phone) {
            validationErrors.phone = 'Phone number is required';
        } else if (!validatePhone(phone)) {
            validationErrors.phone = 'Please enter a valid 10-digit phone number';
        }

        // Message validation
        if (!message) {
            validationErrors.message = 'Message is required';
        }
        if (!subject || subject.length < 3) {
            validationErrors.subject = 'invalid subject';
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // If no validation errors, submit the form
        
        emailjs
        .sendForm('service_2gk6d4c', 'template_n7ckemd', form.current, {
          publicKey: '-rvP0Cne37tYCWaSO',
        })
        .then(
          () => {
            notyf.success('Form submitted successfully');
          },
          (error) => {
            notyf.error('FAILED...', error.text);
            console.log('FAILED...', error.text);
          },
        );
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setSubject('');
        setErrors({});
    };

    return (
        <div>
            <NavbarComponent />
            <div className='p-5'>
                <div className='h-[100%] w-[100%]  flex  justify-center gap-5 mb-10'>
                    <div className='w-[50%] relative rounded-lg overflow-hidden h-[400px] bg-slate-600 flex justify-center items-center '>
                        <Image className='object-cover' src={'/boy.jpg'} alt="contact image" fill objectFit='cover' objectPosition='center' />
                        </div>

                    <form ref={form} onSubmit={handleSubmit} className='w-[50%] h-[100%] flex flex-col justify-between'>
                        <h1 className="text-xl mb-2">Contact us</h1>
                        
                        <div className="flex gap-5 mb-5">
                            <div className="w-[50%]">
                                <input
                                   name='name'
                                    className={`w-[100%] p-4 bg-slate-900 outline-none text-white ${errors.name ? 'border-2 border-red-500' : ''}`}
                                    value={name}
                                    type="text"
                                    placeholder='Name'
                                    onChange={(e) => setName(e.target.value)}
                                />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                            </div>
                            <div className="w-[50%]">
                                <input
                                    name='email'
                                    className={`w-[100%] p-4 bg-slate-900 outline-none text-white ${errors.email ? 'border-2 border-red-500' : ''}`}
                                    value={email}
                                    type="email"
                                    placeholder='Email'
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                            </div>
                        </div>

                        <div className="flex gap-5 mb-5">
                            <div className="w-[50%]">
                                <input
                                   name='phone'
                                    className={`w-[100%] p-4 bg-slate-900 outline-none text-white ${errors.phone ? 'border-2 border-red-500' : ''}`}
                                    value={phone}
                                    type="text"
                                    placeholder='Phone'
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                            </div>
                            <div className="w-[50%]">
                                <input
                                    name='subject'
                                    className={`w-[100%] p-4 bg-slate-900 outline-none text-white ${errors.subject ? 'border-2 border-red-500' : ''}`}
                                    value={subject}
                                    type="text"
                                    placeholder='Subject (optional)'
                                    onChange={(e) => setSubject(e.target.value)}
                                />
                                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                            </div>
                        </div>

                        <div className="w-[100%]">
                            <textarea
                                name='message'
                                className={`w-[100%] h-[200px] px-3 py-3 bg-slate-900 outline-none text-white ${errors.message ? 'border-2 border-red-500' : ''}`}
                                placeholder='Message'
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                        </div>

                        {/* The submit button is placed at the bottom of the form and always visible */}
                        <button type='submit' className="w-[100%] bg-[#2955BB] p-3 mt-5">Send message</button>
                    </form>
                </div>

                <div className='h-[50vh] w-[100%] bg-lime-800'>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250.09042906692608!2d9.695180069064664!3d4.042658402349319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1061138910bc3aff%3A0x7b5d5c6ad0bcf7f!2sSeven%20Advanced%20Academy!5e0!3m2!1sen!2srw!4v1731057270390!5m2!1sen!2srw"
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </div>
    );
};
// Ensure the component is default-exported
export default Page;

