import React from "react";
import Gallary from '../../assets/hotel-2.webp';
import Gallary1 from '../../assets/hotel-3.avif';
import Gallary2 from '../../assets/hotel-4.jpg';
import Gallary3 from '../../assets/hotel-5.jpg';
import Gallary4 from '../../assets/hotel-3.avif';
import Gallary5 from '../../assets/hotel-2.webp';




const GallarySection = () => {
  return (
<div>
<div className="grid lg:grid-cols-3 md:grid-cols-3 gap-5 mb-8">
<div className="card w-96 bg-base-100 shadow-xl text-center mx-auto mt-4">
  <figure className="px-10 pt-10">
    <img src={Gallary} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Classic Room</h2>
    <p>A standard room is one of the cheapest hotel rooms, and usually includes a double or queen bed. It's usually a rectangular space with a private bathroom, a desk, an armchair or sofa and perhaps a cupboard and dressing table.</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl mx-auto mt-4">
  <figure className="px-10 pt-10">
    <img src={Gallary1} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Delux Room</h2>
    <p>Deluxe rooms provide modern furniture and amenities, which can accommodate a single person or a family, totally equipped with high tech comforts such as high speed Wi-Fi access, TV, AC, Electric Kettle, and more facilities.</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl mx-auto mt-4">
  <figure className="px-10 pt-10">
    <img src={Gallary2} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
  <h2 className="card-title">Delux Room</h2>
    <p>Deluxe rooms provide modern furniture and amenities, which can accommodate a single person or a family, totally equipped with high tech comforts such as high speed Wi-Fi access, TV, AC, Electric Kettle, and more facilities.</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl mx-auto mt-4">
  <figure className="px-10 pt-10">
    <img src={Gallary3} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Suite Room</h2>
    <p>Suite hotel rooms offer more than basic hotel rooms, providing guests with a larger living area and separate bedroom area. They also typically feature upscale furnishings, such as high-end bedding, a mini-fridge, microwave, and flat-screen TV.</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl mx-auto mt-4">
  <figure className="px-10 pt-10">
    <img src={Gallary4} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
  <h2 className="card-title">Delux Room</h2>
    <p>Deluxe rooms provide modern furniture and amenities, which can accommodate a single person or a family, totally equipped with high tech comforts such as high speed Wi-Fi access, TV, AC, Electric Kettle, and more facilities.</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl mx-auto mt-4">
  <figure className="px-10 pt-10">
    <img src={Gallary5} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
  <h2 className="card-title">Classic Room</h2>
    <p>A standard room is one of the cheapest hotel rooms, and usually includes a double or queen bed. It's usually a rectangular space with a private bathroom, a desk, an armchair or sofa and perhaps a cupboard and dressing table.</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl mx-auto mt-4">
  <figure className="px-10 pt-10">
    <img src={Gallary} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
  <h2 className="card-title">Suite Room</h2>
    <p>Suite hotel rooms offer more than basic hotel rooms, providing guests with a larger living area and separate bedroom area. They also typically feature upscale furnishings, such as high-end bedding, a mini-fridge, microwave, and flat-screen TV.</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl mx-auto mt-4">
  <figure className="px-10 pt-10">
    <img src={Gallary2} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
  <h2 className="card-title">Delux Room</h2>
    <p>Deluxe rooms provide modern furniture and amenities, which can accommodate a single person or a family, totally equipped with high tech comforts such as high speed Wi-Fi access, TV, AC, Electric Kettle, and more facilities.</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>



</div>


<div>
  <button></button>
  <input type="" />
  <button></button>
</div>
</div>
  );
};

export default GallarySection;
