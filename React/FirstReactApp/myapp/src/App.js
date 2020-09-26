import React,{Component} from 'react';
import Header from './Header';
import './App.css';
import Footer from './Footer';
import BasicTextFields from './TextField';

class HeaderComponent extends Component
{
  render()
  {
    return(
      <div className="header">

        <h1>Header Component</h1>
      </div>
    )
  }
}

class FooterComponent extends Component
{
  render()
  {
    return(
<div>
  <h1 className="footer">
    Footer Component
  </h1>
</div>

    )
  }
}

class App extends Component
{

  render()
  {
    let todos = [{text:"Mazhar"},{text:"Basit"}]
    return(
   
      <div>
        <Header/>
        <HeaderComponent/>
        <button type="button" class="btn btn-primary">Primary</button>
       <h1 style={{color:"red",fontSize:"20px"}}>Main Component</h1>
         <ul>
            {todos.map((item,index)=>
             {
              return(
            <li key={index}>
            {item.text}
           </li>    
           
         
              )
          
              // console.log(item)
             }
             )}
            <li></li>
            <li></li>
            <li></li>
            <li></li> 
            <img src="../logo192.png" alt=""/>
         </ul>
         <BasicTextFields/>
         <Footer/>
        <FooterComponent/>
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


