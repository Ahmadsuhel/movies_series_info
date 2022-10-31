import React from 'react';
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className='navbar navbar-light bg-dark mb-5'>
            <div className='container'>
                <div className='navbar-header'>
                <Link to='/' className='navbar-brand  brand-text' id='imdb-logo'>MoviesInfoHub</Link>
                </div>
                <ul className="navbar-nav ms-auto mb-2 text-light d-inline-block">
                   
                    <div id='removelog'>
                    <li className ="nav-item d-inline-block me-4">
                     <i className='fab fa-react fa-io' id='react-logo'></i>
                    </li>
                    </div>

               </ul>
            </div>

        </nav>
    </div>
  )
}

export default Navbar

