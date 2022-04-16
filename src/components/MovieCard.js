import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button} from 'react-bootstrap';
import '../style.css'




    const MovieCard = ({ card: { id,title,image,rating , Description },deleteHAndeler }) => {
      
      /* Delete movie Function by id (deleteHandler passed as props from App.js to MovieList to his child )*/ 
      const delteMovie = () => {
        deleteHAndeler(id);
      };
       
      return (
           
      <div className="card">
      <div className="card-image">
        
      <img src={image} alt="poster" width="250px"></img>
        
      </div>
                
        <div className="card-description">
              
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h3 style={{marginTop:'10px'}}> <FontAwesomeIcon icon={faStar} style={{ color: '#ebc334' }} /> {rating}</h3>
             
              <Button variant="warning" onClick={() => delteMovie()}>Remove </Button>
             
            </div>
              <h2> {title}</h2>
              <p> {Description}</p>
             
            </div>
            
    </div>
  )
}

export default MovieCard;

