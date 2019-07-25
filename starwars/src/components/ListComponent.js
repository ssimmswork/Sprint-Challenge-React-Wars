import React from 'react';
import Character from './CharacterComponent';


const CharacterList = (props) => {
    return ( <div className = "char">
                  <h1> Characters </h1> {
            props.starwarsChars.map(character => {
                return <
                    Character
                i = { character.created }
                character = { character }
                />
            })
        } 
        </div>
);
};
export default CharacterList;