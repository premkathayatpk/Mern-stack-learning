import Card from "./Card";

const App = () => {
  const products = [
    {
      id: 1,
      name: "Blue Shoe",
      price: 17.0,
      image: "https://pngimg.com/uploads/women_shoes/women_shoes_PNG7472.png",
    },
    {
      id: 2,
      name: "Black Shoe",
      price: 17.0,
      image:
        "https://th.bing.com/th/id/R.66d80f77251e4a9451c98e7306ce4e02?rik=TbjBL%2frEUQQaiQ&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f05%2fWomen-Shoes-Free-PNG-Image.png&ehk=ji9wqbWpi5Co1HsTHZm1ZrjYVT42dn6vCNLzozf%2fn44%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      id: 3,
      name: "Yellow Shoe",
      price: 17.0,
      image: " https://pngimg.com/uploads/women_shoes/women_shoes_PNG7450.png",
    },
    {
      id: 4,
      name: "Ankle Shoe",
      price: 17.0,
      image: " https://baillando.co.uk/images/freed_of_london_shoes/show3.png",
    },
    {
      id: 5,
      name: "Pink Heel",
      price: 17.0,
      image:
        "https://www.pngplay.com/wp-content/uploads/4/Women-Shoes-PNG-Photos.png",
    },
    {
      id: 6,
      name: "Heel Clipart",
      price: 17.0,
      image:
        "https://pics.clipartpng.com/Black_High_Heels_PNG_Clip_Art-1372.png",
    },
  ];
  return (
    <div>
      <Card products={products} />
    </div>
  );
};

export default App;
