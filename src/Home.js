import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Home.css"
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Cardcart from './Cardcart';
import Loader from './Loader';

/* let currentRemindersData = [
  {
    "id": 1,
    "title": "book Ticket",
    "details": "Need to get book.",
    "dueDate": "2023-09-25T00:00:00.000+00:00",
    "priority": "Medium",
    "createdDate": null
  },
  {
    "id": 2,
    "title": "Sing song",
    "details": "Sing a song.",
    "dueDate": "2023-10-12T00:00:00.000+00:00",
    "completionDate": "2023-10-09T00:00:00.000+00:00",
    "priority": "Low",
    "createdDate": null
  },
  {
      "id": 40,
      "title": "Call Helpdesk",
      "details": "Inform about access issue and get it resolved.",
      "dueDate": "2023-10-31T00:00:00.000+00:00",
      "priority": "High",
      "createdDate": null
  },
  {
      "id": 41,
      "title": "TTD Ticket Booking",
      "details": "Tickets will be released on 25 Jan 2024 ",
      "dueDate": "2023-11-02T00:00:00.000+00:00",
      "priority": "High",
      "createdDate": null
  }
] */

function Home() {
  const [showCards, setShowCards] = useState(false);
  const [remindersData, setRemindersData] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const [editReminderItem, setEditReminderItem] = useState(null);

  const deleteReminderHandler = (deletedData) => {
    console.log(deletedData);
    const deletedId = deletedData.id;
    /* const filterData = remindersData.filter((item) => {
      return (item.id != deletedData.id)
    });
    setRemindersData([...filterData]); */
    axios.delete( 'http://localhost:8181/api/reminder/delete/'+deletedId)
      .then((res) => {
        console.log(res);
        if(res.data?.deleted) {
          setShowCards(true);
          loadRemindersData();
          //setRemindersData(currentRemindersData);
        } else {
          setShowCards(false);
          setRemindersData([]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const onEditInputControlHandler = (ev, editedReminder) => {
    console.log('edit input control changed');
    console.log(ev);
    const {name, value, type} = ev.target;
    const editReminderId = editedReminder.id;
    remindersData?.map((item) => {
      if(item.id === editReminderId) {
        //item.isCompletionDateShow = false;
        if(type === 'radio') {
          item.isCompleted = value;
          item.isCompletionDateShow = value=== 'yes'? true: false;
        } else {
          item[name] = value;
        }
      }
      return item;
    });
    setRemindersData([...remindersData]);
  }

  const editReminderHandler = (editedReminder) => {
    console.log(editedReminder, 'editMode');
    const editReminderId = editedReminder.id;
    remindersData?.map((item) => {
      if(item.id === editReminderId) {
        item.isEditMode = true;
      } else {
        item.isEditMode = false;
      }
      return item;
    });
    setRemindersData([...remindersData]);
    setEditReminderItem(editedReminder);
  }

  const updateReminder = () => {
    console.log('save reminder btn clicked');
    if(editReminderItem) {
      const body = {
        "id": editReminderItem.id,
        "title": editReminderItem.title,
        "details": editReminderItem.details,
        "dueDate":editReminderItem.dueDate,
        "priority": editReminderItem.priority,
        "createdDate": null
      }
      if(editReminderItem.isCompleted) {
        body.isCompleted = true;
        body.completionDate = editReminderItem.completionDate
      } else {
        body.isCompleted = null;
        body.completionDate = null;
      }
      setShowLoader(true);
    axios.put('http://localhost:8181/api/reminder/update/'+body.id, body)
      .then((res) => {
        console.log(res);
        if(res) {
          setShowCards(true);
          setEditReminderItem(null);
          loadRemindersData();
        } else {
          setShowCards(false);
        }
        setShowLoader(false);
      })
      .catch((err) => {
        console.log(err);
        setShowLoader(false);
      });
    }
  }

  function loadRemindersData() {
    setShowLoader(true);
    let url;
    //url = 'https://jsonplaceholder.typicode.com/posts';
    url = 'http://localhost:8181/api/reminder/current';
    axios.get(url)
      .then((res) => {
        console.log(res.data);
        console.log(res);
        if(res?.data.length > 0) {
          setShowCards(true);
          
          const remainderData = res.data;
          //const remainderData = currentRemindersData;
          remainderData?.map((item) => {
            item.isEditMode = false;
            item.isCompleted = item.completionDate? 'yes': 'no';
            item.isCompletionDateShow = item.completionDate? true: false;
            item.dueDate = getDateHandler(item.dueDate);
            const completionDate = item.completionDate? item.completionDate: '';
            item.completionDate = getDateHandler(completionDate);
            return item;
          })
          setRemindersData(remainderData);
        } else {
          setShowCards(false);
          setRemindersData([]);
        }
        setShowLoader(false);
      })
      .catch((err) => {
        console.log(err);
        setShowLoader(false);
      });
  }

  const getDateHandler = (date) => {
    let dateStr = date? new Date(date): new Date();
    const dd = String(dateStr.getDate()).padStart(2, '0');
    const mm = String(dateStr.getMonth() + 1).padStart(2, '0');
    const yyyy = dateStr.getFullYear();

    dateStr =  yyyy + '-' + mm + '-' + dd;
    return dateStr;
  }

  useEffect(() => {
    loadRemindersData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='py-4 container main-layout'>
      <h3 className='text-center'>Current Reminders</h3>
      <div className='buttons'>
        <Link to="/new-remainder">
          <Button variant="primary" size="sm" className='btn'>
            Add Remainder</Button></Link>
        <Button variant="primary" size="sm" className='btn' onClick={updateReminder}>
          Save Remainder
        </Button>
      </div>
        {showCards && !showLoader?
        <div>
          <Cardcart reminderData={remindersData} deleteActionHandler={deleteReminderHandler} editActionHandler={editReminderHandler} editInputControlActionHandler={onEditInputControlHandler} />
        </div>
        :<div className='text-center mt-4'>
          {
            showLoader? <Loader /> : <h3>No Data</h3>
          }
          </div>
        }
    </div>
  )
}

export default Home