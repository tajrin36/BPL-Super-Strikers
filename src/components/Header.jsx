import PropTypes from 'prop-types';
import headerLogo from '../assets/logo.png'
import navbarCoin from '../assets/coin.png'

const Header = ({freeCoinBtn}) => {
    return (
        <div className="fixed top-0  w-full z-10 bg-transparent backdrop-blur-md ">
            <div className="navbar md:container md:mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex="0"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a className='text-[#595959] text-base font-normal'>Home</a></li>
                            <li><a className='text-[#595959] text-base font-normal'>Fixture</a></li>
                            <li><a className='text-[#595959] text-base font-normal'>Teams</a></li>
                            <li><a className='text-[#595959] text-base font-normal'>Schedules</a></li>
                        </ul>
                    </div>
                    <img src={headerLogo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a className='text-[#595959] text-base font-normal'>Home</a></li>
                        <li><a className='text-[#595959] text-base font-normal'>Fixture</a></li>
                        <li><a className='text-[#595959] text-base font-normal'>Teams</a></li>
                        <li><a className='text-[#595959] text-base font-normal'>Schedules</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex flex-row gap-2 items-center btn border bg-white">
                        <p className="text-[#131313] text-base font-semibold"><span>{freeCoinBtn}</span> Coin</p>
                        <img className="w-7" src={navbarCoin} alt="coin" />
                    </div>
                </div>
            </div>
        </div>
    );
};

Header.propTypes = {
    freeCoinBtn: PropTypes.number.isRequired,
}

// absolute inset-0 z-0 backdrop-blur-lg bg-white/40

export default Header;