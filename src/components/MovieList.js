import React from 'react'
import MovieCard from './MovieCard';


const MovieList = ({movies,search,deleteHAndeler}) => {


	return (
		<>
			
			{/*Filtring movie list with (name and rating)  */}
			
		<div style={{ display: 'flex', flexWrap: 'wrap' }} > 
            
		{movies.filter((ele)=>ele.title.toLowerCase().includes(search.toLowerCase().trim()) || ele.rating.toString().toLowerCase().includes(search.toLowerCase().trim()) ).map((element,index) => (
			<MovieCard card={element} deleteHAndeler={deleteHAndeler }/>
					
				
		))}
				
				
		
		</div>
		
		</>
			);
};

export default MovieList;