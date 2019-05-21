import React from 'react';
import Character from './CharacterComponent';


const CharacterList = (info) => {
    return ( <
            div >
            <
            h1 > Characters < /h1> {
            info.map(character => {
                return <
                    Character i = { character.created }
                character = { info }
                />
            })
        } <
        /div>
);
};
export default CharacterList;