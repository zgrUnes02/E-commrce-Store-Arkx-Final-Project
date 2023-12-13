import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaTimes } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import ServiceCSS from './singleService.module.css';
import Navbar from '../../layouts/Navbar/Navbar';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllServices } from '../../redux/serviceSlice';
import { createServiceOrder } from '../../redux/orderSlice';

const SingleService = () => {

  const token = localStorage.getItem('token') ;
  const navigate = useNavigate() ;
  const { id } = useParams() ;
  const dispatch = useDispatch() ;

  useEffect(() => {
    dispatch(getAllServices()) ;
  },[])

  const services = useSelector(state => state.service.services) ;
  const service = services.find(service => service._id === id) ;

  //! Reservation
  const [timeSlots, setTimeSlots] = useState([]);
  const [reservationMessage, setReservationMessage] = useState('');

  const handleAddTimeSlot = () => {
    setTimeSlots([...timeSlots, { id: Date.now(), selectedDay: null }]);
  };

  const handleRemoveTimeSlot = (id) => {
    setTimeSlots(timeSlots.filter((slot) => slot.id !== id));
  };

  const handleDayChange = (selectedDay, id) => {
    setTimeSlots(
      timeSlots.map((slot) => (slot.id === id ? { ...slot, selectedDay } : slot))
    );
  };

  const handleReservation = () => {
    const hasSelectedDate = timeSlots.some((slot) => slot.selectedDay);

    if (hasSelectedDate) {
      dispatch(createServiceOrder(timeSlots)) ;
      setReservationMessage('Reservation successful! Waiting for the confirmation email');
      setTimeout(() => {
        navigate('/') ;
      }, 1000);
    } else {
      setReservationMessage('Please select a date before making a reservation.');
    }
  };

  return (
    <React.Fragment>
      <Navbar/>
    <div className = {`${ServiceCSS.cardwrapper} container p-4`}>

      <div className = "row">
    
        <div className = {`${ServiceCSS.productimgs} col-md-6`}>
          <div className = {ServiceCSS.imgdisplay}>
            <div className = {ServiceCSS.imgshowcase}>
              <img src={service.service_image[0]} alt="..."/>
            </div>
          </div>
        </div>
    
        <div className = "col-md-6 p-4 d-flex flex-column">
          <h2 className = {ServiceCSS.producttitle}> { service.service_name } </h2>

          <div className = {ServiceCSS.productprice}>
            <p>{service.price} MAD/Hr</p>
          </div>
      
          <div className = {ServiceCSS.productdetail}>
            <div className = {ServiceCSS.purchaseinfo}>

              {
                token ? <>
                  <button type="button" className={`${ServiceCSS.btn} mb-4`} onClick={handleAddTimeSlot}>
                        Add Time
                  </button>

                  <button type="button" className={`${ServiceCSS.btn} mb-4`} onClick={handleReservation}>
                      Reservation
                  </button>
                </> : 
                <>
                  <button type="button" className={`${ServiceCSS.btn} mb-4`} disabled>
                    Add Time
                  </button>

                  <button type="button" className={`${ServiceCSS.btn} mb-4`} disabled>
                    Reservation
                  </button>
                </>
              }


                  <div className={ServiceCSS.list}>
                    {timeSlots.map((slot) => (
                      <div key={slot.id} className={`${ServiceCSS.reserve} mb-2  justify-content-between px-3`}>
                        <DatePicker
                          className="mob mb-2"
                          selected={slot.selectedDay}
                          onChange={(date) => handleDayChange(date, slot.id)}
                          dateFormat="EEEE"
                          placeholderText="Select a day"
                        />
                        <div className={ServiceCSS.date}>
                          <div className="mob">
                            <label className="text-grey mr-1">From </label>   <input className="ml-2" type="time" name="from" />
                          </div>
                          
                          <div className="mob mb-2">
                            <label className="text-grey mr-4">To </label>    <input className="ml-1" type="time" name="to" />
                          </div>

                          <div
                            className="mt-1 cancel text-danger "
                            onClick={() => handleRemoveTimeSlot(slot.id)}
                          >
                            <FaTimes size={25} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {reservationMessage && (
              <div className={reservationMessage.includes('successful') ? 'alert alert-success mt-3' : 'alert alert-danger mt-3'} role="alert">
                {reservationMessage}
              </div>
            )}

         <p>
            You must log in to book the stadium !
          </p>
       </div>

          <ul>
            <li> Category : <span style={{ textTransform:'capitalize' }}> {service.subcategory_id.subcategory_name} </span></li>
            <li> Location : <span style={{ textTransform:'capitalize' }}> {service.city} </span></li>
            <li> Capacity : <span> {service.option} </span></li>
          </ul>

        </div>
      </div>
    </div>
  </div>
  </React.Fragment>
   
  );
};

export default SingleService;