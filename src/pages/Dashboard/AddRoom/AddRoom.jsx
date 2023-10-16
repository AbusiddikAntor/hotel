import React from "react";
import moment from 'moment/moment';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AddRoom(props) {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    toast.success("Add Room successfully");
    
  }
  return (
    <div className="border  rounded-lg mt-14 mb-6 my-20 text-center">
      <h1 className="input input-bordered input-accent w-full max-w-xs btn btn-outline btn-primary bg-slate-100 mt-3 border-0 border-b-4 text-black ">Add Room </h1>
  <form 
  onSubmit={handleSubmit(onSubmit)}
  className="card-body"
  >
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold ">Room Type</span>
                </label>
    
                <select
          defaultValue={"pick one"}
          {...register("Room_type",)}
          className="input input-bordered input-accent w-full max-w-xs btn btn-outline btn-warning bg-slate-100 mt-3 border-0 border-b-4 text-black"
         
          
          >
            <option  >
              Please Select 
            </option>
            <option>Single ($1000)</option>
            <option>Double($1500)</option>
            <option>Queen($1900)</option>
            <option>King($2500)</option>
            <option>2-Bedroom ($3000)</option>
            <option>Suite ($2000)</option>
           
          </select>
              </div>
             <div className="grid md:grid-cols-3 gap-6">
             <div className="form-control ">
                <label className="label">
                  <span className="label-text font-bold ">Room Number</span>
                </label>
                <input
            type="number"
            placeholder="Room Number"
            {...register("Room_number",)}
            className="input input-bordered input-accent w-full max-w-xs btn btn-outline btn-warning bg-slate-100 mt-3 border-0 border-b-4 text-black"
            required
          />
      
  
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold ">Aircon In Hotel Room</span>
                </label>
            
                <select
          defaultValue={"pick one"}
          {...register("aircone_category", )}
          className="input input-bordered input-accent w-full max-w-xs btn btn-outline btn-warning bg-slate-100 mt-3 border-0 border-b-4 text-black"
          
          >
            <option  >
              Please Select 
            </option>
            <option>A/C</option>
            <option>Non-A/C</option>
          
           
          </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold ">Guest No *</span>
                </label>

                <input
            type="number"
            placeholder="Guest No"
            {...register("Guest_no",)}
            className="input input-bordered input-accent w-full max-w-xs btn btn-outline btn-warning bg-slate-100 mt-3 border-0 border-b-4 text-black"
          />
            
              </div>
           
             </div>
           
             <div className="grid md:grid-cols-3 gap-6">
           
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold ">Category *</span>
                </label>
         
                <select
          defaultValue={"pick one"}
          {...register("category", { required: true })}
          className="input input-bordered input-accent w-full max-w-xs btn btn-outline btn-warning bg-slate-100 mt-3 border-0 border-b-4 text-black ">
            <option  >
              Please Select 
            </option>
            <option>Classic </option>
                  <option>Delux</option>
                  <option>Suite</option>
          
           
          </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold ">Image *</span>
                </label>
                <input
            type="file"
            placeholder="Image"
            {...register("Image",)}
            className="input input-bordered input-accent w-full max-w-xs btn btn-outline btn-warning bg-slate-100 mt-3 border-0 border-b-4 text-black"
          />
              </div>
             </div>
             
              <div className="form-control md:w-1/2 text-center ">
                <button className="btn btn-outline btn-success bg-slate-100 mt-3 border-0 border-b-4">Submit</button>
              </div>
             </form>
             <ToastContainer />
    </div>
  );
}

export default AddRoom;