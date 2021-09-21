import React from "react";

function SingleActivity({ activity }) {
  const { title = "", brief = "", img = "" } = activity;

  return (
    <div className="group relative overflow-hidden block before:content before:pt-[50%] sm:before:pt-[80%] xl:before:pt-[43%] before:block">
      <img
        src={img}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover transition-all ease-in-out duration-3000 group-hover:scale-110"
      />
      <div className="absolute top-0 left-0 p-5 w-full h-full bg-black bg-opacity-20 flex flex-wrap items-center transition-all ease-in-out duration-3000 group-hover:bg-opacity-50 justify-center content-center text-center">
        <h3 className="text-2xl text-white font-bold mb-2 block w-full">
          <a href="#">{title}</a>
        </h3>
        <p className="text-sm text-white w-full">{brief}</p>
      </div>
    </div>
  );
}

export default SingleActivity;