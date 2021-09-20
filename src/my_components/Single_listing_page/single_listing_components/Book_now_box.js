import React from 'react';

export const Book_now_box = () => {
	const Booknow_box_price = '$162';
	const Booknow_price_night = '/ night';
	const Booknow_contact = 'Contact Hotel';
	const from_btn = 'Find Hotels';
	return(
			<div>
				<div className="pb-8">
					<div className="flex items-center justify-between p-5">
						<div className="">{Booknow_box_price} <span>{Booknow_price_night}</span></div>
						<a href="">{Booknow_contact}</a>
					</div>
					<form>
            			<div className="p-6">
            				<div className="relative w-full">
            					<span className="absolute text-theme left-4 top-2/4 -translate-y-1/2 z-2"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="calendar" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M400 64h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V160h352v298c0 3.3-2.7 6-6 6z"></path></svg></span>
            					<div className="flex items-center justify-between">
            						<div className="pl-10 pr-5">
            							<input className="h-[60px] lg:h-auto w-full bg-transparent text-dark text-sm DateInput_input DateInput_input_1 DateInput_input__small DateInput_input__small_2" aria-label="Start Date" type="text" id="startDateId-id-home" name="startDateId-id-home" placeholder="Start Date" autoComplete="off" aria-describedby="DateInput__screen-reader-message-startDateId-id-home" />
            						</div>
            						<div className="text-dark">-</div>
            						<div className="pl-10 pr-5">
            							<input className="h-[60px] lg:h-auto w-full bg-transparent text-dark text-sm text-right DateInput_input DateInput_input_1 DateInput_input__small DateInput_input__small_2" aria-label="End Date" type="text" id="endDateId-id-home" name="endDateId-id-home" placeholder="End Date" autoComplete="off" aria-describedby="DateInput__screen-reader-message-endDateId-id-home" />
            						</div>
            					</div>
            				</div>
            				<div className="relative w-full">
            					<span className="absolute text-theme left-4 top-2/4 -translate-y-1/2 z-2">
            						<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" className="user-friends" height="17" width="17" xmlns="http://www.w3.org/2000/svg"><path d="M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z"></path></svg>
            					</span>
            					<div className="flex items-center justify-between">
            						<button type="button" className="ant-btn ant-btn-default flex items-center w-full justify-between text-dark text-sm h-[60px] pl-10 pr-5" ant-click-animating-without-extra-node="true"><span>Room </span><span className="text-dark">-</span><span>Guest</span></button>
            					</div>
                                <div className="popup_container hidden absolute top-full left-0 min-w-[300px] bg-white p-5 shadow-popup rounded-[3px]">
                                    <div className="">
                                        <div className="flex items-center justify-between mb-6">
                                            <label>Room</label>
                                            <div className="quantity flex items-center justify-between w-[104px]">
                                                <button className="decBtn text-theme border border-theme rounded-full w-[27px] h-[27px] flex items-center justify-center" type="button"><span role="img" aria-label="minus" className="anticon anticon-minus"><svg viewBox="64 64 896 896" focusable="false" className="" data-icon="minus" width="18px" height="18px" fill="currentColor" aria-hidden="true"><path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path></svg></span></button>
                                                <input className="ant-input qnt-input text-center w-[50px] bg-white" type="number" id="room" defaultValue="0" />
                                                <button className="incBtn text-theme border border-theme rounded-full w-[27px] h-[27px] flex items-center justify-center" type="button"><span role="img" aria-label="plus" className="anticon anticon-plus"><svg viewBox="64 64 896 896" focusable="false" className="" data-icon="plus" width="18px" height="18px" fill="currentColor" aria-hidden="true"><defs><style></style></defs><path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"></path><path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"></path></svg></span></button>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between mb-1">
                                            <label>Guest</label>
                                            <div className="quantity flex items-center justify-between w-[104px]">
                                                <button className="decBtn text-theme border border-theme rounded-full w-[27px] h-[27px] flex items-center justify-center" type="button"><span role="img" aria-label="minus" className="anticon anticon-minus"><svg viewBox="64 64 896 896" focusable="false" className="" data-icon="minus" width="18px" height="18px" fill="currentColor" aria-hidden="true"><path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path></svg></span></button>
                                                <input className="ant-input qnt-input text-center w-[50px] bg-white" type="number" id="room" defaultValue="0" />
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
			
			</div>
		);
}