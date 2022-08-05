import React from 'react'
import { useState } from 'react'
import axios from './axios'
import Infos from './Infos'
import './Search.css'
import { Link, Route, Switch, useHistory } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router } from 'react-router-dom';

function Search() {
    const [search, setSearch] = useState(null)
    const [searchmovie, setSearchmovie] = useState([])
    const [id, setId] = useState()
    // const [state, setstate] = useState(false)
    const history = createBrowserHistory({forceRefresh:true})
        async function fetchData(i) {
            const request = await axios.get(`/SearchMovie/k_24xyzip8/${i}`);
            setSearchmovie([searchmovie,request.data.results]);
            return request;      
          }

    const handleSubmit = (event) =>{
        event.preventDefault()
        fetchData(search)
    }
    const onclickhandle = (e) =>
    {
       setId(e)
    //    setstate(true)
       history.push({pathname:'/Search#searchInfo'})
    }
    return (

        <div className ='search'>
            <form className ="search-bar" onSubmit = {handleSubmit}>
                <center>
                    <input type='text' onChange = {e => setSearch(e.target.value)}
                    value = {search}/>
                </center>          

            </form>
            { searchmovie?.map(function mapper(movie,i){

                    var data = Array?.from(movie)
                    return(
                        data?.map((mov,j)=>{

                        return(
                            <div key ={i} className ='search-content'>                            
                                <span className = 'content'>
                                    <img className ='search-poster' src={mov?.image} onClick ={()=>onclickhandle(mov?.id)} />
                                                              
                                <h3 className = 'search-descriptions'>{mov?.title} 
                                <h4>{mov?.description}</h4>
                                </h3>                          
                                </span>
                            </div>

                        )
                        })
                    )

                    })
                    }
                    <Router>
                        <Route path ="/Search" isAuthed={true} />
                            <div id = 'searchInfo'>
                                 <Infos id = {id}/>
                            </div>                              
                           
                       
                    </Router>
                   
                         
                         
                         
                    
        </div>
    )
}

export default Search
