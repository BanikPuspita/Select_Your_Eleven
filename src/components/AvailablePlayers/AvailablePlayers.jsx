import React, { use } from 'react';

const AvailablePlayers = ({playersPromise}) => {

    const playerData = use(playersPromise)
    console.log(playerData)

    return (
        <div className='max-w-[1200px] mx-auto'>
            
        </div>
    );
};

export default AvailablePlayers;