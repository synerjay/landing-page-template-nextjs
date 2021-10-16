import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Lorem Ipsum',
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      title: 'Lorem Ipsum',
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      title: 'Lorem Ipsum',
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
  ];
  return (
    <section className='bg-gray-600'>
      <div className='container px-24 py-24 mx-auto flex flex-wrap'>
        <div className='flex flex-col text-center w-full mb-20'>
          <h2 className='text-xs text-black tracking-widest font-medium title-font mb-1'>
            THIS IS A USEFUL SMALL TEXT
          </h2>
          <h1 className='sm:text-3xl text-2xl font-medium title-font text-black'>
            Tell them something about this cards.
          </h1>
        </div>
        <div className='flex flex-wrap -m-4'>
          {services.map((service, key) => (
            <div className='p-4 md:w-1/3' key={key}>
              <div className='flex rounded-lg h-full bg-gray-200 p-8 flex-col'>
                <div className='flex items-center mb-3'>
                  <h2 className='text-gray-700 text-lg title-font font-medium'>
                    {service.title}
                  </h2>
                </div>
                <div className='flex-grow'>
                  <p className='leading-relaxed text-gray-700 font-medium'>
                    {service.desc}
                  </p>
                  <a className='mt-3 text-gray-700 inline-flex items-center font-medium'>
                    Learn More »
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
