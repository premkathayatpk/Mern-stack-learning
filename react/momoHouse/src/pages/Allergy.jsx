import Hero from "../components/allergy/Hero";
import Used from "../components/allergy/Used";
import AllergyAdvice from "../components/allergy/AllergyAdvice";

const Allergy = () => {
  return (
    <div className="pb-10 bg-white space-y-10">
      <Hero />
      <Used />
      <AllergyAdvice />
    </div>
  );
};

export default Allergy;
