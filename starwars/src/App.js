import React, { Component } from 'react';
import './App.css';
import CharacterList from './components/ListComponent';


class App extends Component {
    constructor() {
        super();
        this.state = {
            starwarsChars: []
        };
    }

    componentDidMount() {
        this.getCharacters('https://swapi.co/api/people/');
    }

    getCharacters = URL => {
        fetch(URL)
            .then(res => {
                return res.json();
            })
            .then(data => {
                this.setState({ starwarsChars: data.results });
            })
            .catch(err => {
                throw new Error(err);
            });
    };

    render() {
        return ( < div className = "App" >
            <
            h1 className = "Header" > React Wars < /h1>     <
            CharacterList characters = { this.state.starwarsChars }
            cars = { this.state.starwarsChars.vehicles }
            />
            console.log(this.state.starwarsChars.vehicles) <
            /div>
        );
    }
}

export default App;