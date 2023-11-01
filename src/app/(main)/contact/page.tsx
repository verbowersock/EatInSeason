import ContactForm from '@/components/Contact';
import React from 'react';

const ContactPage = () => {
  return (
    <div className='m-auto mt-10 flex w-11/12 flex-col items-center'>
      <h2 className='m-auto mb-10 text-3xl'>Contact Us</h2>
      <p>Questions? Concerns? Suggestions? Drop us a line!</p>
      <div className='mt-10 w-full rounded-3xl border-2 border-gray-100 shadow-xl md:w-2/4'>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
