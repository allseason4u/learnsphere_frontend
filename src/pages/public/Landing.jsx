import React from "react";
import Hero from "@/Components/landing/Hero/Hero.jsx";
import Banner from "@/Components/landing/Banner/Banner.jsx";
import Products from "@/Components/landing/Products/Products.jsx";
import Subscribe from "@/Components/landing/Subscribe/Subscribe.jsx";
import Testimonials from "@/Components/landing/Testimonials/Testimonials.jsx";
import Popup from "@/Components/landing/Popup/Popup.jsx";
import FAQ from "@/Components/landing/FAQ/FAQ.jsx";
import LandingLayout from "@/Components/layout/landingLayout.jsx";
export default function Landing() {
  return (
    <>
      <LandingLayout>
        <Hero />
        <Banner />
        <Products />
        <Subscribe />
        <Testimonials />
        <Popup />
        <FAQ />
      </LandingLayout>
    </>
  );
}
