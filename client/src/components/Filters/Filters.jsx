import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {orderBy} from "../../redux/actions"


function Filters() {
  const dispatch = useDispatch();
  const productos = useSelector((state) => state.products);



const handleSelect = (e) => {
  var order = (e.target.value)
  dispatch(orderBy(order))
   //order(e.target.value) = (order) => dispatch(orderBy(order)); ;
  };


 


//console.log("esto es de filtros " + productos?.name)

  return (
    <div >
      <select onChange={handleSelect}  name="" id="">
        <optgroup label="Alphabetic">
          <option value="A-Z">A - Z</option>
          <option value="Z-A">Z - A</option>
        </optgroup>
        </select>
        

        <select onChange={handleSelect}  name="" id="">
        <optgroup label="Generos">
          <option value="M">Male</option>
          <option value="F">Female</option>
          <option value="U">Unisex</option>
        </optgroup>
        </select>
        
        <select onChange={handleSelect}   name="" id="">
        
        <optgroup label="Marcas">
          <option value="Gucci">Gucci</option>
          <option value="Nike">Nike</option>
          <option value="Adidas">Adidas</option>
        </optgroup>
        </select>

        <select onChange={handleSelect}  name="" id="">
        <optgroup label="Categorias">
          <option value="Caps">Caps</option>
          <option value="T-shirts">t-shirt</option>

        </optgroup>
        </select>
      


      
    </div>
  );
}

export default Filters
