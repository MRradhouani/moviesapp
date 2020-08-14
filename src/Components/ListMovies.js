import React from 'react'
import StarRatingComponent from 'react-star-rating-component';


const ListMovies = (props) => {
    return (
        <div  className="Listmovies">
            {props.MOVIE.map((player, index) => {
                return (
                    <div className="movie"> 
                        <ul>
                                <img src={player.image} style={{ width: "250px" , height:" 350px" } }  /> <br/>
                                {player.name} <br/>
                                {player.year} <br/>
                    <StarRatingComponent value={player.rating}/>
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}

export default ListMovies
