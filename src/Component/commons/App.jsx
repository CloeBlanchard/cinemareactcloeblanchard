// import de react
import React, { Fragment } from "react";
// import du routing des routes
import { Routing } from "./Routing";


export class App extends React.Component {
  render() {
    return (
      <Fragment>
        {/* Appel du composant 'Routing' qui contient les routes*/}
        <Routing />
      </Fragment>
    );
  }
}

// Export de la classe
export default App;