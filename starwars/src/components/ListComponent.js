import React from 'react';
import Character from './CharacterComponent';


const CharacterList = (info) => {
    return ( <
            div >
            <
            h1 > Characters < /h1> {
            info.character.map(character => {
                return <
                    Character i = { character.created }
                />
            })
        } <
        /div>
);
};
export default CharacterList;