import React from 'react'
import { data } from "../Data/Data.js";
import Features from './Features.jsx';


const Main = () => {
  const id = 1
  return (
    <div className='flex items-center h-[100vh] pt-[80px] justify-around'>
      {data.map((item,index) => (
        // console.log(item.id)
        <Features
          key={item.id}
          logo={item.logo}
          sub_title={item.sub_title}
          title={item.title}
          desc={item.desc}
          button_name={item.button_name}
        />
      ))}
    </div>
  );
};
export default Main