import React from 'react';

export const Culture = () => {
	const image_title = 'Our Rooms';
	const image_sub_title = 'Get Ready to live for unlimited living';
	return(
		<div>
			<section className="py-8">
				<div className="max-w-full">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0">
						<div className="group relative overflow-hidden block before:content before:pt-[50%] sm:before:pt-[80%] xl:before:pt-[43%] before:block">
							<img src="./assets/img/gallery-img1.jpg" alt=""  className="absolute top-0 left-0 w-full h-full object-cover transition-all ease-in-out duration-3000 group-hover:scale-110"/>
							<div className="absolute top-0 left-0 p-5 w-full h-full bg-black bg-opacity-20 flex flex-wrap items-center transition-all ease-in-out duration-3000 group-hover:bg-opacity-50 justify-center content-center text-center">
								<h3 className="text-2xl text-white font-bold mb-2 block w-full"><a href="#">{image_title}</a></h3>
								<p className="text-sm text-white w-full">{image_sub_title}</p>
							</div>
						</div>
						<div className="group relative overflow-hidden block before:content before:pt-[50%] sm:before:pt-[80%] xl:before:pt-[43%] before:block">
							<img src="./assets/img/gallery-img2.jpg" alt=""  className="absolute top-0 left-0 w-full h-full object-cover transition-all ease-in-out duration-3000 group-hover:scale-110"/>
							<div className="absolute top-0 left-0 p-5 w-full h-full bg-black bg-opacity-20 flex flex-wrap items-center transition-all ease-in-out duration-3000 group-hover:bg-opacity-50 justify-center content-center text-center">
								<h3 className="text-2xl text-white font-bold mb-2 block w-full"><a href="#">{image_title}</a></h3>
								<p className="text-sm text-white w-full">{image_sub_title}</p>
							</div>
						</div>
						<div className="group relative overflow-hidden block before:content before:pt-[50%] sm:before:pt-[80%] xl:before:pt-[43%] before:block">
							<img src="./assets/img/gallery-img3.jpg" alt=""  className="absolute top-0 left-0 w-full h-full object-cover transition-all ease-in-out duration-3000 group-hover:scale-110"/>
							<div className="absolute top-0 left-0 p-5 w-full h-full bg-black bg-opacity-20 flex flex-wrap items-center transition-all ease-in-out duration-3000 group-hover:bg-opacity-50 justify-center content-center text-center">
								<h3 className="text-2xl text-white font-bold mb-2 block w-full"><a href="#">{image_title}</a></h3>
								<p className="text-sm text-white w-full">{image_sub_title}</p>
							</div>
						</div>
						<div className="group relative overflow-hidden block before:content before:pt-[50%] sm:before:pt-[80%] xl:before:pt-[43%] before:block">
							<img src="./assets/img/gallery-img4.jpg" alt=""  className="absolute top-0 left-0 w-full h-full object-cover transition-all ease-in-out duration-3000 group-hover:scale-110"/>
							<div className="absolute top-0 left-0 p-5 w-full h-full bg-black bg-opacity-20 flex flex-wrap items-center transition-all ease-in-out duration-3000 group-hover:bg-opacity-50 justify-center content-center text-center">
								<h3 className="text-2xl text-white font-bold mb-2 block w-full"><a href="#">{image_title}</a></h3>
								<p className="text-sm text-white w-full">{image_sub_title}</p>
							</div>
						</div>
						<div className="group relative overflow-hidden block before:content before:pt-[50%] sm:before:pt-[80%] xl:before:pt-[43%] before:block">
							<img src="./assets/img/gallery-img5.jpg" alt=""  className="absolute top-0 left-0 w-full h-full object-cover transition-all ease-in-out duration-3000 group-hover:scale-110"/>
							<div className="absolute top-0 left-0 p-5 w-full h-full bg-black bg-opacity-20 flex flex-wrap items-center transition-all ease-in-out duration-3000 group-hover:bg-opacity-50 justify-center content-center text-center">
								<h3 className="text-2xl text-white font-bold mb-2 block w-full"><a href="#">{image_title}</a></h3>
								<p className="text-sm text-white w-full">{image_sub_title}</p>
							</div>
						</div>
						<div className="group relative overflow-hidden block before:content before:pt-[50%] sm:before:pt-[80%] xl:before:pt-[43%] before:block">
							<img src="./assets/img/gallery-img6.jpg" alt=""  className="absolute top-0 left-0 w-full h-full object-cover transition-all ease-in-out duration-3000 group-hover:scale-110"/>
							<div className="absolute top-0 left-0 p-5 w-full h-full bg-black bg-opacity-20 flex flex-wrap items-center transition-all ease-in-out duration-3000 group-hover:bg-opacity-50 justify-center content-center text-center">
								<h3 className="text-2xl text-white font-bold mb-2 block w-full"><a href="#">{image_title}</a></h3>
								<p className="text-sm text-white w-full">{image_sub_title}</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
		);
	}