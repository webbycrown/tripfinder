import React from 'react';

export const Tabs_bar = () => {
	return(
		<div className="w-full border-b border-gray-200">
			<div className="container max-w-[1920px] px-6 sm:px-8">
				<div className="scrollbar_left flex items-center">
					<div className="relative mr-4">
						<button className="linkItem py-7 border-b-4 border-theme font-bold text-theme leading-snug px-4 hover:text-theme">Overview</button>
					</div>
					<div className="relative mr-4">
						<button className="linkItem py-7 border-b-2 border-transparent leading-snug px-4 hover:text-theme">Choose Date</button>
					</div>
					<div className="relative mr-4">
						<button className="linkItem py-7 border-b-2 border-transparent leading-snug px-4 hover:text-theme">Room, Guests</button>
					</div>
				</div>
			</div>
		</div>
		);
}