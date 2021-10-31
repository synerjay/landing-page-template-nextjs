import React from 'react';

const TestimonialCard = (props) => {
  return (
    <>
      {props.testimonials.map((testimonial, key) => (
        <div
          key={key}
          className='w-full mx-auto rounded-lg TestiCard border border-gray-200 p-5 text-gray-200 font-light mb-6'
        >
          <div className='w-full flex mb-4 items-center'>
            <div className='overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200'>
              <img src={testimonial.img} alt='' />
            </div>
            <div className='flex-grow pl-3'>
              <h6 className='font-bold text-sm uppercase text-gray-200'>
                {testimonial.name}
              </h6>
              <backqoutes class='font-normal text-white text-sm tracking-wider'>
                {testimonial.title}
              </backqoutes>
            </div>
          </div>
          <div className='w-full'>
            <p className='text-sm leading-tight'>
              <span className='text-lg leading-none italic font-bold text-gray-400 mr-1'>
                "
              </span>
              {testimonial.quote}
              <span className='text-lg leading-none italic font-bold text-gray-400 ml-1'>
                "
              </span>
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

const Testimonials = () => {
  const columnOne = [
    {
      id: 1,
      img: 'https://i.pravatar.cc/100?img=1',
      name: 'Kenzie Edgar',
      title: 'CEO Workcation',
      quote:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maxime, magni veritatis maiores vel nisi ab. Voluptatum ipsam, fuga eligendi sint quia ipsa cum corporis numquam nostrum illum facere. Odit.',
      link: '/',
    },
    {
      id: 2,
      img: 'https://i.pravatar.cc/100?img=2',
      name: 'Stevie Tifft',
      title: 'CEO Workcation',
      quote:
        'Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Dolore quod necessitatibus, labore sapiente, est, dignissimos ullam error ipsam sint quam tempora vel.',
      link: '/',
    },
    {
      id: 3,
      img: 'https://i.pravatar.cc/100?img=3',
      name: 'Tommie Ewart.',
      title: 'CEO Workcation',
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, obcaecati ullam excepturi dicta error deleniti sequi.',
      link: '/',
    },
  ];

  const columnTwo = [
    {
      id: 3,
      img: 'https://i.pravatar.cc/100?img=3',
      name: 'Tommie Ewart.',
      title: 'CEO Workcation',
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, obcaecati ullam excepturi dicta error deleniti sequi.',
      link: '/',
    },
    {
      id: 4,
      img: 'https://i.pravatar.cc/100?img=4',
      name: 'Charlie Howse.',
      title: 'CEO Workcation',
      quote:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maxime, magni veritatis maiores vel nisi ab. Voluptatum ipsam, fuga eligendi sint quia ipsa cum corporis numquam nostrum illum facere. Odit.',
      link: '/',
    },
    {
      id: 5,
      img: 'https://i.pravatar.cc/100?img=2',
      name: 'Nevada Herbertson',
      title: 'CEO Workcation',
      quote:
        'Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Dolore quod necessitatibus, labore sapiente, est, dignissimos ullam error ipsam sint quam tempora vel.',
      link: '/',
    },
  ];

  return (
    <div className='Testimonials pt-16 min-w-screen min-h-screen flex items-center justify-center py-2 px-24'>
      <div className='w-full px-5 py-10 md:py-5 text-gray-200'>
        <div className='w-full max-w-6xl mx-auto'>
          <div className='text-center max-w-xl mx-auto'>
            <h1 className='text-6xl md:text-5xl font-bold mb-5 text-gray-200'>
              What people are saying.
            </h1>
            <h3 className='text-xl mb-5 font-light'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
          </div>
          <div className='-mx-3 md:flex items-start'>
            <div className='px-3 md:w-1/3'>
              <TestimonialCard testimonials={columnOne} />
            </div>
            <div className='px-3 md:w-1/3'>
              <TestimonialCard testimonials={columnTwo} />
            </div>
            <div className='px-3 md:w-1/3'>
              <div className='w-full mx-auto rounded-lg TestiCard border border-gray-200 p-5 text-gray-200 font-light mb-6'>
                <div className='w-full flex mb-4 items-center'>
                  <div className='overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200'>
                    <img src='https://i.pravatar.cc/100?img=5' alt='' />
                  </div>
                  <div className='flex-grow pl-3'>
                    <h6 className='font-bold text-sm uppercase text-gray-200'>
                      Nevada Herbertson.
                    </h6>
                  </div>
                </div>
                <div className='w-full'>
                  <p className='text-sm leading-tight'>
                    <span className='text-lg leading-none italic font-bold text-gray-400 mr-1'>
                      "
                    </span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nobis, voluptatem porro obcaecati dicta, quibusdam sunt
                    ipsum, laboriosam nostrum facere exercitationem pariatur
                    deserunt tempora molestiae assumenda nesciunt alias eius?
                    Illo, autem!
                    <span className='text-lg leading-none italic font-bold text-gray-400 ml-1'>
                      "
                    </span>
                  </p>
                </div>
              </div>
              <div className='w-full mx-auto rounded-lg TestiCard border border-gray-200 p-5 text-gray-200 font-light mb-6'>
                <div className='w-full flex mb-4 items-center'>
                  <div className='overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200'>
                    <img src='https://i.pravatar.cc/100?img=6' alt='' />
                  </div>
                  <div className='flex-grow pl-3'>
                    <h6 className='font-bold text-sm uppercase text-gray-200'>
                      Kris Stanton.
                    </h6>
                    <backqoutes class='font-normal text-white text-sm tracking-wider'>
                      CEO Workcation
                    </backqoutes>
                  </div>
                </div>
                <div className='w-full'>
                  <p className='text-sm leading-tight'>
                    <span className='text-lg leading-none italic font-bold text-gray-400 mr-1'>
                      "
                    </span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatem iusto, explicabo, cupiditate quas totam!
                    <span className='text-lg leading-none italic font-bold text-gray-400 ml-1'>
                      "
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/* End of Column 3 */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
