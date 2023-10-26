import { useMemo } from 'react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const LoadingAnimation = () => {
  const svgPaths = useMemo(
    () => [
      './assets/svg/pepper.svg',
      './assets/svg/tomato.svg',
      './assets/svg/eggplant.svg',
    ],
    []
  );

  const [visibleSVGIndex, setVisibleSVGIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleSVGIndex((prevIndex) => {
        if (prevIndex === svgPaths.length - 1) {
          return 0; // Start over if at the end of the array
        }
        return prevIndex + 1;
      });
    }, 500); // Adjust the delay as needed

    return () => clearInterval(timer);
  }, [svgPaths]);

  return (
    <div className='flex h-72 flex-col items-center'>
      {svgPaths.map((path, index) => (
        <div
          key={index}
          className={`absolute transform ${
            visibleSVGIndex === index ? 'opacity-90' : 'opacity-0'
          } transition-opacity duration-100 ease-in`}
        >
          <Image
            src={path}
            alt={`SVG ${index}`}
            width={100} // Set the desired width
            height={100} // Set the desired height
          />
        </div>
      ))}
    </div>
  );
};

export default LoadingAnimation;
