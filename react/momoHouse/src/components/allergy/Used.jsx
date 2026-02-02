import { FaRegCircle } from "react-icons/fa";

const Used = () => {
  return (
    <section>
      <div className=" gap-20 flex flex-col items-center  ">
        <h1 className="mt-20 text-[40px] font-bold">
          <span className="text-[#0C6967]">..........</span>{" "}
          <span className="text-[#D95103]">Ingredient's</span> Used
          <span className="text-[#0C6967]">..........</span>
        </h1>
        <div className="w-186 p-14 border-4 space-y-4 border-[#0C6967] ">
          <h2 className="text-[25px] font-bold ">For the Dough</h2>
          <ul className="text-[20px] font-semibold space-y-3  ">
            <li className="flex items-center gap-3">
              <FaRegCircle className="text-[#D95103]  " /> 120 gms refined flour
            </li>
            <li className="flex items-center gap-3">
              <FaRegCircle className="text-[#D95103]  " />
              1/4 tsp baking powder
            </li>
            <li className="flex items-center gap-3">
              <FaRegCircle className="text-[#D95103]  " />
              1/2 tsp salt water (for kneading)
            </li>
          </ul>
        </div>
        <div className="w-186 p-14 border-4 space-y-4 border-[#0C6967] ">
          <h2 className="text-[25px] font-bold ">For the Chicken Filling:</h2>
          <ul className="text-[20px] font-semibold space-y-3  ">
            <li className="flex items-center gap-3">
              <FaRegCircle className="text-[#D95103]  " /> 1 cup chicken
              (minced)
            </li>
            <li className="flex items-center gap-3">
              <FaRegCircle className="text-[#D95103]  " />
              1/2 cup onions, finely chopped
            </li>
            <li className="flex items-center gap-3">
              <FaRegCircle className="text-[#D95103]  " />
              1/4 tsp black pepper powder
            </li>
            <li className="flex items-center gap-3">
              <FaRegCircle className="text-[#D95103]  " />1 tbsp oil{" "}
            </li>
            <li className="flex items-center gap-3">
              <FaRegCircle className="text-[#D95103]  " />
              1/2 tsp garlic paste{" "}
            </li>
            <li className="flex items-center gap-3">
              <FaRegCircle className="text-[#D95103]  " />
              1/2 tsp soya sauce{" "}
            </li>
            <li className="flex items-center gap-3">
              <FaRegCircle className="text-[#D95103]  " />
              Salt{" "}
            </li>
            <li className="flex items-center gap-3">
              <FaRegCircle className="text-[#D95103]  " />
              1/4 tsp vinegar{" "}
            </li>
          </ul>
        </div>
        <div className="w-186 p-14 border-4 space-y-4 border-[#0C6967] ">
          <h2 className="text-[25px] font-bold ">
            For the Vegetarian Filling:
          </h2>
          <ul className="text-[20px] font-semibold space-y-3  ">
            <li className="flex items-center gap-3">
              <FaRegCircle className="text-[#D95103]  " />1 cup cabbage and
              carrots, grated
            </li>
            <li className="flex items-center gap-3">
              <FaRegCircle className="text-[#D95103]  " />2 tbsp onions , finely
              chopped
            </li>
            <li className="flex items-center gap-3">
              <FaRegCircle className="text-[#D95103]  " />
              1/2 tsp garlic, finely chopped
            </li>
            <li className="flex items-center gap-3">
              <FaRegCircle className="text-[#D95103]  " /> 1 tbsp oil
            </li>
            <li className="flex items-center gap-3">
              <FaRegCircle className="text-[#D95103]  " />
              1/4 tsp vinegar
            </li>
            <li className="flex items-center gap-3">
              <FaRegCircle className="text-[#D95103]  " />
              1/2 tsp soya sauce
            </li>
            <li className="flex items-center gap-3">
              <FaRegCircle className="text-[#D95103]  " /> to taste salt
            </li>
            <li className="flex items-center gap-3">
              <FaRegCircle className="text-[#D95103]  " />
              to taste pepper
            </li>
            <li className="flex items-center gap-3">
              <FaRegCircle className="text-[#D95103]  " />1 tbsp cornflour
            </li>
          </ul>
        </div>
        <div className="w-186 p-14 border-4 space-y-4 border-[#0C6967] ">
          <h2 className="text-[25px] font-bold ">For Chilli Sauce:</h2>
          <ul className="text-[20px] font-semibold space-y-3  ">
            <li className="flex items-center gap-3">
              <FaRegCircle className="text-[#D95103]  " /> 25 gram garlic,
              peeled
            </li>
            <li className="flex items-center gap-3">
              <FaRegCircle className="text-[#D95103]  " />6 gms whole red
              chillies
            </li>
            <li className="flex items-center gap-3">
              <FaRegCircle className="text-[#D95103]  " />3 tbsp vinegar
            </li>
            <li className="flex items-center gap-3">
              <FaRegCircle className="text-[#D95103]  " /> 3 tbsp vinegar
            </li>
            <li className="flex items-center gap-3">
              <FaRegCircle className="text-[#D95103]  " />1 tbsp oil
            </li>
            <li className="flex items-center gap-3">
              <FaRegCircle className="text-[#D95103]  " />
              to taste salt
            </li>
            <li className="flex items-center gap-3">
              <FaRegCircle className="text-[#D95103]  " />
              to taste sugar
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Used;
