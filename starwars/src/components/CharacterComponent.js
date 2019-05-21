import React from 'react';



const Character = ({ props }) => {
    return ( <
        div className = 'character' >
        <
        h1 > { info.name } < /h1> <
        p > Gender: { info.gender } < /p> <
        p > Height: { info.height } < /p>  <
        p > Mass: { info.mass } < /p><
        p > Skin Color: { info.skin_color } < /p> <
        p > Hair Color: { info.hair_color } < /p> <
        p > Eye Color: { info.eye_color } < /p> <
        p > Birth Year: { info.birth_year } < /p> <
        p > Species: { info.species } < /p> <
        p > Home World: { info.homeworld } < /p> <
        p > Films: { info.films } < /p> <
        p > Vehicles: { info.vehicles } < /p> <
        p > Starships: { info.starships } < /p> <
        p > Editied: { info.editied } < /p> <
        p > created: { info.created } < /p> <
        p > URL: { info.url } < /p> < /
        div >
    );
};

export default Character;