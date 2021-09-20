import React from 'react';
import { Image_slider } from './single_listing_components/Image_slider';
import { Tabs_bar } from './single_listing_components/Tabs-bar';
import { Description } from './single_listing_components/Description';
import { Amenities_facilities } from './single_listing_components/Amenities_facilities';
import { Location } from './single_listing_components/Location';
import { Single_review } from './single_listing_components/Single_review';
import { Book_now_box } from './single_listing_components/Book_now_box';
export const Single_listing_page = () => {
	return(
			<div>
				<Image_slider />
				<Tabs_bar />
				<div className="container max-w-[1170px] py-10">
					<div className="flex -mx-3 w-full">
						<div className="w-2/3 px-3">
							<Description />
							<Amenities_facilities />
							<Location />
							<Single_review />
						</div>
						<div className="w-1/3 px-3">
							<Book_now_box />
						</div>
					</div>
				</div>
				
			</div>
		);
}