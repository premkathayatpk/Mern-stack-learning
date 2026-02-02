import qr from "../../assets/qr.png";
import { FaMobileScreenButton } from "react-icons/fa6";
const AllergyAdvice = () => {
  return (
    <section>
      <div className=" gap-20 flex flex-col items-center  ">
        <h1 className="mt-20 text-[40px] font-bold">
          <span className="text-[#0C6967]">..........</span>{" "}
          <span className="text-[#D95103]">Ingredient's</span> Used
          <span className="text-[#0C6967]">..........</span>
        </h1>
        <p className="w-282 text-[16px]  ">
          Lorem ipsum dolor sit amet consectetur. Feugiat lectus sit est blandit
          in gravida. Nisl facilisis luctus sit porttitor placerat purus
          tincidunt. Cursus nascetur a mauris odio quis sociis pretium nisl. In
          viverra diam dis montes orci congue vulputate magna ullamcorper.
          Semper tellus ipsum felis maecenas ultrices turpis amet euismod
          malesuada. Amet sed neque vitae malesuada quis sed urna.
          <br />
          Feugiat orci feugiat cursus risus tincidunt. Aliquet nam iaculis
          bibendum tortor varius sit. Volutpat nunc nisl quisque elit. Ac est
          ultricies risus et sed. Donec auctor tristique quam morbi pellentesque
          et. Scelerisque dui id arcu laoreet iaculis nunc et nulla sed. Aliquet
          nullam vulputate quis ut mi placerat auctor. Ipsum massa suspendisse
          netus mollis interdum.
          <br />
          Augue leo eget ut vitae maecenas ac. Metus massa nunc tristique donec
          dignissim aenean congue justo et. Parturient elit adipiscing non vitae
          mattis. Congue senectus urna cursus nisi nisl nisl tincidunt rhoncus.
          Congue sit etiam vestibulum elit aenean leo enim volutpat. Aliquet
          vitae condimentum bibendum ullamcorper vel cursus libero netus
          bibendum. Lorem id ut proin tincidunt. Nibh nunc amet odio est et. Sem
          dui nunc morbi leo quisque viverra ultrices. Mattis at tempus
          ultricies ut feugiat nunc dignissim. Urna turpis purus turpis elit
          risus.
          <br />
          Sed elit ornare senectus dignissim diam dolor sed dictum. Faucibus
          mauris senectus odio blandit diam nunc. Urna volutpat ut potenti ut
          mus orci neque sem. Mattis amet at amet faucibus nisl morbi aenean ac.
          Justo turpis bibendum donec lacinia. Enim integer ornare nibh urna
          enim tortor arcu sit lacinia. Dapibus praesent vitae dolor cursus
          fringilla hac facilisis pellentesque. Elementum lacus varius et neque
          amet aliquam donec sed. Ultrices euismod commodo id vehicula commodo.
          Amet lorem eros nulla mauris. Sit arcu enim sit nunc mi sed aenean.
          Ornare enim vitae volutpat est dui tortor. Viverra habitant et
          consequat vitae elit aliquet iaculis in tristique.
          <br />
          Quam ipsum viverra ac laoreet platea in praesent. Mattis molestie arcu
          nulla convallis interdum proin dui ut porta. Amet potenti praesent
          pulvinar scelerisque vitae habitant eget. Senectus hac id aliquam
          ipsum urna. Est ut amet nec sollicitudin nunc viverra nec ipsum
          suspendisse. Etiam risus ultricies dictum nisl. Bibendum ultrices
          elementum feugiat erat suspendisse mi fermentum magna suspendisse.
          Nisi mattis consequat nec donec eu amet nulla a. At blandit vulputate
          morbi tortor amet. Hac nec gravida tempor ac. Senectus nunc libero
          scelerisque quisque. Risus condimentum mattis massa integer.
        </p>
      </div>
      <div className="bg-[#FAFBFB] w-282 rounded-2xl p-10 space-y-12 flex flex-col items-center m-auto  ">
        <div className="text-center">
          <h2 className="text-[31px] font-bold text-[#0C6967] ">
            Scan the QR code
          </h2>
          <p className="text-[20px]  ">
            You can also check the allergy advices using your phone as well
          </p>
        </div>
        <div>
          <img className="h-48 w-48" src={qr} alt="" />
          <h1 className="flex  gap-2 items-center justify-center text-[31px] font-bold ">
            <span className="text-[#D95103]"> SCAN </span> ME!
            <FaMobileScreenButton />
          </h1>
        </div>
      </div>
    </section>
  );
};

export default AllergyAdvice;
