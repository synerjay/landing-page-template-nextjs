import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
  const router = useRouter(); // routes the use to another page

  // useEffect(() => {
  //   setTimeout(() => {
  //     router.push('/');
  //   }, 3000);
  // }, []);

  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center'>
      <div className='flex flex-col justify-center items-center -mt-24'>
        <h1 className='text-3xl'>Oops...</h1>
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
