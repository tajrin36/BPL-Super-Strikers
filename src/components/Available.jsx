import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Player from "./Player";

const Available = ({handleAddPlayer,freeCoinBtn}) => {

    const [availablePlayer, setAvailablePlayer] = useState([]);

    useEffect(() => {
        fetch('players.json')
            .then(response => response.json())
            .then(data => setAvailablePlayer(data))
    }, [])
    return (
        <div className="mt-5 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-40" >
            {
                availablePlayer.map(player =>
                    <Player
                        key={player.playerId}
                        player={player}
                        handleAddPlayer={handleAddPlayer}
                        freeCoinBtn={freeCoinBtn}
                    ></Player>)
            }
        </div>
    );
};

Available.propTypes = {
    handleAddPlayer: PropTypes.func.isRequired,
    
}

export default Available;