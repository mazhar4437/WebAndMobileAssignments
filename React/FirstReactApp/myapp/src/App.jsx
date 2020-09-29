import React, { Component } from 'react';
import Header from './Header.jsx';
import './App.css';
import Footer from './Footer';
import BasicTextFields from './TextField';
import TextField from '@material-ui/core/TextField';


class App extends Component {

constructor()
{
  super()
  this.state = {
    name : "Mazhar",
    email : "mazhar@gmail.com",
    value : ''
  }
  

}

set_Data = () =>
{
  this.setState({
    name : this.state.value
   
  })
  console.log(this.state.name)
}

get_props = (props) => 
{
   console.log(props);
}

  render() {
   

    let todos = [{ text: "Mazhar" }, { text: "Basit" }]
    return (

      <div>
        <Header />

        <button type="button" class="btn btn-primary">Primary</button>
        <h1 style={{ color: "red", fontSize: "20px" }}>Main Component</h1>
        <ul>
          {todos.map((item, index) => {
            return (
              <li key={index}>
                {item.text}
              </li>


            )

            // console.log(item)
          }
          )}


        </ul>
        <BasicTextFields />
        <TextField onChange={(e)=>this.setState({value:e.target.value})} id="outlined-basic" label="Outlined" variant="outlined" />
    <button onClick={this.set_Data}>SetData</button>
      <Footer  get_props={this.get_props} page="Footer_page" name={this.state.name}  email={this.state.email} />

      </div>

    )
  }
}
export default App;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//          Hello World
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


