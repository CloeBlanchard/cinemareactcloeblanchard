// import de react
import React, { Fragment, useState } from "react";
// import de l'affichage des cartes de films
import { CarteFilms } from "../Component/CarteFilms/CarteFilms";
// import de la récupération des films
import { getMovies } from "../JavaScript/movie";

// import css
import "../Component/CarteFilms/carte.css"

export const ListeFilm = (props) => {
    const [movies, setMovies] = useState([])
    if(movies.length === 0){
        getMovies().then(res => {
                setMovies(res);
        })
    }
    return ( 
        <Fragment>
            <div className="body">
                {movies.map((item,index)=>{
                    return (
                        <CarteFilms key={index} id={item.id} titre={item.title} image={item.image}/>
                    )
                })}
            </div>
        </Fragment>
    )
};


export default ListeFilm;