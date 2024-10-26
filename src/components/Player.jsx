import PropTypes from 'prop-types';
import { IoPersonSharp } from "react-icons/io5";
import { FaFlag } from "react-icons/fa6";

const Player = ({ player,handleAddPlayer,freeCoinBtn }) => {

    
    const {
        playerId,
        name,
        country,
        image,
        role,
        battingType,
        bowlingType,
        biddingPrice
    } = player;

    
    

    return (
        <div className='border p-5 rounded-xl space-y-3'>
            <div>
                <img className='h-64 w-full rounded-lg' src={image} alt="" />
            </div>
            <div className='flex flex-row gap-3 items-center'>
                <IoPersonSharp className='text-xl text-[#131313]' />
                <h2 className='text-[#131313] text-xl font-semibold'>{name}</h2>
            </div>
            <div className='flex flex-row justify-between'>
                <div className='flex flex-row gap-3 items-center text-[#595959] text-base font-normal'>
                    <FaFlag />
                    <p>{country}</p>
                </div>
                <div className='text-[#131313] text-sm font-normal btn'>
                    {role}
                </div>
            </div>
            <hr />
            <h2 className='text-[#131313] text-base font-bold'>Rating</h2>
            <div className='flex flex-row items-center justify-between'>
                <div className='text-[#131313] text-base font-semibold'>{battingType}</div>
                <div className='text-[#595959] text-base font-normal'>{bowlingType}</div>
            </div>
            <div className='flex flex-row items-center justify-between'>
                <h2 className='text-[#131313] text-base font-semibold'>Price: ${biddingPrice}</h2>
                <button onClick={()=> handleAddPlayer(player,freeCoinBtn,biddingPrice)} className='btn bg-white border'>Choose Player</button>
            </div>

        </div>
    );
};

Player.propTypes = {
    player: PropTypes.object.isRequired,
    handleAddPlayer: PropTypes.func.isRequired,
}

export default Player;