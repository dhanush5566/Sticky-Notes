import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PastReminderCard from './PastReminderCard';
import Loader from '../Loader';



//let pastRemindersData = [];

function PastReminders() {

    const initialFormValues = {
      priority: '',
      val: ''
    }

    const [showCards, setShowCards] = useState(false);
    const [remindersData, setRemindersData] = useState([]);
    const [remindersDataClone, setRemindersDataClone] = useState([]);
    const [showLoader, setShowLoader] = useState(false);
    const [formValues, setFormValues] = useState(initialFormValues);
    const [disableBtn, setDisableBtn]= useState(false);

    const deleteHandler = (deletedData) => {
        console.log(deletedData, 'pastRemindersData');
        const deletedId = deletedData.id;
        setShowLoader(true);
        /* const filterData = remindersData.filter((item) => {
          return (item.id != deletedData.id)
        });
        setRemindersData([...filterData]); */
        axios.delete( 'http://localhost:8181/api/reminder/delete/'+deletedId)
          .then((res) => {
            console.log(res);
            if(res?.deleted) {
              setShowCards(true);
              loadRemindersData();
            } else {
              setShowCards(false);
              loadRemindersData();
            }
            //setShowLoader(false);
          })
          .catch((err) => {
            console.log(err);
            setShowLoader(false);
          });
    }

    function loadRemindersData(){
        setShowLoader(true);
        axios({
            // Endpoint to send files
            url: "http://localhost:8181/api/reminder/past",           
            method: "GET",
            headers: {
                // Add any auth token here
                authorization: "your token comes here",
            },
        })
            .then((res) => {
                console.log(res);
                if (res?.data.length > 0) {
                  const pastRemainderData = res.data;
                    setShowCards(true);
                    setRemindersData(pastRemainderData);
                    setRemindersDataClone(pastRemainderData);
                } else setShowCards(false);
                setShowLoader(false);
            })
            .catch((err) => {
                console.log(err);
                setShowLoader(false);
            });
    }

    const onChangeInputHandler = (ev) => {
      const {name, value} = ev.target;
      setFormValues({
        ...formValues,
        [name]: value
      })

      //console.log(formValues);
    }

    const handleSubmitHandler = (ev) => {
      ev.preventDefault();
      console.log(formValues);
      console.log(remindersData);
      const priority = formValues.priority;
      const val = formValues.val? formValues.val.toLowerCase(): '' ;
      const updatedItems = remindersData?.filter((item) =>{
        const titleLowercase = item.title.toLowerCase();
        if(priority && val) {
          return (item.priority === priority && titleLowercase.includes(val))
        } else if(priority) {
          return (item.priority === priority);
        } else {
          return (titleLowercase.includes(val));
        }
      })
      setRemindersData([...updatedItems]);
      if(updatedItems?.length === 0) {
        setShowCards(false);
        setShowLoader(false);
      }
      setDisableBtn(true);
    }

    const resethandler = () =>{
      setShowCards(true);
      setFormValues(initialFormValues);
      //console.log(pastRemindersData);
      setDisableBtn(false);
      setRemindersData(remindersDataClone);
    }

    useEffect(() => {
        loadRemindersData();
    }, []);

    return (
        <>
            <div className='py-4 container main-layout past-reminders-ct'>
                <h3 className='text-center'>Past Reminders</h3>
                <div className='px-3 mb-4'>
                  <form className="row gy-2 gx-3 align-items-center" onSubmit={handleSubmitHandler}>
                    <div className="col">
                      <label className="" for="autoSizingSelect">Select Category</label>
                      <select className="form-select" name="priority" onChange={onChangeInputHandler}>
                        <option selected>Choose...</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                      </select>
                    </div>
                    <div className="col">
                      <label className="" for="userval">Vlaue</label>
                      <input type="text" name="val" className="form-control"  placeholder="Value"  onChange={onChangeInputHandler} />
                    </div>
                    <div className="col mt-4">
                      <button type="submit" className="btn btn-primary" disabled={disableBtn? true: false}>Search Details</button>
                      <button type="reset" className="btn btn-secondary" onClick={resethandler}>Clear</button>
                  </div>
                  </form>
                </div>
                {showCards && !showLoader ?
                    <div className="cards d-flex flex-wrap">
                        <PastReminderCard pastRemindersData={remindersData} deleteActionHandler={deleteHandler} />
                    </div>
                    : <div className='text-center mt-4'>
                    {
                      showLoader? <Loader /> : <h3>No Data</h3>
                    }
                    </div>}
            </div>
        </>
    )
}

export default PastReminders;