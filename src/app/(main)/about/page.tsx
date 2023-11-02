import Link from 'next/link';
import React from 'react';

const About = async () => {
  return (
    <section className='mx-auto max-w-3xl px-6'>
      <div className='pt-24'>
        <h1 className='pb-8 text-center text-5xl'>About Us</h1>
        Welcome to Eat in Season - Your Garden&apos;s Culinary Companion! Here,
        we believe that the true magic of gardening lies not only in nurturing
        vibrant greenery but also in savoring the delectable fruits of your
        labor. Our journey began with a simple idea - to celebrate the joy of
        gardening by providing an essential tool for every gardener&apos;s
        kitchen: delicious recipes to make the most of your homegrown produce.
        <h2 className='py-4 text-left text-2xl font-bold'>Our Story</h2>
        Founded by an avid gardener for fellow green thumbs, Eat in Season is
        more than just a website; it&apos;s a passion project born from the love
        of cultivating our own gardens. Our team shares a deep connection with
        the soil, the seasons, and the satisfaction of growing our own fruits
        and vegetables. We understand the excitement of harvesting your own
        fresh produce, whether it&apos;s crisp cucumbers, juicy tomatoes, or
        fragrant herbs. However, we also recognize the challenge of finding
        creative and mouthwatering recipes to transform your garden&apos;s
        bounty into memorable meals.
        <h2 className='py-4 text-left text-2xl font-bold '>Our Mission</h2>
        Our mission is simple: to help gardeners and food enthusiasts alike
        discover the endless culinary possibilities hidden within their gardens.
        We&apos;re dedicated to empowering you to make the most of your
        homegrown harvest, whether you&apos;re a seasoned gardener or just
        starting your journey. With Eat in Season, you&apos;ll unlock a world of
        flavors right in your backyard.
        <h2 className='py-4 text-left text-2xl font-bold'>What We Offer</h2>
        Inspiring Recipes: Our website is a treasure trove of recipes
        specifically designed to showcase your garden&apos;s finest. From savory
        dishes to sweet treats, our collection covers a wide range of cuisines
        and cooking styles. You&apos;ll find something to suit every palate and
        every season.
        <br />
        Join us in celebrating the joys of gardening and the pleasure of
        savoring your homegrown ingredients. Whether you have a green thumb or
        are just starting your gardening adventure, Eat in Season is here to
        help you turn your garden into a culinary masterpiece. Start exploring,
        start growing, and start cooking with us. Welcome to the Eat in Season
        family - where your garden&apos;s harvest becomes a feast for the
        senses!
      </div>
      <h2 className='py-4 text-left text-2xl font-bold'>Attributions</h2>
      <ul className='pb-10'>
        <li>
          Vegetable vectors from{' '}
          <a
            className='text-leafyGreen'
            href='https://www.freevector.com/vegetables'
            target='_blank'
          >
            FreeVector.com
          </a>
        </li>
        <li>
          Heart vector by BomSymbols from{' '}
          <a
            className='text-leafyGreen'
            href='https://thenounproject.com/'
            target='_blank'
          >
            Noun Project
          </a>
        </li>
        <li>
          Vegetable basket photo by congerdesign from
          <a
            className='text-leafyGreen'
            href='https://pixabay.com/photos/vegetables-basket-vegetable-basket-752153/'
            target='_blank'
          >
            Pixabay
          </a>
        </li>
        <li>
          Vegetables on the table photo by Lauren Heaton from{' '}
          <a
            className='text-leafyGreen'
            href='https://www.pexels.com/photo/close-up-shot-of-tomatoes-and-peppers-on-a-wooden-surface-8633675/'
            target='_blank'
          >
            Pexels
          </a>
        </li>
        <li>
          Vegetables by Maria Kislitsina from{' '}
          <a
            href='https://thenounproject.com/browse/icons/term/vegetables/'
            target='_blank'
            title='vegetables Icons'
          >
            Noun Project
          </a>{' '}
          (CC BY 3.0)
        </li>
      </ul>
    </section>
  );
};

export default About;
