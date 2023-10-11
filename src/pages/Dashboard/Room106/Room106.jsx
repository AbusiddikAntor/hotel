import React, { useEffect } from 'react';
import  {GrView} from "react-icons/gr";
import  {BiEditAlt} from "react-icons/bi";
import  {AiOutlineDelete} from "react-icons/ai";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useLoaderData } from 'react-router-dom';

function Room106(props) {
 const users = useLoaderData();
// console.log(users);


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data)

    
    fetch(`http://localhost:3000/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
    console.log(data);
  };


  return (
    <div>
      <h2>{users.length}</h2>
      <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Room Number</th>
        <th>Room Type</th>
        <th>Rent</th>
        <th>Status</th>
        <th className='text-center'>Action</th>
      </tr>
    </thead>
    <tbody>
     {users.map((item,index)=>(
      <tr
       key={item.id}
      >
   
      
        <th>
           {index} 
          </th>
        <td className='text-center'>{item.price}</td>
        <td>Classic</td>
        <td>${item.price}</td>
        <td>{item.Category}</td>
        <td className='flex gap-5'>

          {/* view button  */}
          <GrView></GrView>
          

  {/* Edit Function   */}
<button className="" onClick={()=>document.getElementById('my_modal_3').showModal()}>
<BiEditAlt></BiEditAlt>
</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click on ✕ button to close</p>
    <form onSubmit={handleSubmit(onSubmit)} className=" p-12">

{/* Room number */}
<div className="">
<label className="label">
<span className="label-text font-semibold">Room Number*</span>
</label>
<select
defaultValue={"Please Select "}
{...register("room_number", { required: true })}
className="input input-bordered input-info w-full max-w-xs "
placeholder='Please Select'
>
<option  >
 Please Select
</option>
<option>101</option>
<option>102</option>
<option>103</option>
<option>104</option>
<option>105</option>
<option>201</option>
<option>202</option>
<option>203</option>
<option>204</option>
<option>205</option>
</select>
</div>

{/* Room Type */}
<div  className="form-control w-full  ">
<label className="label">
<span className="label-text font-semibold">Room Type*</span>
</label>
<select
defaultValue={"Please Select"}
{...register("room_type", { required: true })}
className="input input-bordered input-info w-full max-w-xs ">
<option  >
 Please Select
</option>
<option>Classic</option>
<option>Delux</option>
<option>Suite</option>
</select>
</div>


{/* Category */}
<div className="form-control w-full">
<label className="label">
<span className="label-text">Category *</span>
</label>

<select
defaultValue={"pick one"}
{...register("Category", { required: true })}
className="input input-bordered input-info w-full max-w-xs ">
<option disabled >
 Pick one
</option>
<option>Active</option>
<option>Empty</option>
<option>Booked</option>
</select>
</div>

{/* price */}
<div className="form-control w-full  ">
<label className="label">
<span className="label-text font-semibold">Price*</span>
</label>
<input
type="number"
placeholder="Price"
{...register("price", { required: true })}
className="input input-bordered input-info w-full max-w-xs "
/>
</div>



{/* Details */}
<div>
<label className="label">
<span className="label-text ">Description*</span>
</label>
<textarea
type="text"
placeholder="Text Message.........."
{...register("message", { required: true })}
className="input input-bordered input-info w-full max-w-xs"
/>
</div>

<input
type="submit"
value="Add item"
className="btn btn-outline bg-red-300 mt-4 text-center"
/>
</form>
  </div>
</dialog>

{/* Edit end */}


{/* delete button  */}
          <AiOutlineDelete className='text-red-500'></AiOutlineDelete>

          {/*  */}
        </td>
      </tr>
        ))} 
    </tbody>
  </table>
</div>
    </div>
  );
}

export default Room106;










// import React, { useState } from 'react';
// import {GrView} from "react-icons/Gr";
// import {FaEdit} from "react-icons/fa";
// import { useForm } from "react-hook-form";
// import {AiTwotoneDelete} from "react-icons/ai";
// import Swal from "sweetalert2";


// function Room106(props) {

//     // const [items, setItems] = useState([
//     //     { id: 1, number:'101', Type: "Classic",  Price: 1500, status: "active" ,},
//     //     { id: 2, number:'102', Type: "Delux",  Price: 2000, status: "Booked" },
//     //     { id: 3, number:'103', Type: "Suite",  Price: 2500, status: "Empty" , },
      
//     //   ]);
  

      
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log(data)

    
//     fetch(`http://localhost:3000/users`, {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(data),
//     })
//       .then((res) => res.json())
//       .then((result) => {
//         console.log(result);
//       });
//     console.log(data);
//     if(data.insertedId){
//       Swal.fire({
//         position: 'top-end',
//         icon: 'success',
//         title: 'Your work has been saved',
//         showConfirmButton: false,
//         timer: 1500
//       })
//     }
   
//   };

//     return (
//         <div>
// <div className="overflow-x-auto">
//   <table className="table table-zebra  ">
//     {/* head */}
//     <thead>
//       <tr>
//         <th>sl.no</th>
//         <th>Room Number</th>
//         <th>Room Type</th>
//         <th>Price</th>
//         <th>Status</th>
//         <th className='text-center'>Action</th>
        
//       </tr>
//     </thead>
//     <tbody>
//       {/* {items.map((item,index)=>( */}
//         <tr
//         //  key={item.id}
//          >
//         <th>
//           {/* {index} */}
//           </th>
//         <td className='text-center'>
//            {/* {item.number} */}
//            </td>
//         <td>
//           {/* {item.Type} */}
//           </td>
//          <td>
//           {/* ${item.Price} */}
//           </td>  

        
           
        
//           <td>
//             {/* {item.status} */}
//             </td>
  
   
//         <td className='flex gap-5'>
//           <GrView></GrView>
      

//         <button className="" onClick={()=>document.getElementById('my_modal_3').showModal()}>  <FaEdit  className='text-green-600 mb-2  '></FaEdit></button>
// <dialog id="my_modal_3" className="modal">
//   <div className="modal-box">
//     <form method="dialog">
     
//       <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
//     </form>
//     <h3 className="font-bold text-lg text-purple-700 underline">Edit The Room</h3>
//     {/* <p className="py-4"> */}

//       {/* <label > Room Number *</label><br />
//       <select className="select select-ghost input input-bordered w-full max-w-xs">
//   <option  selected>--Please Select-- </option>
//   <option>101</option>
//   <option>102</option>
//   <option>103</option>
//   <option>104</option>
//   <option>105</option>
//   <option>201</option>
//   <option>202</option>
//   <option>203</option>
//   <option>204</option>
//   <option>105</option>
//   <option>301</option>
//   <option>302</option>
//   <option>303</option>
//   <option>304</option>
//   <option>305</option>
// </select> <br />
//       <label > Category *</label><br />
//       <br />
//       <select className="select select-ghost input input-bordered w-full max-w-xs">
//   <option  selected>--Please Select-- </option>
//   <option>Classic</option>
//   <option>Delux</option>
//   <option>Suite</option>
// </select> <br />
//       <label > Status *</label><br />
//       <select className="select select-ghost input input-bordered w-full max-w-xs">
//   <option  selected> ---Select--- </option>
//   <option>Active</option>
//   <option>Booked</option>
//   <option>Empty</option>
// </select> <br />


// <label > Rent *</label> <br />
// <input className="input input-bordered w-full max-w-xs" type="number" name="" id="" /> <br />

// <label>Description *</label> <br />
// <textarea className="input input-bordered w-full max-w-xs" name="" id="" cols="30" rows="10"></textarea> <br />


// <div className="form-control md:w-1/2 text-center ">
//                 <button className="btn btn-outline btn-info bg-slate-100 mt-3 border-0 border-b-4">Submit</button>
//               </div>
//     </p> */}
//      <form onSubmit={handleSubmit(onSubmit)} className=" p-12">
//         {/* <div className="">
//           <label className="label">
//             <span className="label-text font-semibold">Room Number*</span>
//           </label>
//           <input
//             type="number"
//             placeholder="Room Number"
//             {...register("number", { required: true, maxLength: 120 })}
//             className="input input-bordered border bg-red-300 text-white"
//           />
         
//         </div> */}
      

//         <div>
//         <label className="label">
//               <span className="label-text font-semibold">Room Number *</span>
//             </label>
//             <select
            
//               {...register("Room_number", { required: true })}
//               className="select select-bordered border bg-red-300 "
//             >
            
//               <option>101</option>
//               <option>102</option>
//               <option>103</option>
//               <option>104</option>
//               <option>105</option>
//               <option>106</option>
//               <option>107</option>
//               <option>108</option>
//               <option>109</option>
//               <option>110</option>
//               <option>201</option>
//               <option>201</option>
//               <option>202</option>
//               <option>203</option>
//               <option>204</option>
//               <option>205</option>
//               <option>206</option>
//               <option>207</option>
//               <option>208</option>
//               <option>209</option>
//               <option>210</option>
//               <option>301</option>
//               <option>302</option>
//               <option>303</option>
//               <option>304</option>
//               <option>305</option>
//               <option>306</option>
//               <option>307</option>
//               <option>308</option>
//               <option>309</option>
//               <option>310</option>
//             </select>
//         </div>
//         <div  className="form-control w-full  ">
//         <label className="label">
//             <span className="label-text font-semibold">User Name*</span>
//           </label>
//           <input
//             type="text"
//             placeholder="User Name"
//             {...register("userName", {required: true, maxLength: 120})}
//             className="input input-bordered  border bg-red-300 text-black"
//           />
//         </div>

//         <div className="flex ">
//           <div>
//             <label className="label">
//               <span className="label-text font-semibold">Category *</span>
//             </label>
//             <select
//               defaultValue={"pick one"}
//               {...register("bed_Type", { required: true })}
//               className="select select-bordered border bg-red-300 "
//             >
            
//               <option>Classic</option>
//               <option>Luxary</option>
//               <option>Diamond</option>
//               <option>Normal</option>
//             </select>
//           </div>

//           <div className=" ml-4  ">
//             <label className="label">
//               <span className="label-text font-semibold">Price*</span>
//             </label>

//             <input
//               type="number"
//               placeholder="Price"
//               value={number1}
//               {...register("price", { required: true })}
//               className="input input-bordered border bg-red-300"
//             />
//           </div>
//         </div>

//         <div className="flex mt-5 gap-6">
//           <div className="form-control w-1/2  ">
//             <div className="form-group">
//               <label className="label">
//                 <span className="label-text font-semibold">CheckIn*</span>
//               </label>
//               <input
//                 type="date"
//                 placeholder="CheckIn"
//                 {...register("start_date", { required: true })}
//                 className="input input-bordered w-full mr-3 border bg-red-300"
//               />
//             </div>
//           </div>
//           <div className="form-group">
//             <label className="label">
//               <span className="label-text font-semibold">CheckOut*</span>
//             </label>
//             <input
//               type="date"
//               placeholder="CheckOut"
//               {...register("checkOut", { required: true })}
//               className="input input-bordered w-full mr-3 border bg-red-300"
//             />
//           </div>
//         </div>
//         <div>
//           <label className="label">
//             <span className="label-text ">Time*</span>
//           </label>
//           <input
//             type="time"
//             placeholder="Time"
//             {...register("time", { required: true })}
//             className="input input-bordered w-full mr-3 border bg-red-300 text-black"
//           />
//         </div>
//         <div>
//             <label className="label">
//               <span className="label-text font-semibold">Damage Name *</span>
//             </label>
//             <select
              
//               {...register("damage_name", { required: true })}
//               className="select select-bordered border bg-red-300 "
//             >
            
//               <option>Bed Sheet</option>
//               <option>Television</option>
//               <option>Shower</option>
//               <option>Towels</option>
//               <option>Courtesty Tray</option>
//               <option>Mirror</option>
//               <option>Lighting</option>
            
//             </select>
//           </div>
//         <div>
//           <label className="label">
//             <span className="label-text font-semibold">Damage Price*</span>
//           </label>
//           <input
//             type="number"
//             placeholder="Damage Price"
//             value={number2}
//             {...register("damage_price", { required: true })}
//             className="input input-bordered w-full mr-3 border bg-red-300 text-black"
//           />
//         </div>
//         <div className="form-outline">
//           <label className="label">
//             <span className="label-text font-semibold">Description*</span>
//           </label>
//           <textarea
//             type="textarea"
//             placeholder="Damage Description"
//             {...register("textarea", { required: true })}
//             className="input input-bordered w-full mr-3 border bg-red-300 text-black"
//           />
//         </div>


 
//         <div  className="form-control w-full  ">
//         <label className="label">
//             <span className="label-text font-semibold">Recipe name*</span>
//           </label>
//           <input
//             type="text"
//             placeholder="Recipe Name"
//             {...register("name", {required: true, maxLength: 120})}
//             className="input input-bordered  border bg-red-300 text-black"
//           />
//         </div>

//         <div className="flex ">
//       <div className="form-control w-full ml-4">
//           <label className="label">
//             <span className="label-text">Category *</span>
           
//           </label>
//           <select
//           defaultValue={"pick one"}
//           {...register("Food_Category", { required: true })}
//           className="select select-bordered border bg-red-300 ">
//             <option disabled >
//               Pick one
//             </option>
//             <option>Pizza</option>
//             <option>Soup</option>
//             <option>Salad</option>
//             <option>Desert</option>
//             <option>Drinks</option>
//             <option>Deshi Item</option>
//           </select>
//         </div> 
//         <div className="form-control w-full ml-4 ">
//           <label className="label">
//             <span className="label-text font-semibold">Price*</span>
//           </label>
//           <input
//             type="number"
//             placeholder="Price"
//             {...register("Food_price", { required: true })}
//             className="input input-bordered w-full mr-3 border bg-red-300 text-black "
//           />
//         </div>
//       </div>

//         <input
//           type="submit"
//           value="Add item"
//           className="btn btn-outline bg-red-300 mt-4 text-center"
//         />
//       </form>


//   </div>
// </dialog>

        
//         <AiTwotoneDelete className='text-red-500'></AiTwotoneDelete>
//         </td>

      
//       </tr>
      
//     </tbody>
//   </table>
// </div>
            
//         </div>
//     );
// }

// export default Room106;