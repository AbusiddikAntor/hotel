import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Food(props) {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    toast.success("Food Add-Room successfully");
  }

  return (

    <div className="border  rounded-lg mt-14 mb-6 my-20 text-center ">
      <h1 className="input input-bordered input-accent w-full max-w-xs btn btn-outline btn-primary bg-slate-100 mt-3 border-0 border-b-4 text-black ">Food Add-Room </h1>
  <form 
  className="card-body"
  onSubmit={handleSubmit(onSubmit)}
  
  >
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold ">Food Name * </span>
                </label>
                <input
            type="text"
            placeholder="Room Number"
            {...register("food_name",)}
            className="input input-bordered input-accent w-full max-w-xs bg-green-300"
            
          />
              </div>
             <div className="grid md:grid-cols-3 gap-6">
             <div className="form-control ">
                <label className="label">
                  <span className="label-text font-bold ">Quantity *</span>
                </label>
                <input
            type="number"
            placeholder="Quantity"
            {...register("quantity",)}
            className="input input-bordered input-accent w-full max-w-xs bg-green-300"
          />
      

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold ">Set Menu *</span>
                </label>
                <select
          defaultValue={"pick one"}
          {...register("set_menu", { required: true })}
          className="select select-bordered border bg-green-300 ">
            <option  >
              Please Select 
            </option>
            <option>1:1</option>
            <option>1:2</option>
            <option>1:3</option>
            <option>2:4</option>
           
          </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold ">Cocktail Name*</span>
                </label>

                <input
            type="text"
            placeholder="Room Number"
            {...register("cocktail_name",)}
            className="input input-bordered input-accent w-full max-w-xs bg-green-300"
          />
            
              </div>
           
             </div>
           
             <div className="grid md:grid-cols-3 gap-6">
           
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold ">Cocktail Price *</span>
                </label>
                <input
            type="number"
            placeholder="Cocktail Price"
            {...register("cocktail_Price",)}
            className="input input-bordered input-accent w-full max-w-xs bg-green-300"
          />
            
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold ">Image *</span>
                </label>
                <input
            type="file"
            placeholder="image"
            {...register("food_Image",)}
            className="input input-bordered input-accent w-full max-w-xs bg-green-300"
          />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold ">Food Price *</span>
                </label>
                <input
            type="number"
            placeholder="image"
            {...register("food_price",)}
            className="input input-bordered input-accent w-full max-w-xs bg-green-300"
          />
              </div>
             </div>
             <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold ">Description *</span>
                </label>
                <textarea
            type="text"
            placeholder="Message......."
            {...register("description",)}
            className="input input-bordered input-accent w-full max-w-xs bg-green-300"
          />
              </div>
           
             
              <div className="form-control md:w-1/2 text-center ">
                <button className="btn btn-outline btn-success bg-slate-100 mt-3 border-0 border-b-4">Submit</button>
              </div>
             </form>
             <ToastContainer />
    </div>
  );
}

export default Food;
