import momoLogo from "../../assets/momoLogo.png";

const Footer = () => {
  return (
    <div className="p-5  flex flex-col items-center  ">
      <div className="w-282 flex justify-between ">
        <div className="w-102  ">
          <div className="flex gap-1 items-center ">
            <img className="h-10 w-10 " src={momoLogo} alt="momoLogo" />
            <h1 className="text-[#0C6967] font-bold text-[31px] "> momos</h1>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur. Elit sem tempor egestas
            molestie. Volutpat quis egestas porttitor turpis sit in. Lorem nunc
            nullam morbi urna amet suspendisse nullam ac vivamus.
          </p>
        </div>
        <div>
          <h1 className="text-[#0C6967] font-bold text-[31px] "> momos</h1>
          <ul>
            <li>About Us</li>
            <li>Our Menu</li>
            <li>Our Services</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h1 className="text-[#0C6967] font-bold text-[31px] "> Legals</h1>
        </div>
        <div className="">
          <h1 className="text-[#0C6967] font-bold text-[31px] "> Follow Us</h1>
        </div>
      </div>

      <div></div>
      <div></div>
    </div>
  );
};

export default Footer;
