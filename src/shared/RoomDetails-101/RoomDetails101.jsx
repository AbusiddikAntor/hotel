import React from 'react';

function RoomDetails101(props) {
    return (
        <div>
            <h1 className='text-center text-2xl mt-4 mb-10'>Room Details 101 : </h1>


            <div className="overflow-x-auto">
  <table className="table ">
    <thead>
      <tr>
        <th></th> 
        <th>Name</th> 
        <th className='text-center'>Check-In</th> 
        <th className='text-center'>Time</th> 
        <th className='text-center'>Guest NO</th> 
        <th className='text-center'>Room Category</th> 
        <th>Status</th>
      </tr>
    </thead> 
    <tbody>
      <tr>
        <th>1</th> 
        <td>Jamsed</td> 
        <td>12-10-2023</td> 
        <td>12.00 PM</td> 
        <td className='text-center'>00</td> 
        <td className='text-center'>Delux</td> 
        <td>Active</td>
      </tr>
      <tr>
        <th>2</th> 
        <td>Jomir</td> 
        <td>11-10-2023</td> 
        <td>11.00Am</td> 
        <td className='text-center'>01</td> 
        <td className='text-center'>Suite</td> 
        <td>Active</td>
      </tr>
    
    </tbody> 

  </table>
</div>


        </div>
    );
}

export default RoomDetails101;