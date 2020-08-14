

import React, { useState } from "react";
import ListMovies from "./Components/ListMovies";
import Modal from "react-modal";
import StarRatingComponent from 'react-star-rating-component';


import "./App.css";


Modal.setAppElement('#root')

const App = () => {
  const [Input, setInput] = useState("");
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const [items, setItems] = useState([
    {
      // id: uuidv4(),
      name: "Harry potter",
      image: "https://mms.businesswire.com/media/20200515005354/fr/787777/4/HP_KeyArtPressRelease_Comms.jpg",
      rating: 3,
      year: "2005"
    },
    {
      // id: uuidv4(),
      name: "Avangers",
      image: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      rating: 5,
      year: "2015"
    },
    {
      // id: uuidv4(),
      name: "The god Father",
      image: " https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      rating: 4,
      year: "2012"
    },
    {
      // id: uuidv4(),
      name: "Iron Man",
      image: " https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg;",
      rating: 4,
      year: "2018"
    },
  ]);


  let MOVIE = [
    {
      // id: uuidv4(),
      name: "Harry potter",
      image: "https://mms.businesswire.com/media/20200515005354/fr/787777/4/HP_KeyArtPressRelease_Comms.jpg",
      rating: 3,
      year: "2005"
    },
    {
      // id: uuidv4(),
      name: "Avangers",
      image: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      rating: 5,
      year: "2015"
    },
    {
      // id: uuidv4(),
      name: "The god Father",
      image: " https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      rating: 4,
      year: "2012"
    },
    {
      // id: uuidv4(),
      name: "Iron Man",
      image: " https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg;",
      rating: 4,
      year: "2018"
    },

  ];


  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  if (Input.length !== "") {
    MOVIE = MOVIE.filter((el) => {
      return el.name.match(Input);
    });
  }


  return <div>
    <input className="inputt"
      type="text"
      placeholder="name of mivies"
      onChange={handleChange}
      value={Input}
    />

    <ListMovies MOVIE={MOVIE} />

    <button className="button2" onClick={() => setmodalIsOpen(true)}> + </button>
    <Modal isOpen={modalIsOpen}
      shouldCloseOverLayClick={false}
      onRequestClose={() => setmodalIsOpen(false)}
    >
      <form>

        <input type="file" />
        <br />
        <input type="text" placeholder="name" /><br />
        <input type="text" placeholder="year" /><br />
        <StarRatingComponent
          name="rate1"
        // starCount={10}

        // onStarClick={this.onStarClick.bind(this)}
        /><br />
        <button className="button2"> Add </button>
      </form>

    </Modal>

  </div>
};


export default App;