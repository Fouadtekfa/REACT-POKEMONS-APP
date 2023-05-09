import React,{FunctionComponent,useState, useEffect} from 'react';
import PokemonsList from './pages/pokemon-list';
import PokemonsDetail from './pages/pokemon-detail';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PageNotFound from "./pages/page-not-found";
const App: FunctionComponent = () => {
//    const name: String = 'React';
    //etat init

    return (
        <Router>
            <div>
                {/* navbar*/}
                <nav>
                    <div className="nav-wrapper teal">
                        <Link to="/" className="brand-logo center">Pokédex</Link>
                    </div>
                </nav>

                <Switch>
                    <Route exact path="/" component={PokemonsList} />
                    <Route exact path="/pokemons" component={PokemonsList} />
                    <Route exact path = "/pokemons/:id" component={PokemonsDetail}/>
                    <Route component={PageNotFound}/>

                </Switch>
            </div>
        </Router>


    )
}








export default App;