import './Forms.css'

const Forms = () => {
  return (
    <div className="parent">
      <h1>Form in React</h1>
      <form>
        <div className="name">
          <label htmlFor="f_name">First Name*</label>
          <br />
          <input id="f_name" type="text" placeholder="Enter First Name" />
          <br />
          <label htmlFor="l_name">Last Name*</label>
          <br />
          <input id="l_name" type="text" placeholder="Enter Last Name" />
        </div>
        <div className="email">
          <label htmlFor="email">Enter Email*</label>
          <br />
          <input id="email" type="text" placeholder="Enter email" />
        </div>
        <div className="contact">
          <label htmlFor="contact">Contact*</label>
          <br />
          <input type="number" id="contact" placeholder="Enter Mobile Number" />
        </div>
        <label htmlFor="gender">Gender*</label>
        <div className="gender">
          
        
          <input type="radio" id="male" name="gender" />
          <label htmlFor="male">Male</label>
          <input type="radio" id="female" name="gender" />
          <label htmlFor="female">Female</label>
          <input type="radio" id="other" name="gender" />
          <label htmlFor="other">Other</label>
        </div>
        <label htmlFor="sub">Your Best Subject</label>
        <div className="subject">
         
          <input type="checkBox" id='english'/>
          <label htmlFor="english">English</label>
          <input type="checkBox" id='maths'/>
          <label htmlFor="maths">Maths</label>
          <input type="checkBox" id='physics'/>
          <label htmlFor="physics">Physics</label>
        </div>
        <div className="resume">
          <label htmlFor="up_resuma">Uplode Resume*</label>
          <br />
          <input type="file" id='up_resume'/>
        </div>
        <div>
          <label htmlFor="url">Enter URL*</label>
          <br />
          <input id='url'type="text" placeholder="Enter URL" />
        </div>
        <div>
          <label htmlFor="choice">Select your choice</label>
          <select name="sport" id="choice">
            
            <option value="sport">Sport</option>
            <option value="dance">Dance</option>
            <option value="study">Study</option>
            <option value="travelling">Travelling</option>
          </select>
        </div>
        <div>
          <label htmlFor="about">
            <textarea name="about" id="about" rows={10} placeholder="About your self"></textarea>
          </label>
        </div>
        <label >Submit OR Reset</label>
        <div className="btn">
          
          
          <button type='reset'>Reset</button>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Forms;
