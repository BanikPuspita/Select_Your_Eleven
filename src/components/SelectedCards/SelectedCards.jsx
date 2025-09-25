import React from 'react';

const SelectedCards = ({player, removePlayer}) => {
    console.log(player)

    const handleRemove = () => {
        removePlayer(player)
    }
    return (
        <div className='border-2 mt-5 border-gray-300 flex justify-between items-center p-3 rounded-xl'>
                <div className='flex items-center'>
                    <img className='w-[50px] h-[50px] rounded-xl' src={player.player_image} alt="" />
                    <div className='ml-2'>
                        <h1>{player.player_name}</h1>
                        <p className='text-xs'>{player.playing_role}</p>
                    </div>
                </div>
                <div>
                    <img onClick={handleRemove} src="https://i.ibb.co.com/Y4zgZF8Z/Frame.png" alt="" />
                </div>
            </div>
    );
};

export default SelectedCards;