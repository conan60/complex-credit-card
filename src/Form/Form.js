import React from 'react';

const Form = (props)=>{
    return(
        <div className="d-flex-column">
          <label htmlFor="name">Name : </label>
          <input onChange={props.handlers.handleNameChange} id="name" type="text" />
          <div style={{color:"red"}}>{props.errors.nameError}</div>
          <label htmlFor="date">Date : </label>
          <input onKeyUp={props.handlers.handleDateChange} id="date" type="text" placeholder="MM/YY" />
          <div style={{color:"red"}}>{props.errors.dateError}</div>
          <label htmlFor="number">Number : </label>
          <input onChange={props.handlers.handleNumberChange} id="number" type="text" />
          <div style={{color:"red"}}>{props.errors.numberError}</div>
        </div>
    )
}

export default Form;