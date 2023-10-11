import React from 'react';
import moment from "moment/moment";
import img from '../../../assets/hotel-5.jpg'
import img1 from '../../../assets/hotel-5.jpg'
import img2 from '../../../assets/hotel-5.jpg'
import img3 from '../../../assets/hotel-5.jpg'

function CheckOUt(props) {
    return (
        <div className='w-full'>
           <div className='text-center underline'>
           <h1 className='text-2xl text-green-600 font-bold mb-3'> Hotel Check - Out</h1>
           </div>

            <div className="btn btn-outline btn-info bg-slate-100 mb-3 border-0 border-b-4 te ">
          {moment().format("dddd, MMMM D, YYYY")}
        </div>

        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
       
        <th className='text-purple-600 font-bold ' >Image</th>
        <th className='text-purple-600 font-bold '  >Name</th>
        <th className='text-purple-600 font-bold ' >Room Number</th>
        <th className='text-purple-600 font-bold ' >Check-Out Date</th>
        <th className='text-purple-600 font-bold ' >Room Price</th>
        <th className='text-purple-600 font-bold ' >Demage Name</th>
        <th className='text-purple-600 font-bold ' >Demage Price</th>
        <th className='text-purple-600 font-bold ' >Discount</th>
        <th className='text-green-600 font-bold ' >Total Amount</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td >
         Abul-Bashar
          <br/>
        </td>
        <td >101</td>
        <th>
        10-10-2023
        </th>
        <th>
        $ 1500
        </th>
        <th>
        Towal
        </th>
        <th>
        $ 500
        </th>
        <th>
        $200
        </th>
        <th>
        $ 1800
        </th>
      </tr>
      {/* row 2 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={img1} />
              </div>
            </div>
          </div>
        </td>
        <td >
         Abul-Bashar
          <br/>
        </td>
        <td >101</td>
        <th>
        10-10-2023
        </th>
        <th>
        $ 1500
        </th>
        <th>
        Towal
        </th>
        <th>
        $ 500
        </th>
        <th>
        $200
        </th>
        <th>
        $ 1800
        </th>
      </tr>
      {/* row 3 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={img}alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>                   
            </div>
          </div>
        </td>
        <td >
         Abul-Bashar
          <br/>
        </td>
        <td >101</td>
        <th>
        10-10-2023
        </th>
        <th>
        $ 1500
        </th>
        <th>
        Towal
        </th>
        <th>
        $ 500
        </th>
        <th>
        $200
        </th>
        <th>
        $ 1800
        </th>
      </tr>
      {/* row 4 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td >
         Abul-Bashar
          <br/>
        </td>
        <td >101</td>
        <th>
        10-10-2023
        </th>
        <th>
        $ 1500
        </th>
        <th>
        Towal
        </th>
        <th>
        $ 500
        </th>
        <th>
        $200
        </th>
        <th>
        $ 1800
        </th>
      </tr>
    </tbody>
    
  </table>
</div>
        </div>
    );
}

export default CheckOUt;