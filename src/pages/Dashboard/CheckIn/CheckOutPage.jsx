import React from 'react';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CheckOutPage(props) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        console.log(data);
        toast.success("CheckOut Form successfully");
        
      }
    return (
        <div>

<div>
<h1 className='text-center text-2xl text-yellow-500 mt-6 mb-9'>Check-Out Form </h1>
</div>

  <div className='border rounded-lg p-10 bg-yellow-300'>
  <form 
    onSubmit={handleSubmit(onSubmit)}
    >
    <div className="grid md:grid-cols-2 gap-4">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text font-bold ">
                            Customer Name *
                          </span>
                        </label>
                        <input
                          type="text"
                          placeholder="Customer Name"
                          {...register("checkCustomer_name")}
                          className="input input-bordered input-accent w-full max-w-xs"
                          required
                        />
                      </div>
                      <div className="form-control ">
                        <label className="label">
                          <span className="label-text font-bold ">
                            Room Number
                          </span>
                        </label>
                        <input
                          type="number"
                          placeholder="Room Number"
                          {...register("checkRoom_number")}
                          className="input input-bordered input-accent w-full max-w-xs"
                          required
                        />
                      </div>
                    </div>

                    {/* 2nd column */}

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text font-bold ">
                            Check-Out Date *
                          </span>
                        </label>
                        <input
                          type="date"
                          placeholder="CheckOut"
                          {...register("checkOut_date")}
                          className="input input-bordered input-accent w-full max-w-xs"
                          required
                        />
                      </div>
                      <div className="form-control ">
                        <label className="label">
                          <span className="label-text font-bold ">
                            Image *{" "}
                          </span>
                        </label>
                        <input
                          type="file"
                          placeholder="Image"
                          {...register("check_photo")}
                          className="input input-bordered input-accent w-full max-w-xs"
                          required
                        />
                      </div>
                    </div>

                    {/* 3rd column */}

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text font-bold ">
                            Damage Name *
                          </span>
                        </label>
                        <select
          defaultValue={"pick one"}
          {...register("damage_name", { required: true })}
          className="input input-bordered input-accent w-full max-w-xs">
              <option>
                            Please Select
                          </option>
                          <option>Television </option>
                          <option>Mirror</option>
                          <option>Refrigerator</option>
                          <option>A/c</option>
          
           
          </select>
                      </div>
                      <div className="form-control ">
                        <label className="label">
                          <span className="label-text font-bold ">
                            Demage Price *{" "}
                          </span>
                        </label>
                        <input
                          type="number"
                          placeholder="Damage price"
                          {...register("damage_price")}
                          className="input input-bordered input-accent w-full max-w-xs"
                          required
                        />
                      </div>
                    </div>

                    <div className="form-control md:w-1/2 text-center ">
                      <button className="btn btn-outline btn-warning bg-slate-100 mt-3 border-0 border-b-4">
                        Submit
                      </button>
                    </div>
               

    </form>
    <ToastContainer />
  </div>
        </div>
    );
}

export default CheckOutPage;