import React from 'react';

export const Filter = () => {
	return(
	<div className="w-full border-b border-gray-200 py-5 ">
			<div className="container max-w-[1920px] px-6 sm:px-8">
				<div className="flex items-center">
					<div className="relative mr-4">
						<button className="border border-gray-200 rounded-[3px] py-2 leading-snug px-4">Amenities</button>
						<div className="popup_container hidden absolute z-12 top-full left-0 min-w-[300px] bg-white p-7 pb-3 shadow-popup rounded-[3px]">
	                        <div className="">
	                            <label className="ant-checkbox-wrapper group relative pl-6 mb-4 block cursor-pointer">
	                            	<input type="checkbox" className="absolute opacity-0 hidden ant-checkbox-input" value="free-wifi" />
	                            	<span className="ant-checkbox-inner absolute top-[1px] left-0 w-4 h-4 border border-gray-300 rounded-sm block group-hover:border-theme"></span>
	                            	Free Wi-Fi
	                            </label>
	                            <label className="ant-checkbox-wrapper group relative pl-6 mb-4 block cursor-pointer">
	                            	<input type="checkbox" className="absolute opacity-0 hidden ant-checkbox-input" value="free-wifi" />
	                            	<span className="ant-checkbox-inner absolute top-[1px] left-0 w-4 h-4 border border-gray-300 rounded-sm block group-hover:border-theme"></span>
	                            	Free Parking
	                            </label>
	                            <label className="ant-checkbox-wrapper group relative pl-6 mb-4 block cursor-pointer">
	                            	<input type="checkbox" className="absolute opacity-0 hidden ant-checkbox-input" value="free-wifi" />
	                            	<span className="ant-checkbox-inner absolute top-[1px] left-0 w-4 h-4 border border-gray-300 rounded-sm block group-hover:border-theme"></span>
	                            	Breakfast included
	                            </label>
	                            <label className="ant-checkbox-wrapper group relative pl-6 mb-4 block cursor-pointer">
	                            	<input type="checkbox" className="absolute opacity-0 hidden ant-checkbox-input" value="free-wifi" />
	                            	<span className="ant-checkbox-inner absolute top-[1px] left-0 w-4 h-4 border border-gray-300 rounded-sm block group-hover:border-theme"></span>
	                            	Pool
	                            </label>
	                            <label className="ant-checkbox-wrapper group relative pl-6 mb-5 block cursor-pointer">
	                            	<input type="checkbox" className="absolute opacity-0 hidden ant-checkbox-input" value="free-wifi" />
	                            	<span className="ant-checkbox-inner absolute top-[1px] left-0 w-4 h-4 border border-gray-300 rounded-sm block group-hover:border-theme"></span>
	                            	Air Conditioning
	                            </label>
	                            <label className="ant-checkbox-wrapper group relative pl-6 mb-4 block cursor-pointer">
	                            	<input type="checkbox" className="absolute opacity-0 hidden ant-checkbox-input" value="free-wifi" />
	                            	<span className="ant-checkbox-inner absolute top-[1px] left-0 w-4 h-4 border border-gray-300 rounded-sm block group-hover:border-theme"></span>
	                            	Hot Shower
	                            </label>
	                            <label className="ant-checkbox-wrapper group relative pl-6 mb-4 block cursor-pointer">
	                            	<input type="checkbox" className="absolute opacity-0 hidden ant-checkbox-input" value="free-wifi" />
	                            	<span className="ant-checkbox-inner absolute top-[1px] left-0 w-4 h-4 border border-gray-300 rounded-sm block group-hover:border-theme"></span>
	                            	Cable TV
	                            </label>
	                        </div>
	                    </div>
					</div>
					<div className="relative mr-4">
						<button className="border border-gray-200 rounded-[3px] py-2 leading-snug px-4">Choose Date</button>
					</div>
					<div className="relative mr-4">
						<button className="border border-gray-200 rounded-[3px] py-2 leading-snug px-4">Room, Guests</button>
					</div>
				</div>
			</div>
		</div>
		);
	}