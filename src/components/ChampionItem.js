import React from 'react';

function ChampionItem({champion, onDelete}) {
    return (
        <li>
            {champion}
            <button onClick={onDelete} type="button">Remove</button>
        </li>
    );
}

export default ChampionItem;