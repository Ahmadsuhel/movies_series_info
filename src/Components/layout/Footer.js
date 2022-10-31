import React from 'react'

function Footer() {
  return (
    <div>
        <div className='row'>
            <div className='col-md-12'>
                <div className='footer p-3 mb-4 text-center  text-light '>
                    Developed By : <span className='text-warning font-weight-normal'>S K</span>, Using <i className='fab fa-react ' id='react-logo1'/> React Js &amp; Redux Js integrated with external movies data Api 
                    <a href='http://www.omdbapi.com' target='_blank' rel='noopener noreferrer'> OMDB</a>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Footer