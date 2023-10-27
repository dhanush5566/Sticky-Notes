import React from 'react'
import { BiTrash,BiPencil } from "react-icons/bi";
import "./Renew.css"
function Renew() {
  return (
      <div className='Renew'>
          

      
         <h1 className='heading-title-renew'>
        ReNew Metro Card
      </h1>
      
      
      
      
      
      
      
      <div className='AddRemind-little-title'>
Details
      
        <input type='text' placeholder='call Security Office' className='input-text-btn' /><br/>
        DUe Date
        <input type='text' placeholder='call Security Office'  className='input-text-btn'/><br/>
    Priority 
      <select  className='input-text-btn'>
        <option value="njjed">Low</option>
        <option value="njjed">High</option>
      </select>
  <br/>  Completed
      <input type='radio' className='input-text-btn' /> Yes
      
      <input type='radio' className='input-text-btn'/> No
     <br/>Completed Date
        <input type='date' className='input-text-btn' />
    
      </div>
        
        
        <div className='addremind-icons-renew'>
          
          <BiPencil className='icons'></BiPencil>
          <BiTrash className='icons'></BiTrash>
          </div>
          </div>
    
  )
}

export default Renew;