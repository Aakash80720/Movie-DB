import React, { Component } from 'react'
import Banner from './Banner1';
import Info from './Info';
import './Info.css'


export default class Infos extends Component {
    state = {
        data : [],
        pics: [],
        trailer:[]
    }
    componentDidUpdate(prevProps, nextProps){
        if(prevProps.id != this.props.id){
            fetch(`https://imdb-api.com/en/API/Title/k_24xyzip8/${this.props.id}/Posters,Trailer,`)
            .then(res => res.json())
            .then(json => this.setState({data : json,pics:json.posters}))
            .catch(console.log(this.state.data));
        }
    }
    render() {
        console.log(this.state.pics)
        return (
         <div className = 'profiles'>
            {this.props.id ? <div>
                <Banner p = {this.state.pics}/>
                <div className = 'poster'>
                    <img src = {this.state?.data?.image} className = 'profile-img'/>
                    <div className = 'profile-desc'>
                        <p>{this.state?.data.title}</p>
                        <h6>{this.state?.data.tagline}</h6>
                    </div>
                    
                </div>
                <h4>Language:</h4>
                <p className ='tags'>{this.state?.data.languages}</p>
                <h4>Story Plot:</h4>
                <p className ='tags'>{this.state?.data.plot}</p>
                <Info vid = {this.state.data.trailer}/>
            </div>:null}
         </div>
             
            
        )
    }
}

