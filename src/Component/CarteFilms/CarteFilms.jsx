// import de react
import React, { Fragment } from 'react';
// import de Link de react-router-dom
import { Link } from "react-router-dom";
// import de la suppresion d'un film
import { deleteMovieById } from '../../JavaScript/movie';

// import css
import '../CarteFilms/carte.css';

export const CarteFilms = (props) => {
    // fonction de suppression d'un film
    const handleDelete = (e) => {
        e.stopPropagation();
        deleteMovieById(props.id)
        .then(res=>{
            console.log(res);
            window.location.reload();
        })
        .catch(e=>{
            console.error(e)
        })
    }
    return (
        <Fragment>
            <div className='body'>
                <img src={props.image} alt="" />
                <h3>{props.titre}</h3>
                {/* redirection vers les infos du films */}
                <div className='carte'>
                    <Link key={props.id} to={'/DetailFilm/' + props.id}>
                        <button>En savoir +</button>
                    </Link>
                    {/* fonction pour supprimer un film */}
                    <button onClick={handleDelete}>Supprimer</button>
                </div>
            </div>
        </Fragment>
  )
}

// export de l'application
export default CarteFilms;