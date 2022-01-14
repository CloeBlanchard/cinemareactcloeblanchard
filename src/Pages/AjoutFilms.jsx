// import de react
import React, { Fragment } from "react";
// import de useNavigate de react
import { useNavigate } from 'react-router-dom';
// import des publication de film
import { postMovie } from "../JavaScript/movie";

export const FormulaireAjoutFilm = (props) => {
    const history = useNavigate()

    const handleSubmit = (e) => {
        e.stopPropagation();
        e.preventDefault();
        const movie={
            title:e.target.titre.value,
            image:e.target.image.value
        }
        postMovie(movie)
        .then((res) =>{
            history("/TableFilm");
            console.log(res);
        })
        .catch((e)=>{
            console.error(e);
        })
    }

    return ( 
        <Fragment>
            <div>
                <h2>Ajouter un film</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Titre</label>
                            <input type="text"  name="titre" ref={props.titre} />
                        </div>
                        <div>
                            <label>Image</label>
                            <input type="text"  name="image" ref={props.image}/>
                        </div>
                        <div>
                            <input type="submit" value="Ajouter votre film" />
                        </div>
                    </form>
            </div>
        </Fragment>
    )
}

// export du formulaire d'ajout de film
export default FormulaireAjoutFilm;