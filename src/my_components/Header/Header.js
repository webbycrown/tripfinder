import React, {useContext, useState} from 'react';
import { Link, withRouter} from 'react-router-dom';
// import {
//   HOME_PAGE,
//   LISTING_PAGE,
//   SINGLE_LIST_PAGE,
//   CONTACT,
// } from './constant';

export default withRouter(function Header({ location }) {
// const [{ searchVisibility }] = useContext(LayoutContext);
  // const { loggedIn } = useContext(AuthContext);
 // const { width } = useWindowSize();
  const [state, setState] = useState(false);

  const sidebarHandler = () => {
    setState(!state);
  };

  const headerType = location.pathname === '/' ? 'is-transparent' : 'is-default';
  const headerFixid = location.pathname === '/' ? 'is-fixid' : 'is-relative';
	return(
		<div className={headerFixid}>
			<header className={`w-full px-4 py-3 md:py-0 lg:px-6 z-20 ${headerType}`}>
				<div className="flex items-center justify-between">
					<div className="flex items-center justify-between w-full md:w-auto logo">
						<Link to="/" className="flex items-center text-white">
							<svg width="25" height="27.984" viewBox="0 0 25 27.984"><g transform="translate(0 0)"><path d="M25.45,2.767a34.5,34.5,0,0,0-4,1.143,35.262,35.262,0,0,0-3.771,1.545,26.069,26.069,0,0,0-3.179,1.8,26.068,26.068,0,0,0-3.191-1.8A35.262,35.262,0,0,0,7.54,3.909,34.5,34.5,0,0,0,3.55,2.767L2,2.45V17.94a12.5,12.5,0,1,0,25,0V2.45ZM14.5,10.492c2.339,1.96,3.522,4.19,3.512,6.608a3.512,3.512,0,1,1-7.024,0h0C10.98,14.66,12.162,12.442,14.5,10.492Zm9.913,7.448a9.915,9.915,0,0,1-19.831,0V5.69a31.8,31.8,0,0,1,7.748,3.259,13.43,13.43,0,0,0-2.344,2.737A9.929,9.929,0,0,0,8.4,17.095a6.1,6.1,0,1,0,12.2,0,9.932,9.932,0,0,0-1.587-5.412,13.427,13.427,0,0,0-2.346-2.742,29.737,29.737,0,0,1,5.586-2.577c.819-.284,1.559-.51,2.158-.675Z" transform="translate(-2 -2.45)" fill="currentColor"></path></g></svg>
							<h3 className="font-bold text-xl ml-3">TripFinder.</h3>
						</Link>
						<button className="md:hidden toggle-menu bg-blue-500 rounded-full py-2 w-7 h-10 hover:text-white">
	                        <span className="w-100 block bg-white h-[3px] my-1 transition-all transform"></span>
	                        <span className="w-100 block bg-white h-[3px] my-1 transition-all transform"></span>
	                        <span className="w-100 block bg-white h-[3px] my-1 transition-all transform"></span>
	                    </button>
					</div>
					<div className="flex items-center">
						<div className="main-menu block z-20 fixed top-0 -right-full transition-all duration-300 overflow-y-scroll overflow-auto md:overflow-y-auto h-full w-[285px] bg-white md:bg-transparent mh:h-auto md:w-auto md:static">
							<div className="w-full py-3 px-2 text-right md:hidden">
								<button className="md:hidden toggle-close bg-blue-500 rounded-full py-2 px-3 block ml-auto mr-0 w-12 h-10 hover:text-white">
			                        <span className="w-100 block bg-dark h-[3px] my-1 transition-all transform"></span>
			                        <span className="w-100 block bg-dark h-[3px] my-1 transition-all transform"></span>
			                        <span className="w-100 block bg-dark h-[3px] my-1 transition-all transform"></span>
			                    </button>
							</div>
							<div className="md:hidden">
								<ul className="items-center font-lato font-bold text-sm text-dark py-6 px-4 bg-gray-100 leading-none flex">
		                            <li className="relative ml-5"><a href="#" className="hover:text-theme">Sign in</a></li>
		                            <li className="relative ml-5"><a href="#" className="btn btn-primary px-5 py-2 ">Sign up</a></li>
		                        </ul>
							</div>
							<ul className="items-center font-lato font-normal text-sm text-dark py-4 md:py-0 md:text-white leading-none justify-end block md:flex">
	                            <li className="relative py-3 sm:p-0 active"><Link to="/" className="border-l-[3px] md:border-l-0 md:border-b-[3px] block border-transparent py-4 md:py-8 px-6 md:px-4 hover:text-theme">Hotels</Link></li>
	                            <li className="relative py-3 sm:p-0 md:ml-4 lg:ml-6"><Link to="/listing" className="border-l-[3px] md:border-l-0 md:border-b-[3px] block border-transparent py-4 md:py-8 px-6 md:px-4 hover:text-theme">Listing </Link></li>
	                            <li className="relative py-3 sm:p-0 md:ml-4 lg:ml-6"><Link to="/single_listing" className="border-l-[3px] md:border-l-0 md:border-b-[3px] block border-transparent py-4 md:py-8 px-6 md:px-4 hover:text-theme">Agent</Link></li>
	                            <li className="relative py-3 sm:p-0 md:ml-4 lg:ml-6"><Link to="/contact" className="border-l-[3px] md:border-l-0 md:border-b-[3px] block border-transparent py-4 md:py-8 px-6 md:px-4 hover:text-theme">Pricing</Link></li>
	                        </ul>
						</div>
						<div className="hidden md:flex items-center lg:ml-16">
							<ul className="items-center font-lato font-normal text-sm text-white leading-none flex">
	                            <li className="relative ml-5"><a href="#" className="hover:text-theme">Sign in</a></li>
	                            <li className="relative ml-5"><a href="#" className="btn btn-primary px-5 py-2 ">Sign up</a></li>
	                        </ul>
						</div>
					</div>
				</div>
			</header>
		</div>
		);
});