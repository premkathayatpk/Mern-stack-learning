import "./Forms.css";
const Forms = () => {
  return (
    <div className="parent">
      <h1>Event Registration Form</h1>

      <h3>About This Event</h3>
      <table>
        <tbody>
          <tr>
            <th>Event</th>
            <td>Digital Marketing Masterclass</td>
          </tr>
          <tr>
            <th>Date</th>
            <td>October 15, 2028</td>
          </tr>
          <tr>
            <th>Time</th>
            <td>2:00 PM - 4:00 PM</td>
          </tr>
          <tr>
            <th>Speaker</th>
            <td>Sarah Johnson</td>
          </tr>
        </tbody>
      </table>

      <hr />
      <h3>Participant Information</h3>
      <form>
        <div className="top_form">
          <div className="name">
            <label htmlFor="full_name"> Full Name</label>
            <br />
            <input type="text" id="full_name" />
          </div>
          <div className="dob">
            <label htmlFor="birth">Date of Birth</label>
            <br />
            <input type="date" id="birth" />
          </div>

          <div className="g">
            <label htmlFor="gender">Gender</label>
            <br />
            <input type="radio" id="male" name="gender" />
            <label htmlFor="male">Male</label>
            <br />
            <input type="radio" name="gender" id="female" />
            <label htmlFor="female">Female</label>
          </div>
          <div className="phn">
            <label htmlFor="phone">Phone</label>
            <br />
            <input type="number" id="phone" />
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <br />
            <input type="email" id="email" />
          </div>

          <div className="knowFrom" 
          style={{
             width: "100%",
          }}>
            <div>
              <label htmlFor="knowFrom">
                Where did heare about this event?
              </label>
            </div>

            <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                // gap:"10px",
                // border:"1px solid black",
              }}
              
            >
              <input type="radio" name="knowFrom" id="fb" />
              <label htmlFor="fb">Facebook</label>
              <input type="radio" name="knowFrom" id="yt" />
              <label htmlFor="yt">Youtube</label>
              <input type="radio" name="knowFrom" id="insta" />
              <label htmlFor="insta">Instagram</label>
              <input type="radio" name="knowFrom" id="twitter" />
              <label htmlFor="twitter">Twitter</label>
              <input type="radio" name="knowFrom" id="other" />
              <label htmlFor="other">Other:</label>
              <input type="text" id="other" />
            </div>
          </div>
        </div>
        <hr />
<h3>Payment Information</h3>
        <div className="bottom_form">
          
          <div className="NumTicket">
            <label htmlFor="ticket">Number of Tickets</label>
            <br />
            <input
            style={{
              width:"200px"
            }}
            type="number" id="ticket" />
          </div>
          <div className="pay_method">
            <label htmlFor="payMethod">Payment Method</label>
            <br />
            <input type="radio" name="payMethod" />
            <label htmlFor="credit">Credit Card</label>
            <input type="radio" name="payMethod" />
            <label htmlFor="debit">Debit Card</label>
            <input type="radio" name="payMethod" />
            <label htmlFor="cash">Cash</label>
            <input type="radio" name="payMethod" />
            <label htmlFor="check">Check</label>
          </div>

          <div className="terms"
          style={{
            width:"300px"
          }}
          >
            <p>
              I understand that... Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. In, aperiam.
            </p>
            <br />
            <input type="radio" id="condition" required />
            <label htmlFor="condition">Yes, I understand.</label>
          </div>
          <div className="sign">
            <label htmlFor="sign">Signature:</label>
            <input type="text" id="sign" />
            <br />
            <label htmlFor="date_sign">Date Sign</label>
            <input type="date" id="date_sign" />
          </div>
          
        </div>
      </form>
      <hr />
      <div className="footer" style={{
        display:"flex",
        justifyContent:"space-between"
      }}>
        <div className="f_logo">Pros LLC</div>
        <div className="social_links">social links</div>
      </div>
    </div>
  );
};

export default Forms;
