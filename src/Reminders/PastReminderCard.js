import React from 'react';
import "../AddRemind.css"
import { BiTrash } from "react-icons/bi";

function PastReminderCard({ pastRemindersData, deleteActionHandler }) {
    console.log(pastRemindersData)

    const resp = pastRemindersData.map((item) => {
        return (
            <div className={'AddRemind '+item.priority+'-priority-card'} key={item.id}>
                <h1 className='heading-title mb-0 text-truncate'>
                    {item?.title}
                </h1>
                <div className='AddRemind-body'>
                    <label className='card-label mb-4'>Details</label>
                    <span className='input-text-btn'>{item?.details}</span><br />
                    <label className='card-label mb-4'>Due Date</label>
                    <span className='input-text-btn'>{item?.dueDate}</span><br />
                    <label className='card-label mb-4'>Priority</label>
                    <span className='input-text-btn'>{item?.priority}</span>
                    <br />
                    <label className='card-label mb-4'>Completed</label>
                    <span className='input-text-btn'>Yes</span>
                    <br />
                </div>
                <div className='addremind-icons'>
                    {/* <BiPencil className='icons'></BiPencil> */}
                    <BiTrash className='icons' title='Delete Card' color='red' onClick={() => {deleteActionHandler(item)}}></BiTrash>
                </div>
            </div>

        )
    })

    return (
        <>
            {resp ? resp : null}
        </>
    )
}

export default PastReminderCard;