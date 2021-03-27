import React from 'react';

const Spell = (props) => {
    return (
        <div className="spell">
            <h1>{props.name}</h1>
            <h2>{props.level}</h2>
            <p>{props.description}</p>
            <p>{props.components}</p>
            <p>{props.range}</p>
            <p>{props.savingThrow}</p>
        </div>
    )
}

export default Spell;