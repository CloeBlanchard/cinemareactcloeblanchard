// import de react
import React, { Fragment, useState } from "react";
// import de useParams de react-router-dom
import {useParams} from 'react-router-dom'
// import de la récupèreation d'un seul film grace a son id
import { getMovieById } from "../JavaScript/movie";

export const InfoFilm = (props) => {
    const [movie, setMovie] = useState()
    let params = useParams();

    if(!movie){ 
        getMovieById(params.id).then(res =>{
            setMovie(res);
        })
    }else{
        console.log(movie)
    }
    return ( 
        <Fragment>
            <div>
                {movie && (
                    <div>
                        <img src={movie.image} alt="" />
                        <h3>{movie.title}</h3>
                    </div>
                )}
            </div>
        </Fragment>
    )
};

// export des info du film
export default InfoFilm;