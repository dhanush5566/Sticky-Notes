import React from 'react'
import RemindCard from './AddReMind';
import "./Cardcart.css"
function Cardcart({reminderData, deleteActionHandler, editActionHandler, editInputControlActionHandler}) {

  return (
      <div className='cards mt-2 d-flex flex-wrap'>
          <RemindCard reminderData={reminderData} deleteActionHandler={deleteActionHandler} editActionHandler={editActionHandler} editInputControlActionHandler={editInputControlActionHandler} />
          {/*  <Renew />
            <PayTele/> */}
      </div>
  )
}

export default Cardcart;