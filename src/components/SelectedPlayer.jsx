import { RiDeleteBin6Line } from "react-icons/ri";
import PropTypes from 'prop-types';


const SelectedPlayer = ({ selectedPlayer, handleRemovePlayer }) => {


    const {
        playerId,
        image,
        name,
        battingType,
        bowlingType
    } = selectedPlayer
    return (
        <div className="border p-5 rounded-xl">

            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row gap-3 items-center">
                    <div>
                        <img className="w-40 rounded-xl" src={image} alt="" />
                    </div>
                    <div>
                        <h2 className="text-[#131313] text-2xl font-semibold">{name}</h2>
                        <p className="text-base font-normal text-[#595959]">{battingType}</p>
                        <p className="text-base font-normal text-[#595959]">{bowlingType}</p>
                    </div>
                </div>
                <div className="btn bg-white border">
                    <RiDeleteBin6Line onClick={() => handleRemovePlayer(playerId)} className="text-2xl font-normal" />
                </div>
            </div>
            

        </div>
    );
};
SelectedPlayer.propTypes = {
    selectedPlayer: PropTypes.object.isRequired,
    handleRemovePlayer: PropTypes.func.isRequired,
}

export default SelectedPlayer;