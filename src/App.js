import React,{useState} from 'react'

import MovieList from './components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';


function App() {
  const [movies, setMovies] = useState([
    
    {
      id:1,
      title: "The Magnificent Seven",
      Description:
        "Seven gunmen from a variety of backgrounds are brought together by a vengeful young widow to protect her town from the private army of a destructive industrialist.",
      rating: 6.9,
      
      image:
        "https://fr.web.img5.acsta.net/pictures/16/08/25/12/14/261619.jpg",
    },
    {
      id:2,
      title: "The Vow",
      Description:
        "A car accident puts Paige in a coma, and when she wakes up with severe memory loss, her husband Leo works to win her heart again.",
      rating: 6.8,
      
      image:
        "https://m.media-amazon.com/images/M/MV5BMjE1OTU5MjU0N15BMl5BanBnXkFtZTcwMzI3OTU5Ng@@._V1_FMjpg_UX1000_.jpg",
    },
    {
      id:3,
    title: "Fury",
    Description:
      "A grizzled tank commander makes tough decisions as he and his crew fight their way across Germany in April, 1945.",
    rating: 7.6,
    
    image:
      "https://img3.cdn.cinoche.com/images/05df333d8640fba563f929bf855244b2.jpg",
    },
    {
      id:4,
      title: "The Godfather",
      Description:
        "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
      rating: 9.2,
      
      image:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
    },
  {
    id:5,
    title: "Jason Bourne : L'Héritage",
    Description:
      "An expansion of the universe from Robert Ludlum's novels, centered on a new hero whose stakes have been triggered by the events of the previous three films.",
    rating: 6.6,
  
    image: "https://www.dvdfr.com/images/dvd/covers/200x280/959909b07eb2b9c25087ecaf8f22ca6f/61828/old-jason_bourne_l_heritage.0.jpg",
  },
    {
    id:6,
    title: "Troy",
    image:
      'https://d3tvwjfge35btc.cloudfront.net/Assets/02/074/L_p0001707402.jpg',
    rating: 7.3,
    
    
    Description:
      "An adaptation of Homer's great epic, the film follows the assault on Troy by the united Greek forces and chronicles the fates of the men involved.",
  },
    {
    id:7,
    title: 'Gladiator',
    image:
      'https://fr.web.img6.acsta.net/medias/nmedia/18/68/64/41/19254510.jpg',
    rating: 8.5,
    Description:
      'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.',
  },
    {
    id:8,
    title: 'Jason Bourne',
    image:
      'https://m.media-amazon.com/images/M/MV5BNmE0YjJlNzctZjdiMy00ZWZmLWIzYzYtMGIxNDNjZDkxZmQyXkEyXkFqcGdeQXVyMTE5NzI0NDM@._V1_.jpg',
    rating: 7.2,
    Description:
      'The CIA most dangerous former operative is drawn out of hiding to uncover more explosive truths about his past.',
  },
    {
    id:9,
    title: 'The Equalizer',
    image:
      'https://fr.web.img5.acsta.net/pictures/14/08/28/16/00/452053.jpg',
    rating: 7.2,
    Description:
      'A man who believes he has put his mysterious past behind him cannot stand idly by when he meets a young girl under the control of ultra-violent Russian gangsters.',
  },
    {
    id:10,
    title: 'Equalizer 2',
    image:
      'https://musicart.xboxlive.com/7/c4d45000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080',
    rating: 6.7,
    Description:
      'Robert McCall serves an unflinching justice for the exploited and oppressed, but how far will he go when that is someone he loves?',
  },
    {
    id:11,
    title: 'Taken 3',
    image:
      'https://static.pix-geeks.com/2021/07/taken-3-9441-64721.jpg',
    rating: 6,
    Description:
      " Accused of a ruthless murder he never committed or witnessed, Bryan Mills goes on the run and brings out his particular set of skills to find the true killer and clear his name.",
 
    },
    {
      id:12,
      title: 'The Revenant',
      image:
        'https://fr.web.img5.acsta.net/c_310_420/o_club300-310x420.png_0_se/pictures/15/11/10/09/30/165611.jpg',
      rating: 8.5,
      Description: "A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team."
      
    },
    {
      id:13,
      title: 'John Wick Parabellum',
      image:
        'https://fr.web.img5.acsta.net/pictures/19/05/21/15/23/4992794.jpg',
      rating: 7.5,
      Description: "John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere."
      
    },
    {
      id:14,
      title: 'Braveheart',
      image:
        'https://img-4.linternaute.com/JglYFtzNVRha4dupWB5cGnEGxOA=/1500x/smart/cd83c3cfacfd412bbec073475e111b80/ccmcms-linternaute/11396553.jpg',
      rating: 8.5,
      Description: "Scottish warrior William Wallace leads his countrymen in a rebellion to free his homeland from the tyranny of King Edward I of England."
      
    }
  ])
  
  const [search, setSearch] = useState("");
  
  /* get what we type in search box*/ 
  
  const searchMovie = (event) => {
    setSearch(event.target.value);
  }

  
  /*create a new array for the new movie */
  
  const handelAdd = (newMovie) => {
    setMovies([...movies,newMovie])
    
  }
  /*Filter movie list by id as a primairy key*/
  
  const deleteHAndeler = (ID) => {
    setMovies(movies.filter((e) => e.id !== ID));
  };
   /* Sort by Title of movies*/ 
  const sortHandler = () => {

   setMovies ([...movies].sort((a, b) => a.title > b.title ? 1 : -1))
 }
  /*Sort by Rating Descendant*/
 const sortByRateDown = () => {

  setMovies ([...movies].sort((a, b) => b.rating - a.rating))
 }
 /*Sort by Rating Ascendant*/
 
 const sortByRateUp = () => {

  setMovies ([...movies].sort((a, b) => a.rating - b.rating))
 }
  return (
    
      
    <div className='container-fluid'>
      <div className='row'>

        <Filter searchMovie={searchMovie} sortHandler={sortHandler} sortByRateUp={sortByRateUp} sortByRateDown={sortByRateDown}/>
      

        <AddMovie handelAdd={handelAdd} />

        <MovieList movies={movies} search={search} deleteHAndeler={deleteHAndeler} />

       

      </div>
      </div>
      
  ) 
}

export default App;
