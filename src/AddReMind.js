import React from 'react';
import "./AddRemind.css";
import { BiTrash, BiPencil } from "react-icons/bi";

function RemindCard({reminderData, deleteActionHandler, editActionHandler, editInputControlActionHandler}) {
  console.log(reminderData, 'reminderComp');
  
    const resp = reminderData.map((item) => {
      return(
      <div className={'AddRemind '+item.priority+'-priority-card'} key={item.id}>
        <h2 className='heading-title mb-0 text-truncate'>
          {item?.title}
        </h2>
        <div className='AddRemind-body'>
            <label className='card-label'>Details</label>
          <input type='text' name='details' value={item?.details} className='input-text-btn input-control' onChange={(ev) => {editInputControlActionHandler(ev, item)}} readOnly={!item.isEditMode} /><br />
            <label className='card-label'>Due Date</label>
          <input type='date'  name='dueDate' value={item?.dueDate} className='input-text-btn input-control' onChange={(ev) => {editInputControlActionHandler(ev, item)}} readOnly={!item.isEditMode} /><br />
            <label className='card-label'>Priority</label>
          <select className='input-text-btn select-control input-control'  name='priority' readOnly={!item.isEditMode} value={item?.priority} onChange={(ev) => {editInputControlActionHandler(ev, item)}}>
            {item.isEditMode? <><option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option></>:
            <option value={item?.priority}>{item?.priority}</option>}
          </select>
          <br />  
          <label className='card-label'>Completed</label>
          <input type='radio' name={item.id} className='input-text-btn' disabled={!item.isEditMode} onChange={(ev) => {editInputControlActionHandler(ev, item)}} checked={item.isCompleted === 'yes'} value='yes' /> <span className="mr-2">Yes</span>
          <input type='radio' name={item.id} className='input-text-btn ms-4 d-inline-block' disabled={!item.isEditMode} onChange={(ev) => {editInputControlActionHandler(ev, item)}} checked={item.isCompleted === 'no'} value='no' /> <span>No</span>
          <br />
          { item.isCompletionDateShow?
          <>
            <label className='card-label'>Completion Date</label>
            <input type='date' className='input-text-btn input-control'  name='completionDate' value={item?.completionDate} readOnly={!item.isEditMode} onChange={(ev) => {editInputControlActionHandler(ev, item)}} />
          </>: null
          }
        </div>
        <div className='addremind-icons'>
          <BiPencil className='icons' title='Edit Card' onClick={() => {editActionHandler(item)}}></BiPencil>
          <BiTrash className='icons' title='Delete Card' color='red' onClick={() => {deleteActionHandler(item)}}></BiTrash>
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
