import React from "react";
import SingleReview from "../components/SingleReview";

export const Reviews = () => {
  const reviews = [
    {
      title: "Perfect Beach Resort",
      body: "If you are looking for clean, well appointed lodging in a quiet beach town setting look no further. Naomi and Wayne are simply the most gracious hosts who are super friendly and willing to go way above and beyond to make your stay wonderful. We did not have a car but found the local,bus easy to,use. We used it during our stay to visit Cairns and also Smithfield. We found booking tours at the resort was convenient and worth the extra money for the ease of operation. The Strait on The Beach Cafe right across the street is the perfect spot for lunch and dinner. They have great food with live entertainment on some evenings. We cannot say enough about our stay and the outstanding service from Naomi and Wayne.",
      name: "Al CPO ",
      source: "Oceanside, California",
    },
    {
      title: "Perfect Beach Resort",
      body: "If you are looking for clean, well appointed lodging in a quiet beach town setting look no further. Naomi and Wayne are simply the most gracious hosts who are super friendly and willing to go way above and beyond to make your stay wonderful. We did not have a car but found the local,bus easy to,use. We used it during our stay to visit Cairns and also Smithfield. We found booking tours at the resort was convenient and worth the extra money for the ease of operation. The Strait on The Beach Cafe right across the street is the perfect spot for lunch and dinner. They have great food with live entertainment on some evenings. We cannot say enough about our stay and the outstanding service from Naomi and Wayne.",
      name: "Al CPO ",
      source: "Oceanside, California",
    },
  ];

  const Review_title = "Our Happy Guests";

  return (
    <div>
      <section className="py-10 md:py-14">
        <div className="container max-w-[1170px]">
          <div className="mb-8 md:mb-14 text-center">
            <h2 className="text-2xl md:text-4xl font-extrabold text-dark">
              {Review_title}
            </h2>
          </div>
          <div className="review-slider">
            <div className="swiper mySwiper">
              <div className="swiper-wrapper">
                {reviews.map((review) => (
                  <SingleReview review={review} />
                ))}
              </div>
              <div className="swiper-pagination static mt-10 md:mt-16"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
