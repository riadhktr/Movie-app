import React, { useState }  from 'react'
import { Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

/*AddMovie function get handelAdd as props from App.js */ 
const AddMovie = ({ handelAdd }) => {

  /*initialise the props the empty strings  */ 
  const [titles, setTitles] = useState("");
  const [posters, setPosters] = useState("");
  const [rate, setRate] = useState("");
  const [trailer, setTrailer] = useState("");
    
    const AddNewMovie = () => {
        handelAdd({
          
            id: Math.random(),
            title: titles,
            rating: rate,
            image: posters,
            Description:trailer        
        });
  };
  /*function toggle used to hide AddMovie component */
  const [toggle, setToggle] = useState(false);
  const handelToggle = () => {
    setToggle(!toggle)
  }

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
       
        <Button variant="outline-warning" onClick={()=>handelToggle()}>New Movie</Button>
      </div>
      {toggle && (<div style={{display:'flex', flexDirection:'column',marginLeft:'40%', marginTop:'50px',width:'300px' }}>
    
              
    < input
        type="text"
        placeholder="Add your movie title"
        onChange={(e) => setTitles(e.target.value)}
        /><br></br>
    < input
        type="text"
        placeholder="Add the movie picture URL"
        onChange={(e) => setPosters(e.target.value)}
        /><br></br>
        < input
        type="text"
        placeholder="Add the Rating "
        onChange={(e) => setRate(e.target.value)}
        /><br></br>
        < input
        type="text"
        placeholder=" Description of the movie "
        onChange={(e) => setTrailer(e.target.value)}
        />
        <br></br>
        
        
      
        
     <Button  onClick={() => AddNewMovie()} variant="outline-warning" style={{displa:'flex', flexDirection:'row'}}>Add</Button>
      
     </div>)}
      
      
      </>  
      )
}

export default AddMovie