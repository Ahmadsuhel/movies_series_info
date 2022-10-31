import React, { Component } from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router-dom';
import './MovieCard.css'

 class MovieCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      postsPerPage: 5
    };
  }
  render() {
    const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;

    const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
    
    const currentPosts = this.state.movie.slice(indexOfFirstPost, indexOfLastPost);
       //Implement page numbers
       const pageNumbers = []

       for (let i = 1; i <= Math.ceil(this.state.posts.length / this.state.postsPerPage); i++) {
         pageNumbers.push(i);
       }
   
       //Set current page
       const setPage = (pageNum) => {
         this.setState({currentPage: pageNum})
       }

      const { movie }=this.props
    return (
     
     <>
         <div className='col-md-3 mb-5 ' id="movies">
       <Link to={'/movie/' +movie.imdbID} className='stl'>
      <div className='card card-body  text-center well  bg-dark  h-80 card-title'>
          <img className='mb-2 w-100' alt='Movie cover' src={movie.Poster}/>

          <Helmet>
          <title>{movie.Title}</title>
         <meta name='description' content={movie.Genre}/>
          </Helmet>
          <h5 className='mt-3'>
              {movie.Title} - {movie.Year}
          </h5>
          
      </div>
      </Link>
     </div>
     <div className="w-100 d-flex justify-around">
     {
       pageNumbers.map((pageNum, index) => (
         <span key={index} className={pageNum === this.state.currentPage ? "cursor-pointer d-flex align-items-center justify-center w-12 h-12 border-2 rounded bg-primary text-white" : "cursor-pointer d-flex align-items-center justify-content-center w-12 h-12 border-2 rounded"} onClick={() => {setPage(pageNum)}}>
           {pageNum}
         </span>
       ))
     }
   </div>
   </>

  
    
     
    )
    
  }
}


export default MovieCard;
