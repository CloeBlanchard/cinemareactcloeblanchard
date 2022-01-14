// Import des outils de routing
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"
// import de react
import React, { Fragment } from "react";
// import de la page d'accueil
import PageAccueil from "../../Pages/PageAccueil";
// import de la liste des films
import TableauFilms from "../../Pages/TableauFilms";
// import du formulaire pour ajouter un film
import AjoutFilm from "../../Pages/AjoutFilms";
// import d'une page 404
import Error404 from "../../Pages/Error404";
// import de la page sur les infos complémentaires du film
import InfoFilm from "../../Pages/InfoFilm";
// import de la bar de navigation
import AffichageNavBar from "./AffichageNavBar";

// route de l'app
let pages = [
    {to: "/Accueil", nom :"Accueil"},
    {to: "/TableFilm", nom :"Tableau des films"},
    {to: "/Form", nom :"Ajouter un film"},
]

export const Routing = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <AffichageNavBar pages={pages} />
                <Routes>
                    <Route path="/" element={<Navigate to="/Accueil" />} />
                    <Route path="/Accueil" element={<PageAccueil/>} />
                    <Route path="/TableFilm" element={<TableauFilms/>} />
                    <Route path="/Form" element={<AjoutFilm/>} />
                    <Route path="/InfoFilm/:id" element={<InfoFilm/>}/>
                    <Route path="*" element={<Error404/>} />
                </Routes>
            </BrowserRouter>
        </Fragment>
    )
}