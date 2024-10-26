import footerLogo from '../assets/logo-footer.png'
const Footer = () => {
    return (
        <div className="relative">
            {/* Gradient Banner */}
            <div className="flex justify-center -mb-10">
                <div className="w-11/12 md:w-2/3 lg:w-1/2 p-10 bg-gradient-to-tr from-blue-200 via-white to-orange-200 rounded-xl shadow-lg -mb-16 z-10 relative">
                    <h2 className="text-2xl font-semibold text-center text-black">Subscribe to our Newsletter</h2>
                    <p className="text-center text-gray-700 mt-2">Get the latest updates and news right in your inbox!</p>
                    <div className="flex justify-center mt-4">
                        <div className="flex items-center bg-white rounded-full overflow-hidden shadow-md">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-4 py-2 outline-none text-black flex-grow"
                            />
                            <button className="px-4 py-2 bg-gradient-to-r from-pink-400 to-yellow-400 text-white rounded-full">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className='bg-[#06091A] p-5'>
                <footer className=" text-white pt-24 pb-10 md:container md:mx-auto relative z-0">
                    <div className='flex items-center justify-center'>
                        <div>
                            <img src={footerLogo} alt="" />
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row justify-between'>
                        <nav className='mt-10'>
                            <h6 className=" text-[#FFF] text-lg font-semibold">About Us</h6>
                            <p className='text-gray-400 text-base font-normal'>We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.</p>
                        </nav>
                        <nav >
                            <h6 className=" text-[#FFF] text-lg font-semibold mt-10">Quick Links</h6>
                            <div className='flex flex-col space-y-3 '>
                                <li className='text-gray-400 text-base font-normal'><a className="link link-hover ">Home</a></li>
                                <li className='text-gray-400 text-base font-normal'><a className="link link-hover ">Services</a></li>
                                <li className='text-gray-400 text-base font-normal'><a className="link link-hover ">About</a></li>
                                <li className='text-gray-400 text-base font-normal'><a className="link link-hover ">Contact</a></li>
                            </div>
                        </nav>
                        <form className='mt-10'>
                            <h6 className="text-[#FFF] text-lg font-semibold">Subscribe</h6>
                            <p className='text-gray-400 text-base font-normal'>Subscribe to our newsletter for the <br /> latest updates.</p>
                            <fieldset className="form-control w-80">
                                <label className="label">
                                    <span className="label-text">Enter your email</span>
                                </label>
                                <div className="join">
                                    <input
                                        type="text"
                                        placeholder="username@site.com"
                                        className="input input-bordered join-item" />
                                    <button className="btn join-item bg-gradient-to-r from-pink-400 to-yellow-400">Subscribe</button>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </footer>
                <hr/>
                <p className='text-gray-400 text-base font-normal text-center mt-6'>@2024 Your Company All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;