import React, { useState, setStateToUrl, setSearchDate } from 'react';
import  Date  from '../Components/Date';
import isEmpty from 'lodash/isEmpty';
import { Listing } from '../Listing_page/Listing';
import Location from '../Components/Location';
export const Find_hotels_form = () => {
	const form_title = 'Latest reviews. Lowest prices.';
	const form_sub_text = 'compares prices from 200+ booking sites to help you find the lowest price on the right hotel for you.';
	const from_btn = 'Find Hotels';

const calendarItem = {
  separator: '-',
  format: 'MM-DD-YYYY',
  locale: 'en',
};
const SearchForm = ({ history }) => {
  const [searchDate, setSearchDate] = useState({
    setStartDate: null,
    setEndDate: null,
  });
  const [mapValue, setMapValue] = useState([]);

  
  const updateValueFunc = (event) => {
    const { searchedPlaceAPIData } = event;
    if (!isEmpty(searchedPlaceAPIData)) {
      setMapValue(searchedPlaceAPIData);
    }
  };

   };

	return(
	<div>
    	<h1 className="text-xl md:text-[28px] leading-none lg:leading-normal font-semibold text-dark mb-3">
    		{form_title}
    	</h1>
    	<p className="hidden sm:block">{form_sub_text}</p>
        
    	<form>
    		<div className="bg-gray-100 sm:mt-10 lg:flex items-center">
    			<div className="relative w-full after:hidden lg:after:block after:h-[20px] after:bg-gray-200 transform after:-translate-y-1/2 after:w-[1px] after:absolute after:right-0 after:top-1/2">
    				<span className="absolute text-theme left-4 top-2/4 -translate-y-1/2 z-2"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" className="map-marker" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg></span>
    				<div className="w-full relative pl-10 pr-8">
    					<Location />
                        
    				</div>
    				<span className="absolute text-theme right-3 top-2/4 z-2 -translate-y-1/2"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="30" height="30" viewBox="0 0 144.083 144" enableBackground="new 0 0 144.083 144" className="target"><path d="M117.292,69h-13.587C102.28,53.851,90.19,41.761,75.042,40.337V26.5h-6v13.837C53.893,41.761,41.802,53.851,40.378,69  H26.792v6h13.587c1.425,15.148,13.515,27.238,28.663,28.663V117.5h6v-13.837C90.19,102.238,102.28,90.148,103.705,75h13.587V69z   M72.042,97.809c-14.23,0-25.809-11.578-25.809-25.809c0-14.231,11.578-25.809,25.809-25.809S97.85,57.769,97.85,72  C97.85,86.23,86.272,97.809,72.042,97.809z"></path><path d="M72.042,52.541c-10.729,0-19.459,8.729-19.459,19.459s8.729,19.459,19.459,19.459S91.5,82.729,91.5,72  S82.771,52.541,72.042,52.541z M72.042,85.459c-7.421,0-13.459-6.037-13.459-13.459c0-7.421,6.038-13.459,13.459-13.459  S85.5,64.579,85.5,72C85.5,79.422,79.462,85.459,72.042,85.459z"></path></svg></span>
    			</div>
    			<div className="relative w-full border-t border-gray-200 lg:border-transparent after:hidden lg:after:block after:h-[20px] after:bg-gray-200 transform after:-translate-y-1/2 after:w-[1px] after:absolute after:right-0 after:top-1/2">
    				<span className="absolute text-theme left-4 top-2/4 -translate-y-1/2 z-2"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="calendar" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M400 64h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V160h352v298c0 3.3-2.7 6-6 6z"></path></svg></span>
    				<div className="flex items-center justify-between">
    					<Date item={calendarItem}
                          startDateId="startDateId-id-home"
                          endDateId="endDateId-id-home"
                          updateSearchData={(setDateValue) => setSearchDate(setDateValue)}
                          showClearDates={true}
                          small={true}
                          numberOfMonths={1} />
    				</div>
    			</div>
    			<div className="relative w-full border-t border-gray-200 lg:border-transparent">
    				<span className="absolute text-theme left-4 top-2/4 -translate-y-1/2 z-2">
    					<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" className="user-friends" height="17" width="17" xmlns="http://www.w3.org/2000/svg"><path d="M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z"></path></svg>
    				</span>
    				<div className="flex items-center justify-between quantity-room-wrap">
    					<button type="button" className="ant-btn ant-btn-default flex items-center w-full justify-between text-dark text-sm h-[60px] pl-10 pr-5" ant-click-animating-without-extra-node="true">
                        <span>Room 
                            <span className="room-number"></span>
                            <input type="hidden" className="room-hidden" name="room" value="" />
                        </span>
                        <span className="text-dark">-</span>
                        <span>Guest
                            <span className="guest-number"></span>
                            <input type="hidden" className="guest-hidden" name="guest" value="" />
                        </span>
                        </button>
    				</div>
                    <div className="popup_container popup_container_btns hidden absolute top-full z-12 left-0 min-w-[300px] bg-white p-5 shadow-popup rounded-[3px]">
                        <div className="">
                            <div className="flex items-center room-info justify-between mb-6 room-num" data-type="room">
                                <label>Room</label>
                                <div className="quantity flex items-center justify-between w-[104px]">
                                    <button className="decBtn text-theme border border-theme rounded-full w-[27px] h-[27px] flex items-center justify-center" type="button"><span role="img" aria-label="minus" className="anticon anticon-minus"><svg viewBox="64 64 896 896" focusable="false" className="" data-icon="minus" width="18px" height="18px" fill="currentColor" aria-hidden="true"><path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path></svg></span></button>
                                    <input className="ant-input qnt-input text-center w-[50px] bg-white" type="number" min="0" id="room" defaultValue="0" />
                                    <button className="incBtn text-theme border border-theme rounded-full w-[27px] h-[27px] flex items-center justify-center" type="button"><span role="img" aria-label="plus" className="anticon anticon-plus"><svg viewBox="64 64 896 896" focusable="false" className="" data-icon="plus" width="18px" height="18px" fill="currentColor" aria-hidden="true"><defs><style></style></defs><path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"></path><path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"></path></svg></span></button>
                                </div>
                            </div>
                            <div className="flex items-center room-info justify-between mb-1 guest-num"  data-type="guest">
                                <label>Guest</label>
                                <div className="quantity flex items-center justify-between w-[104px]">
                                    <button className="decBtn text-theme border border-theme rounded-full w-[27px] h-[27px] flex items-center justify-center" type="button"><span role="img" aria-label="minus" className="anticon anticon-minus"><svg viewBox="64 64 896 896" focusable="false" className="" data-icon="minus" width="18px" height="18px" fill="currentColor" aria-hidden="true"><path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path></svg></span></button>
                                    <input className="ant-input qnt-input text-center w-[50px] bg-white" type="number" min="0" id="room" defaultValue="0" />
                                    <button className="incBtn text-theme border border-theme rounded-full w-[27px] h-[27px] flex items-center justify-center" type="button"><span role="img" aria-label="plus" className="anticon anticon-plus"><svg viewBox="64 64 896 896" focusable="false" className="" data-icon="plus" width="18px" height="18px" fill="currentColor" aria-hidden="true"><defs><style></style></defs><path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"></path><path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"></path></svg></span></button>
                                </div>
                            </div>
                        </div>
                    </div>
    			</div>
    			<button type="submit" className="btn btn-primary w-full md:w-auto md:min-w-[157px] h-[60px] rounded-tl-0 rounded-bl-0"><span>{from_btn}</span></button>
    		</div>
    	</form>
	</div>
	);
}