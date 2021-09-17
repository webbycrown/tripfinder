import React from 'react';
const backgroundImage = {
  	backgroundImage:"url(" +"./assets/img/single-post-bg.fe05ed7c.jpg"+")",
    width:'100%',
    height:'600px', 
    backgroundSize:'cover',
    backgroundPosition:'center',
    backgroundRepeat:'no-repeat'
}
export const Image_slider = () => {
	return(
			<div>
				<section className="single-image-slider relative" style={backgroundImage}>
					<button type="button" className="btn image_gallery_button absolute bottom-7 right-7 bg-white text-dark py-3 text-md font-bold px-4 shadow-btn hover:opacity-90">View Photos</button>
				</section>
			</div>
		);
}