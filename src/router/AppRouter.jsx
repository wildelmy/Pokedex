import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddCard from '../component/AddCard.jsx'
import { App } from '../App.jsx'
import PokemonDetails from "../pages/PokemonDetails.jsx";
import { Navbar } from "../component/Navbar.jsx";
import Login from '../pages/Login.jsx'

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Login/>
      <Switch>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/pokemon/:pokemonName' component={PokemonDetails} />
        <Route exact path='/addpokemon' component={AddCard} />
        <Route exact path='/' component={App} />
      </Switch>
    </Router>
  )
}
export default AppRouter
