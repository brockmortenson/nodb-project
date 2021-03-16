import React, { Component } from 'react';
import axios from 'axios';
import lightsaber from './lightsaber.json';
import Header from './Components/Header';
import Lightsabers from './Components/Lightsabers';
import Collection from './Components/Collection';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      addedLightsabers: []
    };

  }

  componentDidMount(){
    axios.get('/api/added-lightsabers').then(res => {
      this.setState({addedLightsabers: res.data})
    })
    .catch(err => console.log(err))
  }

  stealLightsabers = (lightsaber) => {
    axios.post('/api/added-lightsabers', {lightsaber: lightsaber}).then(res => {
      this.setState({addedLightsabers: res.data})
    })
    .catch(err => console.log(err))
  }

  changeColor = (id, newColor) => {
    let body = {color: newColor};

    axios.put(`/api/added-lightsabers/${id}`, body).then(res => {
      this.setState({addedLightsabers: res.data})
    })
    .catch(err => console.log(err))
  }

  removeLightsabers = (id) => {
    axios.delete(`/api/added-lightsabers/${id}`).then(res => {
      this.setState({addedLightsabers: res.data})
    })
    .catch(err => console.log(err))
  }

  render(){
    return(
      <div className='App'>

        <Header />
        <div className='lightsabers-with-collection'>
          <Lightsabers 
            stealFn={this.stealLightsabers}/>
        
          <Collection 
            addedLightsabers={this.state.addedLightsabers}
            colorFn={this.changeColor}
            removeFn={this.removeLightsabers} />
        </div>
      </div>
    )
  }

}

export default App;
