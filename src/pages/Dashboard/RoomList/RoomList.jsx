import React from 'react';
import img from '../../../assets/hotel-4.jpg'
import { Link } from 'react-router-dom';

function RoomList(props) {
    return (
        <div>
<div className='grid md:grid-cols-2 gap-8'>
<div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body text-center">
    <h2 className="card-title ">Room Number - 101</h2>
    <img src={img} alt="" />
    <div className="card-actions justify-end">
   <Link to="/dashboard/roomDetails101"> <button className="btn btn-outline btn-success">Details</button></Link>
    </div>
  </div>
</div>
  
 



<div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body text-center">
    <h2 className="card-title ">Room Number - 102</h2>
    <img src={img} alt="" />
    <div className="card-actions justify-end">
   <Link to="/dashboard/roomDetails102"> <button className="btn btn-outline btn-success">Details</button></Link>
    </div>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body text-center">
    <h2 className="card-title ">Room Number - 103</h2>
    <img src={img} alt="" />
    <div className="card-actions justify-end">
   <Link to="/dashboard/RoomDetails101"> <button className="btn btn-outline btn-success">Details</button></Link>
    </div>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body text-center">
    <h2 className="card-title ">Room Number - 104</h2>
    <img src={img} alt="" />
    <div className="card-actions justify-end">
   <Link to="/dashboard/RoomDetails101"> <button className="btn btn-outline btn-success">Details</button></Link>
    </div>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body text-center">
    <h2 className="card-title ">Room Number - 105</h2>
    <img src={img} alt="" />
    <div className="card-actions justify-end">
   <Link to="/dashboard/RoomDetails101"> <button className="btn btn-outline btn-success">Details</button></Link>
    </div>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body text-center">
    <h2 className="card-title ">Room Number - 106</h2>
    <img src={img} alt="" />
    <div className="card-actions justify-end">
   <Link to="/dashboard/RoomDetails101"> <button className="btn btn-outline btn-success">Details</button></Link>
    </div>
  </div>
</div>
</div>
        </div>
    );
}

export default RoomList;