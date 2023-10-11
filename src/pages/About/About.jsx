import React from 'react';
import about from '../../assets/about.webp';
import about1 from '../../assets/about1.jpeg';
import about2 from '../../assets/about2.jpeg';
import about3 from '../../assets/about3.jpeg';
import about4 from '../../assets/about5.webp';
import about5 from '../../assets/hotel-2.webp';
import about6 from '../../assets/hotel-4.jpg';
import about7 from '../../assets/hotel-5.jpg';
import about8 from '../../assets/hotel-6.jpeg';
import about9 from '../../assets/luxary.jpg';
import client from '../../assets/client photo.jpg';
import client1 from '../../assets/client photo2.jpeg';
import client2 from '../../assets/client photo3.jpg';
import {AiTwotoneStar} from 'react-icons/ai';


function About(props) {
    return (
   <div>
   <div className='mb-6'>
   <h2 className='text-center text-2xl mb-6'>Luxurious Living</h2>
    <p className='text-center'>The hotel’s luxurious interior bears the unmistakable stamp of Gehry’s design. Tilted walls, zigzag windows, cathedral-height <br /> ceilings and a host of bespoke details create the impression of accommodation as a work of art in its 61 rooms & suites.</p>
   </div>
   <div className='grid md:grid-cols-2'>
  <div className='max-auto text-center mt-32'>
  <h1 className='text-3xl mb-6'>Rooms & Suites</h1>
    <p className=' mb-6'>Staying at the Hotel Marqués de Riscal is an experience unlike any other, where Frank O. Gehry’s avant-garde, neoclassical style permeates throughout providing splendour, joy, and surprise around every corner.</p>
    <button className="btn btn-outline">Learn More</button>
  </div>
    <div className='mt-2 rounded-sm mb-4'>
        <img src={about} alt="" style={{width:"600px"}} />
    </div>
   </div>
   
   <h1 className='text-center text-2xl mt-4 mb-5'>Our Gallary View</h1>

   <div className="carousel w-full">
   
  <div id="slide1" className="carousel-item relative w-full">
    <img src={about1}className="w-full"  style={{height:"400px"}} />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={about2} className="w-full" style={{height:"400px"}} />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={about3} className="w-full" style={{height:"400px"}} />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={about4}className="w-full" style={{height:"400px"}} />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img src={about5}className="w-full" style={{height:"400px"}} />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img src={about6}className="w-full" style={{height:"400px"}} />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img src={about7}className="w-full" style={{height:"400px"}} />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img src={about8}className="w-full" style={{height:"400px"}} />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img src={about9}className="w-full" style={{height:"400px"}} />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
<h1 className='text-center text-2xl mb-5 mt-5 text-green-500'>Client Revew </h1>
<div className='grid md:grid-cols-3 '>
<div className="card w-96 bg-base-100 shadow-xl mt-6 mb-7">
  <figure className="px-10 pt-10">
    <img src={client} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Joshef</h2>
    <p>The customer service was outstanding, and the product was exactly what I was looking for.” “I was so pleased with the service I received from this business. They went above and beyond to help me find the perfect item.” “I was very impressed with the quality of the product I received.</p>
    <div className='flex text-yellow-400'>
  <AiTwotoneStar></AiTwotoneStar>
    <AiTwotoneStar></AiTwotoneStar>
    <AiTwotoneStar></AiTwotoneStar>
    <AiTwotoneStar></AiTwotoneStar>
  </div>
    
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl mt-6 mb-7">
  <figure className="px-10 pt-10">
    <img src={client1} alt="Shoes" className="rounded-xl"  />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Jamsed </h2>
    <p>
I love that I could see into her mindset and read exactly what she was feeling when she thought out situations. Her thoughts flowed well and moved the book along very quickly. Cassandra's narrative voice is wonderful. She is serious at times, but also very witty, which makes for an engaging read.</p>
    <div className='flex text-yellow-400'>
  <AiTwotoneStar></AiTwotoneStar>
    <AiTwotoneStar></AiTwotoneStar>
    <AiTwotoneStar></AiTwotoneStar>
    <AiTwotoneStar></AiTwotoneStar>
  </div>
    
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl mt-6 mb-7">
  <figure className="px-10 pt-10">
    <img src={client2} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Jon due</h2>
    <p>The overall purpose of a review article should be to provide a valuable, solid, informative, critical summary of a well-defined topic/area to the reader</p>
  <div className='flex text-yellow-400'>
  <AiTwotoneStar></AiTwotoneStar>
    <AiTwotoneStar></AiTwotoneStar>
    <AiTwotoneStar></AiTwotoneStar>
    <AiTwotoneStar></AiTwotoneStar>
  </div>
  
  </div>
</div>
</div>
   </div>
        
    );
}

export default About;