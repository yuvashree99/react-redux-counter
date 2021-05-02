import React, { Component } from 'react';

class Counter extends Component {
   render() {
      const {counter,increment,decrement,reset} = this.props;
      return (
         <div className = "App">
            <div className="product" >
            <br/>
            <img id="air" src="MV7N2.jpeg" alt="airpod" width="200" height="250"/>
            <p>APPLE AIRPODS WITH CHARGING CASE</p>
            <p>$200</p>
            <hr/>
            <div>{counter}</div>
            <div id="buttons">
               
               <button onClick = {increment}>+</button>
               <button onClick = {decrement}>-</button>
               <button onClick = {reset}>Reset</button>
            </div>
            </div>
            <br/>
         <div className="product1">
            <br></br>
           <img id="ear" src="earpod.png" alt="earpod" width="200" height="250" />
           <p>APPLE EARPODS WIRED</p>
           <p>$100</p>
           <hr/>
           <div>{counter}</div>
            <div id="buttons">
               
               <button onClick = {increment}>+</button>
               <button onClick = {decrement}>-</button>
               <button onClick = {reset}>Reset</button>
            
            </div>
         </div>
         </div>
      );
   }
}
export default Counter;
