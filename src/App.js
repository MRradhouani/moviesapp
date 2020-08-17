

import React, { useState } from "react";
import ListMovies from "./Components/ListMovies";
import Modal from "react-modal";
import StarRatingComponent from 'react-star-rating-component';
import { v4 as uuidv4 } from "uuid"


import "./App.css";


Modal.setAppElement('#root')

const App = () => {
  const [Input, setInput] = useState("");
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const [searchResults, setSearchResults] = React.useState([]);

  const [Inputname, setInputadd] = useState("");
  const [Inputyear, setInputyear] = useState("");



  const [items, setItems] = useState([
    {
      id: uuidv4(),
      name: "Harry potter",
      image: "https://mms.businesswire.com/media/20200515005354/fr/787777/4/HP_KeyArtPressRelease_Comms.jpg",
      rating: 3,
      year: "2005"
    },
    {
      id: uuidv4(),
      name: "Avangers",
      image: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      rating: 5,
      year: "2015"
    },
    {
      id: uuidv4(),
      name: "The god Father",
      image: " https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      rating: 4,
      year: "2012"
    },
    {
      id: uuidv4(),
      name: "Iron Man",
      image: " https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg;",
      rating: 4,
      year: "2018"
    },
  ]);


  // let MOVIE = [
  //   {
  //     // id: uuidv4(),
  //     name: "Harry potter",
  //     image: "https://mms.businesswire.com/media/20200515005354/fr/787777/4/HP_KeyArtPressRelease_Comms.jpg",
  //     rating: 3,
  //     year: "2005"
  //   },
  //   {
  //     // id: uuidv4(),
  //     name: "Avangers",
  //     image: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
  //     rating: 5,
  //     year: "2015"
  //   },
  //   {
  //     // id: uuidv4(),
  //     name: "The god Father",
  //     image: " https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
  //     rating: 4,
  //     year: "2012"
  //   },
  //   {
  //     // id: uuidv4(),
  //     name: "Iron Man",
  //     image: " https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg;",
  //     rating: 4,
  //     year: "2018"
  //   },

  // ];


  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    };
    
    // const callSearchFunction = (e) => {
    // e.preventDefault();
    // search(Input);
    // items = items.filter((el) => {
    //   return el.name.toLowerCase().match(items);
    // });
    // setInput();
  // };

  
  // if (Input.length !== "") {
  //   let x = "" ;
  //   x = items.filter((el) => {
  //       return el.name.toLowerCase().includes(Input);
  //   })
    
  // //   setInput();
  // };

  if (Input.length !== "") {
    let results = items.filter(el => {

     return   el.name.toLowerCase().includes(Input)
    }
    );
    // setItems(results);
  }



  const addTodo = (e, setInputadd, setInputyear) => {
    e.preventDefault();
    if (setInputadd.trim() === "") {
      return alert("Enter a Valid name");
    }

    const newTodo = {
      name: Inputname,
      image: "https://mms.businesswire.com/media/20200515005354/fr/787777/4/HP_KeyArtPressRelease_Comms.jpg",
      rating: 5,
      year: Inputyear,
      id: uuidv4(),
    };

    setItems([...items, newTodo]);
    //reset the value
    // setInputadd("");
  };


  return <div>
    <input className="inputt"
      type="text"
      placeholder="name of mivies"
      onChange={handleChange}
      value={Input}
    />


{/* <ul>
     {searchResults.map(item => (
          <li>{item}</li>
     ))}
  </ul> */}

    <ul>

      {items.filter((el) => {
        return el.name.toLowerCase().includes(Input);}).map((player) => (
        <div className="Listmovies">
          <div className="movie">
            <ul>
              <img src={player.image} style={{ width: "250px", height: " 350px" }} /> <br />
              {player.name} <br />
              {player.year} <br />
              <StarRatingComponent value={player.rating} />
            </ul>
          </div>
        </div>
      ))}
    </ul>


    {/* <ListMovies MOVIE={MOVIE} /> */}

    <button className="button2" onClick={() => setmodalIsOpen(true)}> + </button>
    <Modal className="modal" isOpen={modalIsOpen}
      shouldCloseOverLayClick={false}
      onRequestClose={() => setmodalIsOpen(false)}
    >
      <form>

        <input type="file" />
        <br />
        <input type="text" placeholder="name" name="name" value={Inputname}
          onChange={(event) => setInputadd(event.target.value)}
        />
        <br />
        <input type="text" placeholder="year"
         onChange={(event) => setInputyear(event.target.value)}
        /><br />
        <StarRatingComponent
          name="rate1"
        // starCount={10}

        // onStarClick={this.onStarClick.bind(this)}
        /><br />
        <button className="button2"
          onClick={(e) => addTodo(e, Inputname)}
        > Add </button>
      </form>

    </Modal>

  </div>
};


export default App;