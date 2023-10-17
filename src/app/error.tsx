'use client'; // Error components must be Client Components

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className='m-auto flex h-screen items-center justify-center'>
      <div className='flex w-auto flex-col items-center rounded-lg border-2 border-gray-200 p-8 shadow-xl'>
        <h1 className='mb-4  justify-center text-2xl'>
          Sorry, something went wrong!
        </h1>
        <p>{error.message}</p>

        <button
          className='mt-4 rounded-md bg-leafyGreen p-2 text-white'
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </button>
      </div>
    </div>
  );
}
