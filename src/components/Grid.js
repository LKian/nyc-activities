import React from 'react';
import activities from '../data';
import Card from './Card'

const Grid = () => {
    return (

        <div>
            {activities.map(activity => (
                <Card data={activity} />

            ))}
        </div>
    );
};

export default Grid;
