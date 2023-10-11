import React, { useState } from "react";
import data from '../../../data/data'

function FoodList() {
  const [query,setQuery] = useState('')

  const handleSearch = ()=>{
   
  }

  return (
<div>


  <div className="col-12 mb-5">
    <div className="mb-3 col-4 mx-auto">
      <input
       type="text"
   placeholder="Search"
   className="border mt-4 p-2 w-1/2"
   onChange={(e)=>setQuery(e.target.value)}
       />
       <button onClick={handleSearch} className="btn btn-info">search</button>
    </div>

    

  </div>
<div className="grid md:grid-cols-3 gap-6 mt-9">
  {data.cardData.map((item,index)=>{
    return(
<div className="card w-96 bg-base-100 shadow-xl">

<figure><img src={item.img} alt="Shoes" /></figure>
<div className="card-body">
      <h2 className="card-title">
     {item.title}
      
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
    <button className="badge badge-outline bg-purple-600 text-white p-4">Add Item</button>
      <button className="badge badge-outline bg-red-600 text-white p-4">Delete</button>
    </div>
  </div>
</div>
    )
  })}

      </div>
</div>


)
}


export default FoodList;
