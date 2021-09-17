import React from 'react';

export const Contact_details = () => {
	const office_hours_title = 'Office Hours';
	const office_date = 'Monday - Saturday 7:30am - 6:00pm';
	const office_close = 'Sunday/Public Holidays 7:30am - 12:00pm‍';
	const contact_title = 'Contact';
	const contact_phone = '(07) 4037 0400';
	const contact_email = 'info@tripfinder.com.au';
	const contact_address = '129-135 Oleander St, Holloways';
	const contact_location = 'Beach Cairns';
	const contact_code = 'QLD Australia 4878';
	return(
			<div className="w-full md:w-2/4 xl:w-1/3 px-5 mt-10 md:mt-0">
				<div className="bg-gray-100 p-6 md:p-8 rounded-md">
					<div className="w-full mb-8 sm:mb-14">
						<h4 className="text-gray-400 text-xl mb-3 sm:mb-4 font-semibold">{office_hours_title}</h4>
						<p className="text-base mb-3 text-dark font-bold">{office_date}</p>
						<p className="text-base mb-3 text-dark font-bold">{office_close}</p>
					</div>
					<div className="w-full">
						<h4 className="text-gray-400 text-xl mb-3 sm:mb-6 font-semibold">{contact_title}</h4>
						<p className="text-base mb-3 text-dark font-bold"><a href="tel:{contact_phone}" className="hover:text-theme">{contact_phone}</a></p>
						<p className="text-base mb-3 text-dark font-bold"><a href="mailto:{contact_email}" className="hover:text-theme">{contact_email}</a></p>
						<p className="text-base mb-3 text-dark font-bold">{contact_address}<br/> {contact_location}<br/> {contact_code}</p>
					</div>
				</div>
			</div>
		);
}