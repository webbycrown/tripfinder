import React from 'react';
import { Find_hotels_form } from '../Components/Find_hotels_form';

export const Hero_section = () => {
	const form_title = 'Latest reviews. Lowest prices.';
	const form_sub_text = 'compares prices from 200+ booking sites to help you find the lowest price on the right hotel for you.';
	const from_btn = 'Find Hotels';
	return(
		
            <section className="home-hiro-slider relative min-h-screen flex flex-wrap pt-14 pb-16 sm:pt-20 sm:pb-20">
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="swiper mySwiper h-full">
                        <div className="swiper-wrapper h-full">
                            <div className="swiper-slide h-full">
                                <div className="px-3 bg-center h-full relative bg-no-repeat bg-center bg-cover py-28 text-center" style={{ backgroundImage: 'url(/assets/img/hero-img1.jpg)' }}>
                                    <div className="w-full h-full absolute top-0 left-0 bg-dark opacity-30 z-0"></div>
                                </div>
                            </div>
                            <div className="swiper-slide h-full">
                                <div className="px-3 bg-center h-full relative bg-no-repeat bg-center bg-cover py-28 text-center" style={{ backgroundImage: 'url(/assets/img/hero-img2.jpg)' }}>
                                    <div className="w-full h-full absolute top-0 left-0 bg-dark opacity-30 z-0"></div>
                                </div>
                            </div>
                            <div className="swiper-slide h-full">
                                <div className="px-3 bg-center h-full relative bg-no-repeat bg-center bg-cover py-28 text-center" style={{ backgroundImage: 'url(/assets/img/hero-img3.jpg)' }}>
                                    <div className="w-full h-full absolute top-0 left-0 bg-dark opacity-30 z-0"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-auto container lg:max-w-[1170px] relative z-2 flex items-end">
                	<div className="p-5 sm:p-8 bg-white max-w-[410px] lg:max-w-full w-full rounded-md">
                		
                		<Find_hotels_form />
                	</div>
                </div>
                
            <div className="swiper-pagination mb-4"></div>
        </section>

	);
}