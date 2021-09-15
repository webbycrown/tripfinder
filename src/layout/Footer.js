import React from "react";

export const Footer = () => {
  const office_hours_title = "Office Hours";
  const office_date = "Monday - Saturday 7:30am - 6:00pm";
  const office_close = "Sunday/Public Holidays 7:30am - 12:00pm‍";
  const contact_title = "Contact";
  const contact_phone = "(07) 4037 0400";
  const contact_email = "info@tripfinder.com.au";
  const contact_address = "129-135 Oleander St, Holloways";
  const contact_location = "Beach Cairns";
  const contact_code = "QLD Australia 4878";
  const copyright = "© Trip Finder 2021, All Rights Reserved";
  const Built_love = "Built with love by";
  const Built_love_name = "Resly";

  return (
    <div>
      <footer className="py-8 bg-dark-900 pt-14 md:pt-36">
        <div className="container">
          <div className="sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-20 pb-7 md:pb-14">
            <div className="col-span-2 md:col-span-1 mb-8 sm:mb-5 md:mb-0">
              <div className="block">
                <a href="#" className="flex items-center text-white">
                  <svg width="25" height="27.984" viewBox="0 0 25 27.984">
                    <g transform="translate(0 0)">
                      <path
                        d="M25.45,2.767a34.5,34.5,0,0,0-4,1.143,35.262,35.262,0,0,0-3.771,1.545,26.069,26.069,0,0,0-3.179,1.8,26.068,26.068,0,0,0-3.191-1.8A35.262,35.262,0,0,0,7.54,3.909,34.5,34.5,0,0,0,3.55,2.767L2,2.45V17.94a12.5,12.5,0,1,0,25,0V2.45ZM14.5,10.492c2.339,1.96,3.522,4.19,3.512,6.608a3.512,3.512,0,1,1-7.024,0h0C10.98,14.66,12.162,12.442,14.5,10.492Zm9.913,7.448a9.915,9.915,0,0,1-19.831,0V5.69a31.8,31.8,0,0,1,7.748,3.259,13.43,13.43,0,0,0-2.344,2.737A9.929,9.929,0,0,0,8.4,17.095a6.1,6.1,0,1,0,12.2,0,9.932,9.932,0,0,0-1.587-5.412,13.427,13.427,0,0,0-2.346-2.742,29.737,29.737,0,0,1,5.586-2.577c.819-.284,1.559-.51,2.158-.675Z"
                        transform="translate(-2 -2.45)"
                        fill="currentColor"
                      ></path>
                    </g>
                  </svg>
                  <h3 className="font-bold text-xl ml-3">TripFinder.</h3>
                </a>
              </div>
              <ul className="flex items-center list-none mt-7">
                <li className="mr-3">
                  <a href="#" className="text-white hover:text-theme">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="facebook-f"
                      className="w-5 h-5 svg-inline--fa fa-facebook-f fa-w-10"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li className="mr-3">
                  <a href="#" className="text-white hover:text-theme">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="twitter"
                      className="w-5 h-5 svg-inline--fa fa-twitter fa-w-16"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li className="mr-3">
                  <a href="#" className="text-white hover:text-theme">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="instagram"
                      className="w-5 h-5 svg-inline--fa fa-instagram fa-w-14"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full mb-8 sm:mb-0">
              <h4 className="text-gray-400 text-xl mb-3 sm:mb-6 font-semibold">
                {office_hours_title}
              </h4>
              <p className="text-base mb-3 text-white font-bold">
                {office_date}
              </p>
              <p className="text-base mb-3 text-white font-bold">
                {office_close}
              </p>
            </div>
            <div className="w-full">
              <h4 className="text-gray-400 text-xl mb-3 sm:mb-8 font-semibold">
                {contact_title}
              </h4>
              <p className="text-base mb-3 text-white font-bold">
                <a href="tel:{contact_phone}" className="hover:text-theme">
                  {contact_phone}
                </a>
              </p>
              <p className="text-base mb-3 text-white font-bold">
                <a href="mailto:{contact_email}" className="hover:text-theme">
                  {contact_email}
                </a>
              </p>
              <p className="text-base mb-3 text-white font-bold">
                {contact_address}
                <br /> {contact_location}
                <br /> {contact_code}
              </p>
            </div>
          </div>

          <div className="border-t border-gray-400 border-opacity-50 pt-6 text-center md:text-left  md:flex items-center justify-between">
            <p className="font-s13 text-gray-400 mb-2 md:mb-0">{copyright}</p>
            <p className="font-s13 text-gray-400">
              {Built_love} <a href="#">{Built_love_name}</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
