import React,{Component} from 'react';
class Footer extends Component
{
    render()
    {
        return(
         
    <div>


   <h2 className="Footer">External Footer Component</h2>
    <h6>Name : {this.props.name}</h6>
    <h6>Email : {this.props.email}</h6>
    <button onClick={()=>this.props.get_props("Data Sending Done")}>Send Props</button>
    </div>
         
        )
    }
}

export default Footer;