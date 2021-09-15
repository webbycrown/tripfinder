import React from "react";

export const PropertyManagement = () => {
  const Property_title = "List your property";
  const Property_text = `Furnished Properties Pty Ltd is a Sydney based accommodation provider for the corporate market for both long and short term bookings. Furnished Properties primary objective is to grow their property portfolio across Sydney and to build a relationship with property owners and clients that puts them above the rest.`;
  const Property_name = "GENERAL MANAGER";
  return (
    <div>
      <section className="py-5 lg:py-14">
        <div className="container md:px-8 2xl:px-14">
          <div className="md:flex items-center">
            <div className="md:w-2/4 lg:w-2/5 mb-10 md:mb-0 pl-0 md:pr-8">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-dark mb-4 pr-14">
                {Property_title}
              </h2>
              <p className="text-base mb-5 md:mb-10 leading-relaxed">
                {Property_text}
              </p>
              <img src="./assets/img/signature.png" alt="" className="w-2/4" />
              <h5 className="mt-3 uppercase font-bold tracking-widest">
                {Property_name}
              </h5>
            </div>
            <div className="md:w-2/4 lg:w-3/5 grid grid-cols-2 gap-4 lg:gap-8">
              <div>
                <img src="./assets/img/london.jpg" alt="" />
              </div>
              <div>
                <img src="./assets/img/newyork.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
