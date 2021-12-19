
import './App.css';

import React from 'react'
class App extends React.Component {
    constructor(props){
        super(props)
        this.state = { fullName:"oussema oussema",bio:"I'll change the world again", imgSrc:"sa.jpg", profession:"Super Hero",count:0,shows:false}
            
    
    
      
    };
    afficherprofile=()=>{this.setState({shows:!this.state.shows})}


    componentDidMount(){
      
      setInterval(() => {
       {this.setState({count:this.state.count+1})}


      }, 1000);
   }
    
    render() {
      return <div > 
        
          <button onClick={()=>this.afficherprofile()}>{this.state.shows?"Hide profile":"Show profile"}  </button>
          {this.state.shows && <div>
          <h1>{this.state.fullName}</h1>
          <h2>{this.state.bio}</h2>
          <img  src={this.state.imgSrc} alt=""/>
          <h3>{this.state.profession}</h3>
          <h4>{this.state.count}</h4></div>}
          
          
          </div>
    }
   }
   export default App;
