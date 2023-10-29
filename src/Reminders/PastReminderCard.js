import React from 'react';
import "../AddRemind.css"
import { BiTrash } from "react-icons/bi";

function PastReminderCard({ pastRemindersData, deleteActionHandler }) {
    console.log(pastRemindersData)

    const resp = pastRemindersData.map((item) => {
             
        
        var date = new Date(item.dueDate);
        var year = date.getFullYear();
        var month = date.getMonth() + 1; 
        var day = date.getDate();
        var dueDat =  month +'/'+(day < 10 ? '0' : '') + day +'/'+(month < 10 ? '0' : '')  +year  ;
      
        var cDate = new Date(item.completionDate);
        var cyear = cDate.getFullYear();
        var cmonth = cDate.getMonth() + 1; 
        var cday = cDate.getDate();
        var compDate =  cmonth +'/'+(cday < 10 ? '0' : '') + cday +'/'+(cmonth < 10 ? '0' : '')  +cyear  ;
        
        console.log(dueDat);
        return (

            <div className={'AddRemind ' + item.priority + '-priority-card'} key={item.id}>
                <h1 className='heading-title mb-0 text-truncate'>
                    {item?.title}
                </h1>
                <div className='AddRemind-body'>
                    <label className='card-label mb-4'>Details</label>
                    <span className='input-text-btn'>{item?.details}</span><br />
                    <label className='card-label mb-4'>Due Date</label>
                    <span className='input-text-btn'>{dueDat}</span><br />
                    <label className='card-label mb-4'>Priority</label>
                    <span className='input-text-btn'>{item?.priority}</span>
                    <br />
                    <label className='card-label mb-4'>Completed</label>
                    <span className='input-text-btn'>Yes</span>
                    <br />
                    <label className='card-label mb-4'>Completion Date</label>
                    <span className='input-text-btn'>{compDate}</span>


                </div>
                <div className='addremind-icons'>
                    {/* <BiPencil className='icons'></BiPencil> */}
                    <BiTrash className='icons' title='Delete Card' color='red' onClick={() => { deleteActionHandler(item) }}></BiTrash>
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