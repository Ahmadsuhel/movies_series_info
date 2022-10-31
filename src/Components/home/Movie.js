import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { fetchMovie , setLoading} from '../../actions/SearchAction';
import Spinner from '../layout/Spinner';
import Helmet from 'react-helmet';



export class Movie extends Component {

  
   
    componentDidMount(){
        this.props.fetchMovie(this.props.match.params.id)
        this.props.setLoading();
    }
  render(
    
  ) {
      const {loading , movie}=this.props;
 
     
      let movieInfo=(
        <div className='container'>
        <div className='row'>
      
          <div className='col-sm-4 card card-body bg-dark  rounded'>

          <img src={movie.Poster} alt='poster' className='thumbnail'/>
        </div>

      
        
        <div className='col-sm-8 ' >
            <h2 className='mt-sm-0 mt-4 text-list text-center bg-dark' >{movie.Title}</h2>
           
            <ul className='list-group  '>
                <li className='list-group-item  '>
                    <strong >Genre:</strong>{movie.Genre}
                </li>
                <li className='list-group-item'>
                <strong>Released:</strong>{movie.Released}
                </li>
               
                <li className="list-group-item">
                <strong>Rated:</strong>{movie.Rated}
              </li>

                <li className='list-group-item'>
                <strong>IMDB Rating:</strong>{movie.imdbRating}
                </li>

                <li className='list-group-item'>
                <strong>Director:</strong>{movie.Director}
                </li>

                <li className='list-group-item'>
                <strong>Type:</strong>{movie.Type}
                </li>

                <li className='list-group-item'>
                <strong>Awards:</strong>{movie.Awards}
                </li>

                

                <li className='list-group-item'>
                <strong>Language:</strong>{movie.Language}
                </li>
                <li className='list-group-item'>
                <strong>Country:</strong>{movie.Country}
                </li>

                <li className='list-group-item'>
                <strong>Writer:</strong>{movie.Writer}
                </li>
                <li className='list-group-item'>
                <strong>Actors:</strong>{movie.Actors}
                </li>
            </ul>
         
           

        </div>
      </div>

      <div className='row'>
          <div className='card card-body mt-5 mb-4 bg-darki text-white'>
             <div className='col-md-12   '>
              <h2 className='text-center text-justify '>About</h2> 
             <p> {movie.Plot}</p>
              <hr />
            <div className='text-center mt-3'>
            <a href={'https://www.imdb.com/title/' + movie.imdbID}
              target='_blank' rel='noopener noreferrer' 
              className='btn text-white btn-secondary me-2 '>View On IMDB </a>
              <Link to='/' className='btn btn-default text-light go-back  '>GO Back TO Search</Link>
            </div>
          </div>
          </div>
         

      </div>

      </div>
      );

      let content=loading?<Spinner/>:movieInfo
    
    return (
      
       <div>
         
         <Helmet>
         <title>About Movies</title>
         <meta name='description' content='know more about Movies,Tv Series'/>
         <meta name='keywords' content='Movies Yeas,Released,title,Rated,Awards,Actors,Director,writer'/>
        </Helmet>
         {content}</div>
    );
  }
}
const mapStateToProps=state=>({
    loading:state.movies.loading,
    movie:state.movies.movie
})

export default connect(mapStateToProps,{fetchMovie,setLoading}) (Movie)