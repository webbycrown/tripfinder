import React from 'react';

export const Review = () => {
	const Review_title = 'Our Happy Guests';
	const Review_box_title = 'Perfect Beach Resort';
	const Review_box_text = 'If you are looking for clean, well appointed lodging in a quiet beach town setting look no further. Naomi and Wayne are simply the most gracious hosts who are super friendly and willing to go way above and beyond to make your stay wonderful. We did not have a car but found the local,bus easy to,use. We used it during our stay to visit Cairns and also Smithfield. We found booking tours at the resort was convenient and worth the extra money for the ease of operation. The Strait on The Beach Cafe right across the street is the perfect spot for lunch and dinner. They have great food with live entertainment on some evenings. We cannot say enough about our stay and the outstanding service from Naomi and Wayne.';
	const Review_box_name = 'Al CPO ';
	const Review_box_location = 'Oceanside, California';

	return(
		<div>
			<section className="py-10 md:py-14">
				<div className="container max-w-[1170px]">
					<div className="mb-8 md:mb-14 text-center">
						<h2 className="text-2xl md:text-4xl font-extrabold text-dark">{Review_title}</h2>
					</div>
					<div className="review-slider">
						<div className="swiper mySwiper">
	                        <div className="swiper-wrapper">
	                            <div className="swiper-slide">
	                            	<div className="border border-gray-200 rounded-md p-6 md:p-8">
	                            		<div className="mb-4 sm:mb-8"><img src="./assets/img/download.png" alt="" /></div>
	                            		<h4 className="text-base leading-relaxed">{Review_box_title}</h4>
	                            		<p className="text-base leading-relaxed mb-7">{Review_box_text}</p>
	                            		<h3 className="text-theme text-xl mb-1 font-extrabold">{Review_box_name}</h3>
	                            		<h5 className="text-gray text-base">{Review_box_location}</h5>
	                            	</div>
	                            </div>
	                            <div className="swiper-slide">
	                            	<div className="border border-gray-200 rounded-md p-6 md:p-8">
	                            		<div className="mb-4 sm:mb-8"><img src="./assets/img/download.png" alt="" /></div>
	                            		<h4 className="text-base leading-relaxed">{Review_box_title}</h4>
	                            		<p className="text-base leading-relaxed mb-7">{Review_box_text}</p>
	                            		<h3 className="text-theme text-xl mb-1 font-extrabold">{Review_box_name}</h3>
	                            		<h5 className="text-gray text-base">{Review_box_location}</h5>
	                            	</div>
	                            </div>
	                            <div className="swiper-slide">
	                            	<div className="border border-gray-200 rounded-md p-6 md:p-8">
	                            		<div className="mb-4 sm:mb-8"><img src="./assets/img/download.png" alt="" /></div>
	                            		<h4 className="text-base leading-relaxed">{Review_box_title}</h4>
	                            		<p className="text-base leading-relaxed mb-7">{Review_box_text}</p>
	                            		<h3 className="text-theme text-xl mb-1 font-extrabold">{Review_box_name}</h3>
	                            		<h5 className="text-gray text-base">{Review_box_location}</h5>
	                            	</div>
	                            </div>
                            </div>
                            <div className="swiper-pagination static mt-10 md:mt-16"></div>
                        </div>
					</div>
				</div>
			</section>
		</div>
		);
	}