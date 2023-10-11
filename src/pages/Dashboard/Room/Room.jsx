
// import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
function Room(props) {

  // const [number1, setNumber1] = useState();
  // const [number2, setNumber2] = useState();
  // const [total, setTotal] = useState(0);

  // function calculateTotal() {
  //   setTotal(number1 + number2);
  // }



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
    if(data.insertedId){
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
    }
   
  };

  return (
    <div>      
    <div>
    <h2 className="text-center text-3xl mb-8 border-y-4 w-96 mx-auto p-2">
        Check Booking Availability
      </h2>
    </div>
    
      <form onSubmit={handleSubmit(onSubmit)} className=" p-12">
        {/* <div className="">
          <label className="label">
            <span className="label-text font-semibold">Room Number*</span>
          </label>
          <input
            type="number"
            placeholder="Room Number"
            {...register("number", { required: true, maxLength: 120 })}
            className="input input-bordered border bg-red-300 text-white"
          />
         
        </div> */}
      

        <div>
        <label className="label">
              <span className="label-text font-semibold">Room Number *</span>
            </label>
            <select
            
              {...register("Room_number", { required: true })}
              className="select select-bordered border bg-red-300 "
            >
            
              <option>101</option>
              <option>102</option>
              <option>103</option>
              <option>104</option>
              <option>105</option>
              <option>106</option>
              <option>107</option>
              <option>108</option>
              <option>109</option>
              <option>110</option>
              <option>201</option>
              <option>201</option>
              <option>202</option>
              <option>203</option>
              <option>204</option>
              <option>205</option>
              <option>206</option>
              <option>207</option>
              <option>208</option>
              <option>209</option>
              <option>210</option>
              <option>301</option>
              <option>302</option>
              <option>303</option>
              <option>304</option>
              <option>305</option>
              <option>306</option>
              <option>307</option>
              <option>308</option>
              <option>309</option>
              <option>310</option>
            </select>
        </div>
        <div  className="form-control w-full  ">
        <label className="label">
            <span className="label-text font-semibold">User Name*</span>
          </label>
          <input
            type="text"
            placeholder="User Name"
            {...register("userName", {required: true, maxLength: 120})}
            className="input input-bordered  border bg-red-300 text-black"
          />
        </div>

        <div className="flex ">
          <div>
            <label className="label">
              <span className="label-text font-semibold">Category *</span>
            </label>
            <select
              defaultValue={"pick one"}
              {...register("bed_Type", { required: true })}
              className="select select-bordered border bg-red-300 "
            >
            
              <option>Classic</option>
              <option>Luxary</option>
              <option>Diamond</option>
              <option>Normal</option>
            </select>
          </div>

          <div className=" ml-4  ">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>

            <input
              type="number"
              placeholder="Price"
              value={number1}
              {...register("price", { required: true })}
              className="input input-bordered border bg-red-300"
            />
          </div>
        </div>

        <div className="flex mt-5 gap-6">
          <div className="form-control w-1/2  ">
            <div className="form-group">
              <label className="label">
                <span className="label-text font-semibold">CheckIn*</span>
              </label>
              <input
                type="date"
                placeholder="CheckIn"
                {...register("start_date", { required: true })}
                className="input input-bordered w-full mr-3 border bg-red-300"
              />
            </div>
          </div>
          <div className="form-group">
            <label className="label">
              <span className="label-text font-semibold">CheckOut*</span>
            </label>
            <input
              type="date"
              placeholder="CheckOut"
              {...register("checkOut", { required: true })}
              className="input input-bordered w-full mr-3 border bg-red-300"
            />
          </div>
        </div>
        <div>
          <label className="label">
            <span className="label-text ">Time*</span>
          </label>
          <input
            type="time"
            placeholder="Time"
            {...register("time", { required: true })}
            className="input input-bordered w-full mr-3 border bg-red-300 text-black"
          />
        </div>
        <div>
            <label className="label">
              <span className="label-text font-semibold">Damage Name *</span>
            </label>
            <select
              
              {...register("damage_name", { required: true })}
              className="select select-bordered border bg-red-300 "
            >
            
              <option>Bed Sheet</option>
              <option>Television</option>
              <option>Shower</option>
              <option>Towels</option>
              <option>Courtesty Tray</option>
              <option>Mirror</option>
              <option>Lighting</option>
            
            </select>
          </div>
        <div>
          <label className="label">
            <span className="label-text font-semibold">Damage Price*</span>
          </label>
          <input
            type="number"
            placeholder="Damage Price"
            value={number2}
            {...register("damage_price", { required: true })}
            className="input input-bordered w-full mr-3 border bg-red-300 text-black"
          />
        </div>
        <div className="form-outline">
          <label className="label">
            <span className="label-text font-semibold">Description*</span>
          </label>
          <textarea
            type="textarea"
            placeholder="Damage Description"
            {...register("textarea", { required: true })}
            className="input input-bordered w-full mr-3 border bg-red-300 text-black"
          />
        </div>


 
        <div  className="form-control w-full  ">
        <label className="label">
            <span className="label-text font-semibold">Recipe name*</span>
          </label>
          <input
            type="text"
            placeholder="Recipe Name"
            {...register("name", {required: true, maxLength: 120})}
            className="input input-bordered  border bg-red-300 text-black"
          />
        </div>

        <div className="flex ">
      <div className="form-control w-full ml-4">
          <label className="label">
            <span className="label-text">Category *</span>
           
          </label>
          <select
          defaultValue={"pick one"}
          {...register("Food_Category", { required: true })}
          className="select select-bordered border bg-red-300 ">
            <option disabled >
              Pick one
            </option>
            <option>Pizza</option>
            <option>Soup</option>
            <option>Salad</option>
            <option>Desert</option>
            <option>Drinks</option>
            <option>Deshi Item</option>
          </select>
        </div> 
        <div className="form-control w-full ml-4 ">
          <label className="label">
            <span className="label-text font-semibold">Price*</span>
          </label>
          <input
            type="number"
            placeholder="Price"
            {...register("Food_price", { required: true })}
            className="input input-bordered w-full mr-3 border bg-red-300 text-black "
          />
        </div>
      </div>

        <input
          type="submit"
          value="Add item"
          className="btn btn-outline bg-red-300 mt-4 text-center"
        />
      </form>
      
      <div>
    
      </div>


    </div>
  );
}

export default Room;
