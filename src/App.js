import React, { Component } from 'react'
import Navbar from './Components/layout/Navbar'
import Landing from './Components/home/Landing'
import Footer from './Components/layout/Footer'
import Movie from './Components/home/Movie'
import store from './store'
import { Provider } from 'react-redux';
import { HashRouter as Router,Route } from 'react-router-dom'
import './App.css';
import Helmet from 'react-helmet'

export default class App extends Component {
  render() {
    return (
      <div>

        <Helmet>
          <title>Movies Info Hub</title>
          <meta name='description' content='Get Info For All Movies Ans Series'/>
          <meta name='keywords' content='Movies,Tv Series,Search Movies'/>
        </Helmet>
         <Provider store={store}>
        <Router>
          <div>
        <Navbar/>
      <Route exact path='/' component={Landing}/>
      <Route exact path='/movie/:id' component={Movie}/>
    
        <Footer/>
          </div>
        </Router>
        </Provider>
      </div>
    )
  }
}
