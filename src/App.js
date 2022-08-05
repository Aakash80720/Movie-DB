import React from "react";
import Row from "./Row";
import request from "./request";
import Banner from './Banner'
import Navbar from './Navbar'
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import './App.css';
import Infos from './Infos';
import Search from './Search';


function App() {
  return (
    <div className="app">
      <Router>
        <Navbar/>
        <Switch>
          <Route path = '/home' exact="/home">
              <Banner/><br/>
              {console.log(request.Actionmovies)}
              <Row title="ONLINE STREAMING" fetchUrl={request.netflixoriginals}/>
              <Row title="Most Popular" fetchUrl={request.trendingmovies}/>
              <Row title="COMMING SOON...." fetchUrl={request.upcomming}/>
              <Row title="Action movies" fetchUrl={request.Actionmovies}/>
              <Row title="Comedy movies" fetchUrl={request.comedymovies}/>
              <Row title="Horror movies" fetchUrl={request.horrormovies}/>
          </Route>
        </Switch>
          
          <Switch>
            <Route path ='/Search' component ={Search}/>              
          </Switch>
          <Switch>
            <Route path = '/Infos' component = {Infos}/>
          </Switch>

      </Router>
      
    </div>
  );
}

export default App;
//
// import "./App.css";
// function App() {
//   return (
//     <div className="app">
//       {/**Navbar */}
//       <Navbar/>
//       {/**Banner */}
//       <Banner/><br/>
//       {console.log(request.Actionmovies)}
//       <Row title="ONLINE STREAMING" fetchUrl={request.netflixoriginals}/>
//       <Row title="Most Popular" fetchUrl={request.trendingmovies}/>
//       <Row title="COMMING SOON...." fetchUrl={request.upcomming}/>
//     {/**<Row title="NEW ARRIVAL(TAMIL)" fetchUrl={request.newArrival}/> */}
//       <Row title="Action movies" fetchUrl={request.Actionmovies}/>
//       <Row title="Comedy movies" fetchUrl={request.comedymovies}/>
//       <Row title="Horror movies" fetchUrl={request.horrormovies}/>
//       {/* <Row title="NEW ARRIVAL(TAMIL)" fetchUrl={request.newArrival}/> */}
//       {/* <Row title="PREVIOUS YEAR (TAMIL)" fetchUrl={request.lastyearhits}/> */}
//     </div>
//   );
// }
// export default App;
