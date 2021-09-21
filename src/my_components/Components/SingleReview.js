import React from "react";

function SingleReview({ review }) {
  const { title = "", body = "", source = "", name = "" } = review;
  return (
    <div className="swiper-slide">
      <div className="border border-gray-200 rounded-md p-6 md:p-8">
        <div className="mb-4 sm:mb-8" key={review.source}>
          <img src="./assets/img/download.png" alt="" />
        </div>
        <h4 className="text-base leading-relaxed">{title}</h4>
        <p className="text-base leading-relaxed mb-7">{body}</p>
        <h3 className="text-theme text-xl mb-1 font-extrabold">{name}</h3>
        <h5 className="text-gray text-base">{source}</h5>
      </div>
    </div>
  );
}

export default SingleReview;