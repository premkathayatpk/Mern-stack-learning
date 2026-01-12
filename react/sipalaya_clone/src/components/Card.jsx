import "./Card.css";

const Card = () => {
  return (
    <div className="box">
      <img
        src="https://sipalaya.com/wp-content/uploads/2024/03/UI-UX.png"
        alt=""
      />
      <div className="card_text">
        <h3>CodeYourFuture: The IT Mentorship Revolution – Online Session</h3>
        <p className="c_s">By Sipalaya InfoTech</p>
      </div>
      <div className="price">
        <p className="pr"><b><del>Rs.9,999.</del> <span className="discount">Rs.999</span></b> </p>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default Card;
