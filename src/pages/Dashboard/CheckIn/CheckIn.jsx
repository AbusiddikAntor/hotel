import moment from "moment/moment";
import {AiOutlinePlus} from 'react-icons/ai';


function CheckIn(props) {

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
 <form className="card-body ">
            <div className="grid grid-cols-2 gap-10">
            <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold ">Customer Name *</span>
                </label>
                <input type="text" placeholder="Name" className="input input-bordered input-accent w-full max-w-xs " />
              </div>

             {/* modal  */}

<div className="md:mt-8 mt-8 ">
  
<label htmlFor="my_modal_6" className="btn bg-yellow-400">

<AiOutlinePlus className="font-bold text-black"></AiOutlinePlus>Check-Out
  </label>

<input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg underline">Check-Out </h3>

    {/* 1st column  */}
<div className="grid md:grid-cols-2 gap-4">
<div className="form-control">
                <label className="label">
                  <span className="label-text font-bold ">Customer Name *</span>
                </label>
                <input type="text" placeholder="Name" className="input input-bordered input-accent w-full max-w-xs " />
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text font-bold ">Room Number</span>
                </label>
                <input type="number" placeholder="Please Number" className="input input-bordered input-accent w-full max-w-xs" />
              </div>
</div>


{/* 2nd column */}

             <div className="grid md:grid-cols-2 gap-4">
             <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold ">Check-Out Date *</span>
                </label>
                <input type="date" placeholder="Please  Number" className="input input-bordered input-accent w-full max-w-xs " />
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text font-bold ">Image * </span>
                </label>
                <input type="file" placeholder="Please Number" className="input input-bordered input-accent w-full max-w-xs" />
              </div>
                </div>

                {/* 3rd column */}

            <div className="grid md:grid-cols-2 gap-4">
            <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold ">Damage Name *</span>
                </label>
                <select className="input input-bordered input-accent w-full max-w-xs ">
                  <option disabled selected>
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
                  <span className="label-text font-bold ">Demage Price * </span>
                </label>
                <input type="number" placeholder="Please Number" className="input input-bordered input-accent w-full max-w-xs" />
              </div>
            </div>

              <div className="form-control md:w-1/2 text-center ">
                <button className="btn btn-outline btn-warning bg-slate-100 mt-3 border-0 border-b-4">Submit</button>
              </div>
    <div className="modal-action">
      <label htmlFor="my_modal_6" className="btn">Close!</label>
    </div>
  </div>
</div>
</div>


             {/* modal  */}


            </div>
             <div className="grid md:grid-cols-3 gap-6">
             <div className="form-control ">
                <label className="label">
                  <span className="label-text font-bold ">Room Number</span>
                </label>
                <input type="number" placeholder="Please Number" className="input input-bordered input-accent w-full max-w-xs" />
              </div>

        
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold ">Guest No *</span>
                </label>

                <input type="number" placeholder="Please Guest Number" className="input input-bordered input-accent w-full max-w-xs " />
            
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
                <input type="date" placeholder="Please  Number" className="input input-bordered input-accent w-full max-w-xs"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold ">Check-Out *</span>
                </label>
                <input type="date" placeholder="Please  Number" className="input input-bordered input-accent w-full max-w-xs " />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold ">Time *</span>
                </label>
                <input type="time" placeholder="Please  Number" className="input input-bordered input-accent w-full max-w-xs " />
              </div>
            
             </div>
             <div className="grid md:grid-cols-3 gap-6">
             <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold ">Image *</span>
                </label>
                <input type="file" placeholder="Please  Number" className="input input-bordered input-accent w-full max-w-xs " />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold ">Booking-Charge *</span>
                </label>
                <input type="number" placeholder="Please  Number" className="input input-bordered input-accent w-full max-w-xs " />
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
                <input type="number" placeholder="Please  Number" className="input input-bordered input-accent w-full max-w-xs " />
              </div>
             
              <div className="form-control md:w-1/2 text-center ">
                <button className="btn btn-outline btn-success bg-slate-100 mt-3 border-0 border-b-4">Submit</button>
              </div>
             </form>
 </div>
    </div>


    </div>
  );
}

export default CheckIn;
