import React from 'react';
import "./AddRemind.css";
import { BiTrash, BiPencil } from "react-icons/bi";

function RemindCard({reminderData, deleteActionHandler, editActionHandler, editInputControlActionHandler}) {
  console.log(reminderData, 'reminderComp');
  
    const resp = reminderData.map((item) => {
      return(
      <div className='AddRemind' key={item.id}>
        <h2 className='heading-title'>
          {item?.title}
        </h2>
        <div className='AddRemind-little-title'>
            <label className='card-label'>Details</label>
          <input type='text' name='details' value={item?.details} className='input-text-btn' onChange={(ev) => {editInputControlActionHandler(ev, item)}} readOnly={!item.isEditMode} /><br />
            <label className='card-label'>Due Date</label>
          <input type='date'  name='dueDate' value={item?.dueDate} className='input-text-btn' onChange={(ev) => {editInputControlActionHandler(ev, item)}} readOnly={!item.isEditMode} /><br />
            <label className='card-label'>Priority</label>
          <select className='input-text-btn select-control'  name='priority' readOnly={!item.isEditMode} value={item?.priority} onChange={(ev) => {editInputControlActionHandler(ev, item)}}>
            {item.isEditMode? <><option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option></>:
            <option value={item?.priority}>{item?.priority}</option>}
          </select>
          <br />  
          <label className='card-label'>Completed</label>
          <input type='radio' name="completed" className='input-text-btn' readOnly={!item.isEditMode} onChange={(ev) => {editInputControlActionHandler(ev, item)}} /> <span className="mr-2">Yes</span>
          <input type='radio' name="completed" className='input-text-btn ms-4 d-inline-block' readOnly={!item.isEditMode} /> <span>No</span>
          <br />
          <label className='card-label'>Completion Date</label>
          <input type='date' className='input-text-btn'  name='completionDate' readOnly={!item.isEditMode} onChange={(ev) => {editInputControlActionHandler(ev, item)}} />
        </div>
        <div className='addremind-icons'>
          <BiPencil className='icons' onClick={() => {editActionHandler(item)}}></BiPencil>
          <BiTrash className='icons' color='red' onClick={() => {deleteActionHandler(item)}}></BiTrash>
        </div>
      </div>

      )
    })

    return(
      <>
      {resp? resp: null}
      </>
    )
}

export default RemindCard;
