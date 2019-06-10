import React, {Component} from 'react';
import './reset.css';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      menuStatus: "drop-down-menu"

    }
  }
  handleClick = () =>{
    if(this.state.menuStatus === "drop-down-menu-open") {
      this.setState({menuStatus: "drop-down-menu-closed"})
    } else {
      this.setState({menuStatus: "drop-down-menu-open"})
    }

  }
  render () {
  return (
    <div>
    <nav>
      <ul>
        <div>
          <li>Start Bootstrap</li>
        </div>
        <li className="menu-text">Services</li>
        <li className="menu-text">Portfolio</li>
        <li className="menu-text">About</li>
        <li className="menu-text">Team</li>
        <li className="menu-text">Contact</li>
        <li>
            <img 
            onClick={this.handleClick}
            src="https://previews.dropbox.com/p/thumb/AAfcmuI2BLX3AHrgt0dK8exzdL2mO2yeiSXxBUwHS4PsaUgnLtoO24VzksiqPUoBDSZh6cxGI5OcsxKZ9NjUDyQpEHMWRylRViigmBEu5jt_rCvNqr3q6X5nN-Be9yLi2fdtvlAU9O5En63GJqrU4Es6rH8Fsl4VSKpKcnG9XPa3boHdnZunqqlVaSFKOLjTu2WLvVEoKXJR6Uc1bQhAyvmZq06u2dVKqIE_ZSnmVuoOKFymPaeWqsyUu9iHQmQYhHFVm692c8xP3qHG9gpr9iwmwkJ-TkoCf4SX_xiFE9uL4m0y-dc4fRUudaFwNKh09QFisfRdGeagS3j4V7inAifH_Kxjvr2tDTitAzPM83CyTnGyng856fJMh32FakxXehLxyZiI2zk_a3xH0B3SHkni6nfz-DViUozn0OJi8Ds_kg/p.png?fv_content=true&size_mode=5" 
            alt="yellow-menu" />
          </li>
          <div className={this.state.menuStatus}> 
          <ul className ="menu-down">
            <li>Services</li>
        <li >Portfolio</li>
        <li >About</li>
        <li >Team</li>
        <li >Contact</li></ul>
          
          </div>
      </ul>
    </nav>
    <p className="middle">
      <h3>Welcome To Our Studio!</h3>
      <h1>IT'S NICE TO MEET YOU</h1>
    </p>
    </div>
  );
}
}

export default App;
