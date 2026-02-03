import React from "react";
import Hero from "../components/services/Hero";
import Party from "../components/services/Party";
import Queries from "../components/services/Queries";
import ServiceBanner from "../components/services/ServiceBanner";

const Services = () => {
  return (
    <div className="bg-white pb-15">
      <Hero />
      <ServiceBanner />
      <Party />
      <Queries />
    </div>
  );
};

export default Services;
