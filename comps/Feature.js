import React from 'react';
import GlassCard from './GlassCard';

const FeatureBox = (props) => {
  return (
    <div className='w-full md:w-auto h-auto flex flex-col md:grid md:grid-cols-3 gap-1 pt-5 px-0 md:px-28'>
      {props.features.map((feature, key) => (
        <GlassCard key={key}>
          <div className='lg:flex-grow w-full md:w-auto flex flex-col gap-y-3 md:items-start md:text-left items-center text-center p-4'>
            <div
              className='h-6 w-6'
              dangerouslySetInnerHTML={{ __html: feature.svg }}
            />
            <h1 className='text-md font-bold text-white '>{feature.title}</h1>
            <p className='mb-0 text-white leading-relaxed text-sm'>
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
      svg: '<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>',
      title: 'Feature 2',
      desc: 'Sed perspiciatis unde omnis natus error voluptatem accusantium doloremque laudantium totam',
      link: '/',
    },
    {
      id: 3,
      svg: '<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>',
      title: 'Feature 3',
      desc: 'It has survived not only five centuries, but also the leap into electronic typesetting.',
      link: '/',
    },
    {
      id: 4,
      svg: '<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" /></svg>',
      title: 'Feature 4',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, veritatis consectetur iusto.',
      link: '/',
    },
    {
      id: 5,
      svg: '<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" /><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" /></svg>',
      title: 'Feature 5',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, veritatis consectetur iusto.',
      link: '/',
    },
    {
      id: 6,
      svg: '<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" /></svg>',
      title: 'Feature 6',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, veritatis consectetur iusto.',
      link: '/',
    },
  ];
  return (
    <section className='bg-indigo-900 h-auto md:h-screen text-white flex flex-col gap-y-2 justify-center items-center p-3 pt-10 md:pt-0'>
      <h2 className='text-center text-2xl md:text-4xl font-bold text-white'>
        Highlight your favourite features!
      </h2>
      <p className='text-md'>Describe your product's features here</p>
      <FeatureBox features={features} />
    </section>
  );
};

export default Feature;
