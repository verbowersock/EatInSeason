'use client';
import React, { useState } from 'react';

const ContactForm = () => {
  const access_key = process.env.NEXT_PUBLIC_EMAIL_ACCESS_KEY;

  const [result, setResult] = React.useState('');

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.target as HTMLFormElement);

    if (access_key) {
      formData.append('access_key', access_key);
    }

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      setResult(`Email sent successfully! We will be in touch soon.`);
    } else {
      setResult(`Something went wrong! Please try again.`);
    }
  };

  return (
    <>
      <form onSubmit={onSubmit} className='m-10 flex flex-col bg-white'>
        <input type='hidden' name='access_key' value={access_key}></input>
        <input
          type='hidden'
          name='subject'
          value='New Submission from Eat In Season contact form'
        ></input>
        <input type='checkbox' name='botcheck' id='' className='hidden'></input>
        <div className='mb-4'>
          <label className='label-form' htmlFor='name'>
            Name
          </label>
          <input
            id='name'
            type='text'
            name='name'
            className='input-form'
            required
            minLength={3}
            maxLength={200}
            placeholder='Your name'
          />
        </div>

        <div className='mb-4'>
          <label className='label-form' htmlFor='email'>
            Email
          </label>
          <input
            id='email'
            type='email'
            name='email'
            className='input-form'
            required
            minLength={2}
            maxLength={200}
            placeholder='Your email address'
          />
        </div>

        <div className='mb-4'>
          <label className='label-form' htmlFor='message'>
            Message
          </label>
          <textarea
            id='message'
            name='message'
            className='input-form'
            required
            minLength={10}
            maxLength={1000}
            placeholder='Your message'
          />
        </div>
        <button
          type='submit'
          className='self-center rounded-md  bg-lime-900 p-4 text-lg text-white duration-300 ease-in-out hover:scale-110 hover:transform'
        >
          Send Message
        </button>
      </form>
      {result !== '' && <div className='py-4 text-center'>{result}</div>}
    </>
  );
};

export default ContactForm;
