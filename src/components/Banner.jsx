import PropTypes from 'prop-types';
import bannerBg from '../assets/bg-shadow.png'
import bannerImg from '../assets/banner-main.png'

const Banner = ({handleFreeCoin}) => {
    const backgroundImageSet = {
        backgroundImage: `url("${bannerBg}")`,

    }
    return (
        <div className='md:container md:mx-auto relative rounded-xl mx-2'>
            <div className='max-w-7xl overflow-hidden mx-auto text-center ' style={{ background: 'black', borderRadius: '2rem', }}>
                <div style={backgroundImageSet}>
                    <div className='flex flex-col items-center justify-center p-10'>
                        <img src={bannerImg} alt="" />
                        <h1 className='text-[#FFF] md:text-5xl text-3xl font-bold mt-6'>Assemble BPL super strikers Cricket Team</h1>
                        <p className='text-2xl font-medium text-[#acacac] mt-6'>Beyond Boundaries Beyond Limits</p>
                        <button onClick={()=> {handleFreeCoin(714000)}} className='btn mt-6 px-6 py-3 bg-gradient-to-r from-pink-400 to-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-500 transition'>Claim Free Credit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Banner.propTypes = {
    handleFreeCoin: PropTypes.func.isRequired,
}

export default Banner;