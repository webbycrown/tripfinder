import React from "react";

import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";

import { HeroSection } from "../sections/HeroSection";
import { FeaturedListings } from "../sections/FeaturedListings";
import { Activities } from "../sections/Activities";
import { PropertyManagement } from "../sections/PropertyManagement";
import { Reviews } from "../sections/Reviews";

function IndexPage() {
  return (
    <>
      <Header />
      <HeroSection />
      <FeaturedListings />
      <Activities />
      <PropertyManagement />
      <Reviews />
      <Footer />
    </>
  );
}

export default IndexPage;
