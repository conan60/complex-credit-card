import React from 'react';
import './App.css';
import Number from './Number/Number';
import Date from './Date/Date';
import Name from './Name/Name';
import Form from './Form/Form';


class App extends React.Component {

  constructor(props){
    super(props);
  this.state = {number : "****************" ,date : "**/**" , name : ""};
  }

  handleNumberChange = (event)=>{
    console.log(event.target.value)
    if(event.target.value.length<=16 && /^[0-9]*$/.test(event.target.value)){
      this.setState({
        number : Array.from(event.target.value).concat(Array.from(this.state.number).slice(event.target.value.length)),
        numberError : ""
      })
    }else{
      this.setState({numberError : "Card number must has 16 number"})
    }
  }
  handleNameChange = (event)=>{
    if(event.target.value.length<21){
      this.setState({name : event.target.value.toUpperCase(),nameError : ""})
    }else{
      this.setState({nameError : "Name must be less than 20 chars"})
    }
  }
  handleDateChange = (event)=>{
    if((event.target.value.length <2  && /^[0-9]*$/.test(event.target.value))
     || (event.target.value.length>2 && event.target.value.length<6 && /^[0-9]{2}\/[0-9]*$/.test(event.target.value))){
      this.setState({
        date : Array.from(event.target.value).concat(Array.from(this.state.date).slice(event.target.value.length)),
        dateError : ""
      });
    }else if(event.target.value.length===2){
      if(event.key !== 'Backspace'){
        console.log(event )
        event.target.value+="/";
      }
        
      this.setState({
        date : Array.from(event.target.value).concat(Array.from(this.state.date).slice(event.target.value.length)),
        dateError : ""
      });
    }else if(event.target.value.length===5  && /^[0-9]{2}\/[0-9]{2}$/.test(event.target.value) ){
      this.setState({
        date : Array.from(event.target.value).concat(Array.from(this.state.date).slice(event.target.value.length)),
        dateError : ""
      });
    }else{
      this.setState({dateError : "Date must be this format MM/YY"})
    }
  }

  render(){
      return (
      <div className="App">
        <div className="d-flex-column card">
          <img src="card.gif" alt="card"/>
          <Number number={this.state.number}/>
          <div className="d-flex">
            <Name name={this.state.name}/>
            <Date date={this.state.date}/>
          </div>
        </div>
        <Form handlers={{
          handleDateChange : this.handleDateChange,
          handleNameChange : this.handleNameChange,
          handleNumberChange : this.handleNumberChange
        }}
        errors={{
          dateError : this.dateError,
          numberError : this.numberError,
          nameError : this.nameError
        }}/>
      </div>
    );
  }
}

export default App;
