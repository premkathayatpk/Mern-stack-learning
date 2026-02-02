import Hero from "../components/about/Hero";
import Banner from "../components/about/Banner";
import AboutMomo from "../components/about/AboutMomo";
import AboutCEO from "../components/about/AboutCEO";
import Team from "../components/about/Team";

const About = () => {
  return (
    <div className=" bg-white  space-y-10">
      <Hero />
      <Banner />
      <AboutMomo />
      <AboutCEO />
      <Team />
    </div>
  );
};

export default About;
