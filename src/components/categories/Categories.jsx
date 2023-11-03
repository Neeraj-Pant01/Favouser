import React, { useEffect, useState } from 'react';
import {categories} from "../../data"
import "../../pages/homepage/home.css"
import { useNavigate } from 'react-router-dom';

const Categories = () => {
  const [move, setMove] = useState(0)
  const navigate = useNavigate()

  return (
    <div className='flex overflow-x-scroll overflow-hidden hd'>
      {categories.map((c,i) => {
        return (
          <div key={i} className='flex w-80 flex-col justify-between items-center cursor-pointer' style={{ minWidth: '45%', transition:"all linear " }} onClick={()=>navigate(`/products`)}>
            <img src={c?.image} className='h-40' />
            <b className='mt-4'>{c.title}</b>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
