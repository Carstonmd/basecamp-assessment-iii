import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pumpkin from './Pumpkin/Pumpkin';

class App extends Component
{

    angryPumpkin() {
        var Angry = document.getElementById("pumpkinBoy");
        Angry.setAttribute("src", "https://i.kym-cdn.com/entries/icons/original/000/010/521/no__i_don__t_want_that__by_dogmansp-d54h2st.png");
        document.getElementById("Hungry").innerHTML = "";
        document.getElementById("Burger").innerHTML = "NO!!! I DONT WANT THAT!!!";
    };
    render() {
    return (
      <div className="App">
            <h1 id="Hungry">I'm very hungry.</h1>
            <Pumpkin />
            <p id="Burger">Give me the HAMBURGER</p>
            <button onClick={this.angryPumpkin}>Sandwich</button>
      </div>
    );
  }
}

export default App;
