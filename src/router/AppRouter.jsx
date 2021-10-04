import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AddCard from '../component/AddCard.jsx'
import App from '../App.jsx'
import { PokemonDetails } from "../pages/PokemonDetails.jsx";


const AppRouter = () => {

    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path='/' component={App} />
                    <Route exact path='/pokemon/:pokemonName' component={PokemonDetails} />
                    <Route exact path='/addcard' component={AddCard} />
                </Switch>
            </Router>

        </div>
    )
}

export default AppRouter
