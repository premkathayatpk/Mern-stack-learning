import "./Card.css";
const Card = ({ products }) => {
  
  return (
    <div className="parent">
      <h1>Summer Collection</h1>
      <div className="items">
        {products.map((item) => {
          return (
            <div className="box" key={item.id}>
              <div className="image">
                <img src={item.image} alt="img" />
              </div>

              <p className="name">{item.name}</p>
              <p className="price">${item.price.toFixed(2)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
