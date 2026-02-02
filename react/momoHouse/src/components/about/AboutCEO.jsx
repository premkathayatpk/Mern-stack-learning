import women from "../../assets/women.png";
import { ImQuotesLeft } from "react-icons/im";
const AboutCEO = () => {
  return (
    <section>
      <div
        className="flex justify-between h-160 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://tse4.mm.bing.net/th/id/OIP.avZdbeaP30ubrrOFfe_EhwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3)`,
        }}
      >
        <div className=" flex  w-xl h-103.25 ml-39 mt-28.5 gap-16 text-white ">
          <div className="  space-y-16 w-xl ">
            <div>
              <h1 className="text-[37px] ">
                <ImQuotesLeft />
              </h1>
              <p className="text-[24px] font-(--font-inter)  ">
                Momo is not just about sustenance, it's about bringing people
                together and creating memories. At our restaurant, we strive to
                create a warm and inviting atmosphere where our guests can enjoy
                delicious momo, great company, and unforgettable experiences
              </p>
            </div>

            <div>
              <p className="text-[39px] font-bold ">Marcus Schleifer</p>
              <p className="text-[25px] font-bold ">CEO</p>
            </div>
          </div>
        </div>

        <img className="w-153 h-160  " src={women} alt="women" />
      </div>
    </section>
  );
};

export default AboutCEO;
