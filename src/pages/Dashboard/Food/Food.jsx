import React from "react";


function Food(props) {

  return (
    // <div>
    //   <div className="text-center mb-6">
    //     <h1 className="input input-bordered input-accent w-full max-w-xs btn btn-outline btn-info bg-yellow-300 mt-3 border-0 border-b-4 text-black ">
    //       Food Add-Item
    //     </h1>
    //   </div>

    //   <div className="w-full">
    //   <form className="card-body ">
    //    <div className="grid md:grid-cols-2 gap-6">
    //    <div className="form-control">
    //             <label className="label">
    //               <span className="label-text font-bold ">Food Item-Name *</span>
    //             </label>
    //             <input type="text" placeholder="Please item-name" className="input input-bordered input-success w-full max-w-xs k" />
    //           </div>

    //           <div className="form-control">
    //             <label className="label">
    //               <span className="label-text font-bold ">Quantity *</span>
    //             </label>
    //             <input type="number" placeholder="Please Number" className="input input-bordered input-accent w-full max-w-xs" />
    //           </div>
    //            </div>


    //          <div className="grid md:grid-cols-2 gap-6">
    //           <div className="form-control">
    //             <label className="label">
    //               <span className="label-text font-bold ">special Item *</span>
    //             </label>
    //             <input type="text" placeholder="Please Number" className="input input-bordered input-accent w-full max-w-xs " />
    //           </div>
    //           <div className="form-control">
    //             <label className="label">
    //               <span className="label-text font-bold ">Quantity *</span>
    //             </label>
    //             <input type="number" placeholder="Please Number" className="input input-bordered input-accent w-full max-w-xs " />
    //           </div>
    //          </div>


           
    //          <div className="grid md:grid-cols-2 gap-6">
           
    //           <div className="form-control">
    //             <label className="label">
    //               <span className="label-text font-bold ">Food Price *</span>
    //             </label>
    //             <input type="number" placeholder="Please  Number" className="input input-bordered input-accent w-full max-w-xs" />
            
    //           </div>
    //           <div className="form-control">
    //             <label className="label">
    //               <span className="label-text font-bold ">special Food Price *</span>
    //             </label>
    //             <input type="number" placeholder="Please  Number" className="input input-bordered input-accent w-full max-w-xs" />
    //           </div>
    //          </div>

    //       <div className="grid md:grid-cols-2 gap-6">
    //       <div className="form-control">
    //             <label className="label">
    //               <span className="label-text font-bold ">Image *</span>
    //             </label>
    //             <input type="file" placeholder="Please  Number" className="input input-bordered input-accent w-full max-w-xs " />
    //           </div>
    //          <div className="form-control">
    //             <label className="label">
    //               <span className="label-text font-bold ">Description *</span>
    //             </label>
    //             <textarea type="file" placeholder="text........." className="input input-bordered input-accent w-full max-w-xs " />
    //           </div>
    //       </div>

             
    //           <div className="form-control md:w-1/2 text-center ">
    //             <button className="btn btn-outline btn-success bg-slate-100 mt-3 border-0 border-b-4">Submit</button>
    //           </div>
    //          </form>
    //   </div>

    // </div>
    <div className="border  rounded-lg mt-14 mb-6 my-20 text-center">
      <h1 className="input input-bordered input-accent w-full max-w-xs btn btn-outline btn-primary bg-slate-100 mt-3 border-0 border-b-4 text-black ">Food Add-Room </h1>
  <form className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold ">Food Name * </span>
                </label>
                <input type="text" placeholder="Please Number" className="input input-bordered input-accent w-full max-w-xs " />
              </div>
             <div className="grid md:grid-cols-3 gap-6">
             <div className="form-control ">
                <label className="label">
                  <span className="label-text font-bold ">Quntity *</span>
                </label>
                <input type="number" placeholder="Please Number" className="input input-bordered input-accent w-full max-w-xs " />
      
  
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold ">Set Menu </span>
                </label>
                <select className="input input-bordered input-accent w-full max-w-xs">
                  <option disabled selected>
                    Please Select
                  </option>
                  <option>1:1</option>
                  <option>1:2</option>
                  <option>2:2</option>
                  <option>2:4</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold ">Cocktail Name*</span>
                </label>

                <input type="number" placeholder="Please Guest Number" className="input input-bordered input-accent w-full max-w-xs " />
            
              </div>
           
             </div>
           
             <div className="grid md:grid-cols-3 gap-6">
           
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold ">Cocktail Price *</span>
                </label>
                <input type="number" placeholder="Please  Number" className="input input-bordered input-accent w-full max-w-xs " />
            
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold ">Image *</span>
                </label>
                <input type="file" placeholder="Please  Number" className="input input-bordered input-accent w-full max-w-xs" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold ">Food Price *</span>
                </label>
                <input type="number" placeholder="Please  Number" className="input input-bordered input-accent w-full max-w-xs" />
              </div>
             </div>
             
              <div className="form-control md:w-1/2 text-center ">
                <button className="btn btn-outline btn-success bg-slate-100 mt-3 border-0 border-b-4">Submit</button>
              </div>
             </form>
    </div>
  );
}

export default Food;
