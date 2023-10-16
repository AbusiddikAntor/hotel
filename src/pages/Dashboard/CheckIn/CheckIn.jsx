import moment from "moment/moment";
import { AiOutlinePlus } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

function CheckIn(props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    toast.success("Add Room successfully");
  };

  return (
    <div>
      <div>
        <h1 className="text-2xl text-green-600 font-bold border-0 border-b-4 text-center">
          {" "}
          Hotel Check - In
        </h1>
      </div>
      <div className="border  rounded-lg mt-14 mb-6 my-20 text-center">
        <div className="btn btn-outline btn-info bg-slate-100 mb-3 border-0 border-b-4 ">
          {moment().format("dddd, MMMM D, YYYY")}
        </div>

        <div className=" border">
          <form 
          onSubmit={handleSubmit(onSubmit)}
          className="card-body "
          >
            <div className="grid grid-cols-2 gap-10">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold ">Customer Name **</span>
                </label>
                <input
                  type="text"
                  placeholder="Customer Name"
                  {...register("customer_name")}
                  className="input input-bordered input-accent w-full max-w-xs"
                  required
                />
              </div>

              {/* modal  */}

              <div className="md:mt-8 mt-8 ">
                  
                  
                
                <Link to="/dashboard/checkoutPage"><button className="btn bg-yellow-400">Check-Out</button></Link>
              
              </div>

              {/* modal End */}

            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="form-control ">
                <label className="label">
                  <span className="label-text font-bold ">Room Number *</span>
                </label>
                  <input
                  type="number"
                  placeholder="Room Number"
                  {...register("Room_number")}
                  className="input input-bordered input-accent w-full max-w-xs"
                  
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold ">Guest No *</span>
                </label>

                <input
                  type="number"
                  placeholder="Guest No"
                  {...register("Guest_no")}
                  className="input input-bordered input-accent w-full max-w-xs"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold ">Category *</span>
                </label>
                <select className="input input-bordered input-accent w-full max-w-x">
                  <option disabled selected>
                    Please Select
                  </option>
                  <option>Classic </option>
                  <option>Delux</option>
                  <option>Suite</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold ">Check-In *</span>
                </label>
                <input
                  type="date"
                  placeholder="Please  Number"
                  className="input input-bordered input-accent w-full max-w-xs"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold ">Check-Out *</span>
                </label>
                <input
                  type="date"
                  placeholder="Please  Number"
                  className="input input-bordered input-accent w-full max-w-xs "
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold ">Time *</span>
                </label>
                <input
                  type="time"
                  placeholder="Please  Number"
                  className="input input-bordered input-accent w-full max-w-xs "
                />
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold ">Image *</span>
                </label>
                <input
                  type="file"
                  placeholder="Please  Number"
                  className="input input-bordered input-accent w-full max-w-xs "
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold ">
                    Booking-Charge *
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="Please  Number"
                  className="input input-bordered input-accent w-full max-w-xs "
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold ">Status *</span>
                </label>
                <select className="input input-bordered input-accent w-full max-w-xs ">
                  <option disabled selected>
                    Please Select
                  </option>
                  <option>Active </option>
                  <option>Booking</option>
                  <option>Empty</option>
                </select>
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold ">Discount *</span>
              </label>
              <input
                type="number"
                placeholder="Please  Number"
                className="input input-bordered input-accent w-full max-w-xs "
              />
            </div>

            <div className="form-control md:w-1/2 text-center ">
              <button className="btn btn-outline btn-success bg-slate-100 mt-3 border-0 border-b-4">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CheckIn;
