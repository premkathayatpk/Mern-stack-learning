import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="navbar">
        <div className="logo">
          <img
            src="https://sipalaya.com/wp-content/uploads/2024/03/sip-logo-trans.png"
            alt="logo"
          />
        </div>
        <div className="nav_items">
          <ul>
            <li>Home</li>
            <li>All Courses</li>
            <li>Code Your Future</li>
            <li>About Us</li>
            <li>Blogs</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="banner">
        <div className="nav_text">
          <span className="title">Career-Ready IT Training in Nepal</span>
          <br />
          <p className="n_dis">
            Gain job-ready skills with our IT courses in Nepal. Elevate your
            career prospects today!
          </p>
          <br />
          <button>Find The Course -</button>
        </div>
        <div className="nav_img">
          <img
            src="https://sipalaya.com/wp-content/uploads/2024/03/hero.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
