import React from 'react';
import SingleActivity from "./SingleActivity";

export const Culture = () => {

	const activities = [
    {
      title: "Our Rooms",
      brief: "Our Rooms",
      img: "/assets/img/gallery-img1.jpg",
    },
    {
      title: "Onsen",
      brief: "Experience lifetime happiness",
      img: "/assets/img/gallery-img2.jpg",
    },
    {
      title: "Dining",
      brief: "Dining",
      img: "/assets/img/gallery-img3.jpg",
    },
    {
      title: "Things to do",
      brief: "Things to do",
      img: "/assets/img/gallery-img4.jpg",
    },
    {
      title: "Iconic Bath",
      brief: "Iconic Bath",
      img: "/assets/img/gallery-img5.jpg",
    },
    {
      title: "Spa & Massage",
      brief: "Spa & Massage",
      img: "/assets/img/gallery-img6.jpg",
    },
  ];

	return(
		<div>
			<section className="py-8">
				<div className="max-w-full">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0">
						{activities.map((activity) => (
			              <SingleActivity activity={activity} key={activity.title} />
			            ))}
					</div>
				</div>
			</section>
		</div>
		);
	}