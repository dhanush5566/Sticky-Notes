import React from 'react';
import "../AddRemind.css"
import { BiTrash, BiPencil } from "react-icons/bi";

function PastReminderCard({ pastRemindersData, deleteActionHandler }) {
    console.log(pastRemindersData)

    const resp = pastRemindersData.map((item) => {
        return (
            <div className='AddRemind' key={item.id}>
                <h1 className='heading-title'>
                    {item?.title}
                </h1>
                <div className='AddRemind-little-title'>
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
                    <BiTrash className='icons' color='red' onClick={() => {deleteActionHandler(item)}}></BiTrash>
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