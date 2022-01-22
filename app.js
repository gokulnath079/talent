import React from "react";
  
class App extends React.Component {
 call() {
   alert("Welcome to Geeks for Geeeks!");
 }
 render() {
  
   // Rendering a button
   return (
     <button onClick={this.call}>Click the button!</button>
   );
 }
}
  
export default App;
