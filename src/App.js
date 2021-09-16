import React, { Component } from 'react'
// import Home from './pages/Home';
// import Business from './pages/Business';
// import Technology from './pages/Technology';
// import Entertainment from './pages/Entertainment';
// import Health from './pages/Health';
// import Science from './pages/Science';
// import Sports from './pages/Sports';
// import About from './pages/About';  

import {
  Switch,
  Route,
} from "react-router-dom";

import News from './components/News'
import NavBar from './components/NavBar'

export default class App extends Component {
   apiKey='b2affe7ca94e4ef6b933d554c132a672';
  
  
  render() {
    const pageSize=6;
    return (
      <>
        {/* By react router Simple way */}


          <NavBar />
        <Switch>
          <Route exact path='/' >
            <News key='general' apiKey={this.apiKey} pageSize={pageSize} country='us' category='general' />
          </Route>
         
          <Route exact path='/business' >
            <News key='business' apiKey={this.apiKey} pageSize={pageSize} country='us' category='business' />
            

          </Route>
          <Route  exact path='/technology' >
            <News key='technology' apiKey={this.apiKey} pageSize={pageSize} country='us' category='technology' />

          </Route>
          <Route  key='entertainment' exact path='/entertainment' >
            <News  apiKey={this.apiKey} pageSize={pageSize} country='us' category='entertainment' />

          </Route>
          <Route key='health' exact path='/health' >
            <News  apiKey={this.apiKey} pageSize={pageSize} country='us' category='health' />

          </Route>
          <Route exact path='/science' >
            <News  key='science' apiKey={this.apiKey} pageSize={pageSize} country='us' category='science' />

          </Route>
          <Route  key='sports' exact path='/sports' >
            <News  apiKey={this.apiKey} pageSize={pageSize} country='us' category='sports' />

          </Route>
          
        </Switch>
        {/* By Pages seperatly  */}
        {/* <Switch>
          <Route exact path='/' >
            <Home pageSize={pageSize} country='us' category='general' />
          </Route>
          <Route exact path='/about' >
          <About/>

          </Route>
          <Route exact path='/business' >
          <Business pageSize={pageSize} country='us' category='business' />

          </Route> 
          <Route exact path='/technology' >
       <Technology pageSize={pageSize} country='us' category='technology' />

          </Route> 
          <Route exact path='/entertainment' >
          <Entertainment pageSize={pageSize} country='us' category='entertainment' />

          </Route>
           <Route exact path='/health' >
          <Health pageSize={pageSize} country='us' category='health' />

          </Route>
           <Route exact path='/science' >
          <Science pageSize={pageSize} country='us' category='science' />

          </Route>
           <Route exact path='/sports' >
          <Sports pageSize={pageSize} country='us' category='sports' />

          </Route>
           <Route exact path='/general' >
          <Sports pageSize={pageSize} country='us' category='general' />

          </Route>
        </Switch> */}
      </>
    )
  }
}
