import Link from 'next/link';
import React from 'react';

const About = async () => {
  return (
    <section className='container mx-auto'>
      <div className='pt-24'>
        <Link
          href='/'
          className='nav_button rounded-md bg-leafyGreen px-4 text-black duration-300 ease-in-out hover:scale-110 hover:transform'
        >
          hello
        </Link>
      </div>
    </section>
  );
};

export default About;
