// import de react
import React, { Fragment, useState } from "react";
// import de l'affichage des cartes de films
import { CarteFilms } from "../Component/CarteFilms/CarteFilms";
// import de la récupération des film
import { getMovies } from "../JavaScript/movie";


export const Accueil = (props) => {
    const [movies, setMovies] = useState([])
    if(movies.length === 0){
        getMovies().then(res => {
                setMovies(res);
        })
    }

    // affichage des films
    return ( 
        <Fragment>
            <div>
                <h2>Cinéma Olbia</h2>
                <h3>Films :</h3>
                <div>
                    {movies.slice(0,6).map( (item,index)=>{
                        return (
                            <CarteFilms key={index} id={item.id} titre={item.title} image={item.image}/>
                        )
                    })}
                </div>
            </div>
        </Fragment>
    )
};

export default Accueil;