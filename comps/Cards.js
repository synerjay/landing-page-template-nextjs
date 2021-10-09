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
    <section class=''>
      <div class='container px-5 py-24 mx-auto flex flex-wrap'>
        <div class='flex flex-col text-center w-full mb-20'>
          <h2 class='text-xs text-black tracking-widest font-medium title-font mb-1'>
            THIS IS A USEFUL SMALL TEXT
          </h2>
          <h1 class='sm:text-3xl text-2xl font-medium title-font text-black'>
            Tell them something about this cards.
          </h1>
        </div>
        <div class='flex flex-wrap -m-4'>
          {services.map((service, key) => (
            <div class='p-4 md:w-1/3' key={key}>
              <div class='flex rounded-lg h-full bg-gray-200 p-8 flex-col'>
                <div class='flex items-center mb-3'>
                  <h2 class='text-gray-700 text-lg title-font font-medium'>
                    {service.title}
                  </h2>
                </div>
                <div class='flex-grow'>
                  <p class='leading-relaxed text-gray-700 font-medium'>
                    {service.desc}
                  </p>
                  <a class='mt-3 text-gray-700 inline-flex items-center font-medium'>
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
