import React from 'react';



const Character = (props) => {
    return ( 
        <div className = 'character' >
        <h1> { props.character.name } </h1>   
        <p> Gender: { props.character.gender } </p> 
        <p > Height: { props.character.height } </p>  
        <p> Mass: { props.character.mass } </p>
        <p> Skin Color: { props.character.skin_color } </p> 
        <p> Hair Color: { props.character.hair_color } </p> 
        <p> Eye Color: { props.character.eye_color } </p> 
        <p> Birth Year: { props.character.birth_year } </p>
        <p> Species: { props.character.species } </p> 
        <p> Home World: { props.character.homeworld } </p> 
        <p> Films: { props.character.films.map(film => {
            return (
            <li>{film}</li>
        )
        })} </p> 
        <p> Vehicles: { props.character.vehicles.map(vehicles => {return (
            <li>{vehicles}</li>
        )})} </p>
        <p> Starships: { props.character.starships.map(StarShip => {
            return (
            <li>{StarShip}</li>
        )
        })}</p> 
        <p> Editied: { props.character.editied } </p> 
        <p> created: { props.character.created } </p> 
        <p> URL: { props.character.url } </p>
        </div>
    );
};

export default Character;