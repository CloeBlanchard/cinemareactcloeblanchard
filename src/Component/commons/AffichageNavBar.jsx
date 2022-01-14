// import de react
import React, { Fragment } from "react";
// import de Link de react-router-dom
import { Link } from "react-router-dom";

export const AffichageNavbar = (props) => {
  return (
    <Fragment>
      <nav>
        {props.pages &&
          props.pages.map((pages, index) => {
            return (
              <Link key={index} to={pages.to}>
                {" "}
                {pages.nom}{" "}
              </Link>
            );
          })}
      </nav>
    </Fragment>
  );
};

export default AffichageNavbar;