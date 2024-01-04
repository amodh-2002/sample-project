import React from 'react';
import { HiArrowNarrowRight } from "react-icons/hi"
import { Link } from "react-scroll"

const Features = ({ logo, sub_title, title, desc, button_name, key }) => {
  const Icon = logo;
  console.log(key)
  return (
    <div className='text-center mx-auto flex flex-col items-center justify-center'>
      <Icon size={55} className='w-[150px]' />
      <h3 className='text-gray-500 my-2'>{sub_title}</h3>
      <h2 className='text-4xl font-bold max-w-[340px] my-2 '>{title}</h2>
      <div className='c w-20 h-1 mx-10'></div>
      <p className='max-w-[230px] text-gray-700 my-4 leading-10'>{desc}</p>
      <div>
        <Link to='work' smooth={true} duration={500}>
          <button className={`group border-2 px-6 py-3 my-2 flex items-center rounded-md ${key === 3 ? 'bg-orange-500 text-white' : 'text-white bg-blue-700'}`}>{button_name}
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3' />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Features;
