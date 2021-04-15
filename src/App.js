import React, { Component } from 'react';
import './App.css';
import Modal from "./Components/Calendar/Model";
import Calendar from './Components/Calendar/';

const style = {
  position: "relative",
  margin: "50px auto"
}


class App extends Component {
  
  onDayClick = (e, day) => {
   
    document.getElementById("myForm").style.display = "block";
    document.getElementById("eventId").innerText =  day +"th Day";
  }

  handleClick() {
    document.getElementById("myForm").style.display = "none";
  }
  
  modalOpen() {
    this.setState({ modal: true });
  }

  modalClose() {
    this.setState({
      modalInputName: "",
      modal: false
    });
  }
  render() {
    return (
      <div className="App">
        <Calendar style={style} width="302px"  
         onDayClick={(e, day)=> this.onDayClick(e, day)}/>  

           <div class="form-popup" id="myForm">
             <form class="form-container">
             <h1>Add Event</h1>
              <label id="eventId" for="Event"><b>Enter Your Event</b></label>
              <input type="text" placeholder="Enter Your Event" required />
            <button type="submit" class="btn">Add Event</button>
           <button type="button" class="btn cancel" onClick={this.handleClick}>Close</button>

             </form>
           </div>

              </div>

             
      
    );
  }
}

export default App;
