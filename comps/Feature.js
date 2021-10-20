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
    <section className='bg-indigo-900 h-screen flex flex-col justify-center items-center'>
      <h2 className='text-center text-2xl text-white'> Hello this is dog</h2>
      <FeatureBox features={features} />
    </section>
  );
};

export default Feature;

// const FeatureBox = (props) => {
//   return (
//     <>
//       {props.features.map((feature, key) =>
//         feature.id % 2 !== 0 ? (
//           <section key={key} className='text-white'>
//             <div className='container bg-indigo-900 mx-auto flex px-24 py-24 md:flex-row flex-col items-center'>
//               <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10 '>
//                 <img
//                   className='object-cover object-center rounded'
//                   alt='hero'
//                   src='https://dummyimage.com/600x500/edf2f7/0f1631'
//                 />
//               </div>
//               {/* <div className='lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center'> */}
//               <GlassCard>
//                 <div className='lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center p-10'>
//                   <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-white '>
//                     {feature.title}
//                   </h1>
//                   <p className='mb-8 leading-relaxed'>{feature.desc}</p>
//                   <div className='flex justify-center'>
//                     <button className='border-2 border-black  text-black rounded-sm font-bold py-4 px-6 mr-2 flex items-center hover:bg-white hover:text-indigo-500 transition ease-in-out duration-700'>
//                       Button
//                     </button>
//                   </div>
//                 </div>
//               </GlassCard>
//               {/* </div> */}
//             </div>
//           </section>
//         ) : (
//           <section key={key} className='text-black'>
//             <div className='container bg-white mx-auto flex px-24 py-24 md:flex-row flex-col items-center'>
//               <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
//                 <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-black'>
//                   {feature.title}
//                 </h1>
//                 <p className='mb-8 leading-relaxed'>{feature.desc}</p>
//                 <div className='flex justify-center'>
//                   <button className='border-2 border-black  text-black rounded-sm font-bold py-4 px-6 mr-2 flex items-center hover:bg-white hover:text-indigo-500 transition ease-in-out duration-700'>
//                     Button
//                   </button>
//                 </div>
//               </div>
//               <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
//                 <img
//                   className='object-cover object-center rounded'
//                   alt='hero'
//                   src='https://dummyimage.com/600x500/edf2f7/0f1631'
//                 />
//               </div>
//             </div>
//           </section>
//         )
//       )}
//     </>
//   );
// };
