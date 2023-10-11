
import React, {useState} from 'react';
import food from "../../../assets/";
import food1 from "../../../assets/food2.jpeg";
import food2 from "../../../assets/food3.jpg";
import food3 from "../../../assets/food4.jpg";
import food4 from "../../../assets/food5.webp";
import food5 from "../../../assets/food6.jpg";
import food6 from "../../../assets/food1.jpeg";




const SearchButton = () => {

 const [searchInput, setSearchInput] = useState("");

 const countries = [

  { name: "Chiken", price: 100, img:food1 },
  { name: "Chiken Currey", price: 100 , img:food2 },
  { name: "Vegetable", price: 100 ,img:food3 },
  { name: "Soup", price: 100 , img:food },
  { name: "Tometo", price: 100, img:food4  },
  { name: "Chiken", price: 100 , img:food5 },
  { name: "Chiken Currey", price: 100 ,img:food6  },
 

];

const handleChange = (e) => {
  e.preventDefault();
  setSearchInput(e.target.value);
};

if (searchInput.length > 0) {
    countries.filter((country) => {
    return country.name.match(searchInput);
});
}

return <div>

<input
   type="search"
   placeholder="Search here"
   onChange={handleChange}
   value={searchInput} 
   className='input'/>

<table>
  <tr>
    <th>Country</th>
    <th>Continent</th>
  </tr>

{countries.map((country,index) => {

<div>
  <tr>
    <td>{index}</td>
    <td>{country.name}</td>
    <td>{country.continent}</td>
  </tr>
</div>

})}
</table>

</div>


};

export default SearchButton;