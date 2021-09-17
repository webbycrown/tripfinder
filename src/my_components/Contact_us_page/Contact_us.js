import React from 'react';
import { Contact_details } from './Contact_us_components/Contact_details';
import { Contact_form } from './Contact_us_components/Contact_form';

export const Contact_us = () => {
	return(
	<div>
		<section className="py-8 md:py-10">
			<div className="container max-w-[1920px] px-6 sm:px-14 mb-5">
				<div className="mb-5 md:mb-8">
					<h1 className="title">Contact Us</h1>
				</div>
				<div className="flex -mx-5 flex-wrap">
					<Contact_form />
					<Contact_details />
				</div>
			</div>
		</section>
	</div>
	);
}