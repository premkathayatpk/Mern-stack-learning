import { MdOutlineSlowMotionVideo } from "react-icons/md";

const Banner = () => {
  return (
    <section>
      <div
        className="w-full h-150 bg-cover bg-center  flex flex-col justify-end pb-15 "
        style={{
          backgroundImage: `url("https://cdn.pixabay.com/photo/2024/10/19/12/21/vegetables-9132660_1280.jpg")`,
        }}
      >
        <div className="text-white px-20 py-4 bg-linear-to-r from-black/90 to-transparent">
          <div>
            <h1 className="text-4xl font-medium">Process behind the making</h1>
            <p className="my-2 text-xl">
              See how we make momos that you like from only the best ingredients
            </p>
          </div>
          <button className=" bg-green-700  rounded-2xl p-2 flex w-45 items-center gap-x-1">
            <p className="bg-white rounded-full">
              <MdOutlineSlowMotionVideo size="25px" className="text-gray-700" />
            </p>
            Watch the Video
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
