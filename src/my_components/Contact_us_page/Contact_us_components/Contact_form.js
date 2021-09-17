import React from 'react';

export const Contact_form = () => {
	const Your_message = 'Your message';
	const Your_email = 'Your email';
	const Your_number = 'Your contact number';
	const Your_checkbox = 'Save my email in the browser fro the next time I contact';
	const contact_btn = 'Send';
	return(
			<div className="w-full md:w-2/4 xl:w-2/3 px-5">
				<form>
					<div className="py-2 md:py-4">
						<label className="text-md mb-2 font-semibold block">{Your_message}</label>
						<textarea className="form-control h-[100px] md:h-[150px]"></textarea>
					</div>
					<div className="grid md:grid-cols-2 md:gap-6">
						<div className="py-2 md:py-4">
							<label className="text-md mb-2 font-semibold block">{Your_email}</label>
							<input type="email" className="form-control" /> 
						</div>
						<div className="py-2 md:py-4">
							<label className="text-md mb-2 font-semibold block">{Your_number}</label>
							<input type="text" className="form-control" /> 
						</div>
					</div>
					
					<div className="py-2 md:py-4">
						<label className="text-md font-semibold ant-checkbox-wrapper group relative pl-6 mb-4 block cursor-pointer">
                        	<input type="checkbox" className="absolute opacity-0 hidden ant-checkbox-input" value="free-wifi" />
                        	<span className="ant-checkbox-inner absolute top-[3px] md:top-[2px] left-0 w-4 h-4 border border-gray-300 rounded-sm block group-hover:border-theme"></span>
                        	{Your_checkbox}
                        </label>
					</div>
					<button type="button" className="btn btn-primary mt-2 uppercase font-bold">{contact_btn}</button>
				</form>
			</div>
		);
}