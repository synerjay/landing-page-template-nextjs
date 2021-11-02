import React from 'react';
import GlassCard from './GlassCard';

const FeatureBox = (props) => {
  return (
    <div className='w-auto h-auto grid grid-cols-3 gap-1 pt-5 px-28'>
      {props.features.map((feature, key) => (
        <GlassCard key={key}>
          <div className='lg:flex-grow w-auto flex flex-col md:items-start md:text-left items-center text-center p-4'>
            <div
              className='h-6 w-6'
              dangerouslySetInnerHTML={{ __html: feature.svg }}
            />
            <h1 className='text-lg font-medium text-white '>{feature.title}</h1>
            <p className='mb-8 text-white leading-relaxed text-sm'>
              {feature.desc}
            </p>
          </div>
        </GlassCard>
      ))}
    </div>
  );
};

const Feature = () => {
  const features = [
    {
      id: 1,
      svg: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clip-rule="evenodd" /></svg>',
      title: 'Feature 1',
      desc: 'Central Saint Martins graduate Jessan Macatangay incorporated deconstructed chairs in',
      link: '/',
    },
    {
      id: 2,
      svg: '<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg>',
      title: 'Feature 2',
      desc: 'Sed perspiciatis unde omnis natus error voluptatem accusantium doloremque laudantium totam',
      link: '/',
    },
    {
      id: 3,
      svg: '<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg>',
      title: 'Feature 3',
      desc: 'It has survived not only five centuries, but also the leap into electronic typesetting.',
      link: '/',
    },
    {
      id: 4,
      svg: '<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg>',
      title: 'Feature 4',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, veritatis consectetur iusto.',
      link: '/',
    },
    {
      id: 5,
      svg: '<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg>',
      title: 'Feature 4',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, veritatis consectetur iusto.',
      link: '/',
    },
    {
      id: 6,
      svg: '<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg>',
      title: 'Feature 4',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, veritatis consectetur iusto.',
      link: '/',
    },
  ];
  return (
    <section className='bg-indigo-900 h-screen text-white flex flex-col gap-y-2 justify-center items-center p-3 pt-10'>
      <h2 className='text-center text-4xl text-white'>
        Show off your features here
      </h2>
      <p className='text-md'>Describe your product's features here</p>
      <FeatureBox features={features} />
    </section>
  );
};

export default Feature;
