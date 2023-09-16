import Link from 'next/link';
import React, { ReactElement, ReactNode } from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config';

const fullConfig = resolveConfig(tailwindConfig);

interface LoginProps {
  child: ReactNode;
}

const Login = ({ child }: LoginProps) => {
  const appearance = {
    variables: { colorPrimary: fullConfig.theme?.colors?.leafyGreen },
    elements: { rootBox: 'mx-auto' },
  };
  const routing = 'virtual';

  const childWithAppearance = React.cloneElement(child as ReactElement, {
    appearance,
    routing,
  });
  return (
    <div className='relative z-10 flex h-screen w-screen overflow-hidden lg:grid lg:grid-cols-12'>
      <div
        className='h-screen flex-1 overflow-hidden lg:col-span-6 lg:block xl:col-span-7'
        style={{
          backgroundImage: "url('./assets/images/vegetables.jpg')",
          backgroundPositionX: '75%',
          backgroundSize: 'cover',
        }}
      ></div>

      <div className='absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform px-8 py-12 lg:relative lg:col-span-6 xl:col-span-5 '>
        <div className='mb-8'>{childWithAppearance}</div>
        <Link
          href='/'
          className='block text-center text-sm text-white underline lg:text-gray-500'
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Login;
