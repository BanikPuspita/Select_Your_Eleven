import React from 'react';
import SelectedCards from '../SelectedCards/SelectedCards';

const SelectedPlayers = ({purchasedPlayers, removePlayer}) => {
    console.log(purchasedPlayers)
    return (
        <div className='max-w-[1200px] mx-auto'>
            {
                purchasedPlayers.map(player => <SelectedCards player={player} removePlayer={removePlayer}></SelectedCards>

                )
            }
        </div>
    );
};

export default SelectedPlayers;