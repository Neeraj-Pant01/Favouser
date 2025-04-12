import React, { useEffect, useState } from 'react';
import {cat, categories} from "../../data"
import "../../pages/homepage/home.css"
import { useNavigate } from 'react-router-dom';
import "./cat.css"

const Categories = () => {
  const [move, setMove] = useState(0)
  const navigate = useNavigate()

  return (
    <>
    <div className='flex overflow-x-scroll overflow-hidden hd md:justify-around md:hidden'>
      {categories.map((c,i) => {
        return (
          <div key={i} className='flex flex-col justify-between items-center cursor-pointer CAT-sc' style={{ transition:"all linear " }} onClick={()=>navigate(`/products`)}>
            <img src={c?.image} className='h-40' />
            <b className='mt-4'>{c.title}</b>
          </div>
        );
      })}
    </div>
    <div className='CATEGORIES'>
      {
        cat.map((c)=>{
          return (
            <div className='cat-item'>
              <h1 className='absolute top-0 w-full text-center text-3xl font-extrabold uppercase text-[white]'>{c.title}</h1>
              <img src={c.image} className='cat-item-img'/>
              <div className='layer'>
                <button className='btn text-[white] hover:bg-[#555252] transition-colors' onClick={()=>navigate(`/products?cat=${c.title}`)}>shop now</button>
                <h1 className='w-full text-center text-2xl text-[white] font-bold desc'>{c?.desc}</h1>
              </div>
            </div>
          )
        })
      }
    </div>
    </>
  );
};

export default Categories;
