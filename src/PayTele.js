import React from 'react'
import { BiTrash,BiPencil } from "react-icons/bi";
import "./Paytele.css"
function PayTele() {
  return (
       <div className='AddRemind'>

      
         <h1 className='heading-title-paytele'>
        Call Security Office
      </h1>
      
      
      
      
      
      
      
      <div className='AddRemind-little-title'>
Details
      
        <input type='text' placeholder='call Security Office' className='input-text-btn' /><br/>
        DUe Date
        <input type='text' placeholder='call Security Office'  className='input-text-btn'/><br/>
    Priority 
      <select  className='input-text-btn'>
        <option value="njjed">High</option>
        <option value="njjed">Low</option>
      </select>
  <br/>  Completed
      <input type='radio' className='input-text-btn' /> Yes
      
      <input type='radio' className='input-text-btn'/> No
     <br/>Completed Date
        <input type='date' className='input-text-btn' />
    
      </div>
        
        
        <div className='addremind-icons-paytele'>
          
          <BiPencil className='icons'></BiPencil>
          <BiTrash className='icons'></BiTrash>
      </div>
        

    
    
      </div>
  )
}

export default PayTele;