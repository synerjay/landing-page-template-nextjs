import React from 'react';

const TourBox = (props) => {
  return (
    <>
      {props.tours.map((tour, key) => (
        <div
          key={key}
          className='flex flex-col items-start mb-16 text-left lg:flex-grow md:w-full lg:pr-24 md:pr-16 md:mb-0'
        >
          <h2 className='mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font'>
            {' '}
            Step {tour.id}
          </h2>
          <h1 className='mb-8 text-2xl font-black tracking-tighter text-black md:text-5xl title-font'>
            {tour.title}
          </h1>
          <p className='mb-8 text-base leading-relaxed text-left text-blueGray-600 '>
            {tour.desc}
          </p>

          <img
            src={tour.img}
            alt=''
            className='img-fluid mx-auto d-block rounded-xl shadow-lg'
          />
        </div>
      ))}
    </>
  );
};

const Tour = () => {
  const tours = [
    {
      id: 1,
      img: '/images/landingimage.png',
      title: 'Dress to Impress',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nihil, modi assumenda necessitatibus voluptatibus cum. Accusamus animi ipsum dicta accusantium rem repellat amet. Aspernatur possimus quae tenetur animi aut quia.',
      link: '/',
    },
    {
      id: 2,
      img: '/images/landingimage.png',
      title: 'Make the Best Impression',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nihil, modi assumenda necessitatibus voluptatibus cum. Accusamus animi ipsum dicta accusantium rem repellat amet. Aspernatur possimus quae tenetur animi aut quia.',
      link: '/',
    },
    {
      id: 3,
      img: '/images/landingimage.png',
      title: 'Walk Through With Elegance',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nihil, modi assumenda necessitatibus voluptatibus cum. Accusamus animi ipsum dicta accusantium rem repellat amet. Aspernatur possimus quae tenetur animi aut quia.',
      link: '/',
    },
  ];
  return (
    <section className='text-blueGray-700 bg-white'>
      <div className='container flex items-center gap-y-16 px-5 py-10 mx-auto flex-col md:px-36 '>
        <TourBox tours={tours} />
      </div>
    </section>
  );
};

export default Tour;
