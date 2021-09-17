import React from 'react';

export const Location = () => {
	const Location_title = 'Location';
	const Location_des = 'Take an easy walk to the main historic sites of the city. The neighborhood is perfect for an authentic taste of Roman life, with shops, art galleries, restaurants, bars, and clubs all nearby and ready to be discovered.';
	const Location_distance = 'Distance from Leonardo da Vinci International Airport';
	const Location_traffic = '26 mins by car without traffic';
	return(
			<div>
				<div className="py-8">
					<h2 className="text-dark text-2xl mb-7 font-bold">{Location_title}</h2>
					<p className="my-7">{Location_des}</p>
					<p className="font-bold font-base">{Location_distance}</p>
					<p className="mb-7">{Location_traffic}</p>
					<div>
						<img src="./assets/img/map.png" alt="" />
					</div>
				</div>
			</div>
		);
}