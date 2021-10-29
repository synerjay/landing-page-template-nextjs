import React from 'react';
import GlassCard from './GlassCard';

const FeatureBox = (props) => {
  return (
    <div className='w-auto h-auto grid grid-cols-3 gap-1 pt-5 px-28'>
      {props.features.map((feature, key) => (
        <GlassCard key={key}>
          <div className='lg:flex-grow w-auto flex flex-col md:items-start md:text-left items-center text-center p-4'>
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
      img: './images/45.png',
      title: 'Feature 1',
      desc: 'Central Saint Martins graduate Jessan Macatangay incorporated deconstructed chairs into his striking fashion collection, to symbolise how people carry the weight of personal struggles. More.',
      link: '/',
    },
    {
      id: 2,
      img: './images/Group Members.png',
      title: 'Feature 2',
      desc: 'Sed perspiciatis unde omnis natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo excepturi sint occaecati cupiditate architecto.',
      link: '/',
    },
    {
      id: 3,
      img: './images/45.png',
      title: 'Feature 3',
      desc: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      link: '/',
    },
    {
      id: 4,
      img: './images/45.png',
      title: 'Feature 4',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, veritatis consectetur iusto, dignissimos quae quos dolorem perferendis recusandae alias sed officiis vel molestiae quibusdam ab dolore, nostrum ducimus fuga harum!',
      link: '/',
    },
    {
      id: 5,
      img: './images/45.png',
      title: 'Feature 4',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, veritatis consectetur iusto, dignissimos quae quos dolorem perferendis recusandae alias sed officiis vel molestiae quibusdam ab dolore, nostrum ducimus fuga harum!',
      link: '/',
    },
    {
      id: 6,
      img: './images/45.png',
      title: 'Feature 4',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, veritatis consectetur iusto, dignissimos quae quos dolorem perferendis recusandae alias sed officiis vel molestiae quibusdam ab dolore, nostrum ducimus fuga harum!',
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
