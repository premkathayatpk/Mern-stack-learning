import Navbar from "./components/Navbar";
import "./App.css";
import Card from "./components/Card";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <div className="card_item">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
      <div className="whatsapp">
        <img src="https://pngimg.com/uploads/whatsapp/whatsapp_PNG20.png" alt="" />
      </div>
    </>
  );
};

export default App;
