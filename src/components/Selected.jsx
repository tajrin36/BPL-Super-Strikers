import PropTypes from 'prop-types';
import SelectedPlayer from "./SelectedPlayer";


const Selected = ({ addPlayer,handleRemovePlayer,handleAddMorePLayer }) => {
    // console.log(addPlayer)

    

    return (
        <div className="px-6 mb-6">
            {/* <h2 className="text-4xl font-bold">player: {addPlayer.length}</h2> */}
            {
                addPlayer.map((selectedPlayer, idx) =>
                    <SelectedPlayer
                        key={idx}
                        selectedPlayer={selectedPlayer}
                        handleRemovePlayer={handleRemovePlayer}
                        
                    ></SelectedPlayer>)
            }
            <button onClick={()=> handleAddMorePLayer('selected')} className="btn bg-[#E7FE29] mt-4">add more player</button>
        </div>
    );
};
Selected.propTypes = {
    addPlayer: PropTypes.object.isRequired,
    handleRemovePlayer: PropTypes.func.isRequired,
    handleAddMorePLayer: PropTypes.func.isRequired,
}

export default Selected;