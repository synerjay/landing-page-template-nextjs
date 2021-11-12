import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
  const router = useRouter(); // routes the use to another page

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []);

  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center'>
      <div className='flex flex-col justify-center items-center -mt-24'>
        <h1 className='flex items-center justify-center text-5xl mb-7'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-10 w-10'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636'
            />
          </svg>
          Oops...
        </h1>
        <h2>That page cannot be found</h2>
        <p>
          Go back to the{' '}
          <Link href='/'>
            <a>Homepage</a>
          </Link>{' '}
        </p>
      </div>
    </div>
  );
};

export default NotFound;
