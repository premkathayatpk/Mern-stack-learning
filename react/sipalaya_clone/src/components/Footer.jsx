import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="about_sip fl">
          <img
            src="https://sipalaya.com/wp-content/uploads/2024/03/sip-logo-trans.png"
            alt=""
          />

          <p>
            At <b>Sipalaya</b>, We're here to help you thrive. Learn in-demand
            skills, get hired, and advance your career with us. Join today and
            start your journey to success.
          </p>
          <br />
          <p>
            <b>WhatsApp / Phone:</b> 9851344071 | 9806393939
          </p>
          <br />
          <p>
            <b>Gmail: </b>infotech@sipalaya.com
          </p>
        </div>
        <div className="Quick_links fl">
          <h3>Quick Links</h3>
          <ul>
            <li>Dashboard</li>
            <li>Course</li>
            <li>Certificate Verification</li>
            <li>Contact Us</li>
            <li>Refund & Cancellation Policy</li>
          </ul>
        </div>
        <div className="course fl">
          <h3>EXPLORE OUR COURSES</h3>
          <ul>
            <li>Python With Data Science | (3-6) Months</li>
            <li>MERN Stack | 3 Months</li>
            <li>Full Stack Web Development in Python With Django | 3 Months</li>
          </ul>
        </div>
        <div className="payment fl">
          <h3>PAYMENT POWERED BY</h3>
          <img
            src="https://sipalaya.com/wp-content/uploads/2024/03/newLogo.ed7f73c800e12259be50.png"
            alt=""
          />
          <img
            src="https://sipalaya.com/wp-content/uploads/2024/03/esewa.png"
            alt=""
          />
        </div>
      </div>
      <div className="bottom_footer">
        <div className="social_link">
          <i class="fa-brands fa-facebook"></i>
         <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-linkedin"></i>
        </div>
        <hr />
        <p>&copy; All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
