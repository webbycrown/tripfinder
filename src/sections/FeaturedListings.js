import React from "react";
import SingleListing from "../components/SingleListing";

export const FeaturedListings = () => {
  const listings = [
    {
      title: "Small Metal Ball",
      address: "100 Harris Street",
      price: "From $233.00",
    },
    {
      title: "Small Metal Ball",
      address: "100 Harris Street",
      price: "From $233.00",
    },
    {
      title: "Small Metal Ball",
      address: "100 Harris Street",
      price: "From $233.00",
    },
    {
      title: "Small Metal Ball",
      address: "100 Harris Street",
      price: "From $233.00",
    },
    {
      title: "Small Metal Ball",
      address: "100 Harris Street",
      price: "From $233.00",
    },
  ];

  const Features_title = "Travelers’ Choice: Top hotels";
  const Features_showall = "Show all";

  return (
    <section className="py-8 md:py-14">
      <div className="container max-w-[1920px] px-6 sm:px-8">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl sm:text-2xl font-bold text-dark">
            {Features_title}
          </h2>
          <a href="#" className="text-dark text-base hover:text-theme">
            {Features_showall}
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6 sm:gap-4">
          {listings.map((listing) => (
            <SingleListing listing={listing} />
          ))}
        </div>
      </div>
    </section>
  );
};
