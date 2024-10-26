import PropTypes from 'prop-types';
import Available from './Available';
import './AvailablePlayers.css'
import Selected from './Selected';
const AvailablePlayers = ({ handleIsActive, isActive, handleAddPlayer, addPlayer,handleRemovePlayer,freeCoinBtn,handleAddMorePLayer }) => {


    return (
        <div>
            <div className="flex flex-row justify-between px-6">
                {/* <h2 className='text-[#131313] md:text-2xl font-bold'>Available Players</h2> */}
                {isActive.available ? <h2 className='text-[#131313] md:text-2xl font-bold'>Available PLayers</h2> : <h2 className='text-[#131313] md:text-2xl font-bold'>Selected Player({addPlayer.length}/6)</h2>}
                <div className="flex flex-row gap-4">
                    <button onClick={() => { handleIsActive('available') }} className={`${isActive.available ? 'btn active' : 'btn'}`}>Available</button>
                    <button onClick={() => { handleIsActive('selected') }} className={`${isActive.available ? 'btn' : 'btn active'}`}>Selected <span>({addPlayer.length})</span></button>
                </div>
            </div>
            <div>
                {
                    isActive.available ?
                        <Available
                            handleAddPlayer={handleAddPlayer}
                            freeCoinBtn={freeCoinBtn}
                        ></Available> :
                        <Selected
                            addPlayer={addPlayer}
                            handleRemovePlayer={handleRemovePlayer}
                            handleAddMorePLayer={handleAddMorePLayer}
                        ></Selected>
                }
            </div>
        </div>
    );
};

AvailablePlayers.propTypes = {
    handleIsActive: PropTypes.func.isRequired,
    isActive: PropTypes.object.isRequired,
    handleAddPlayer: PropTypes.func.isRequired,
    addPlayer: PropTypes.object.isRequired,
    handleRemovePlayer: PropTypes.func.isRequired,
    freeCoinBtn: PropTypes.number.isRequired,
    handleAddMorePLayer: PropTypes.func.isRequired,
}

export default AvailablePlayers;