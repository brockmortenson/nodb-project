import React, { Component } from 'react';
import axios from 'axios';
import StealLightsaber from './StealLightsaber';

class Lightsabers extends Component {
    constructor(props){
        super(props);
        this.state = {
            lightsabers: []
        };
    }

    componentDidMount(){
        this.getLightsabers();
    }

    getLightsabers = () => {
        axios.get('/api/lightsabers').then(res => {
            this.setState({lightsabers: res.data})
        })
        .catch(err => console.log(err));
    }

    render(){
        const mappedLightsabers = this.state.lightsabers.map((lightsaber, index) => (
            <StealLightsaber 
                key={index}
                lightsaber={lightsaber}
                stealFn={this.props.stealFn}
                refreshFn={this.getLightsabers} />
        ))
        return(
            <div className='lightsaber-flex'>  {/* Copied the classname used in the Pokemon example given */}
                {mappedLightsabers}
            </div>
        )
    }
}

export default Lightsabers