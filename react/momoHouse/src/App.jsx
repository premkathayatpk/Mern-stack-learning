import Header from "./components/Header";
import AppRoutes from "./components/AppRoutes";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-gray-100">
      <Header />
      <div className="min-h-140">
        <AppRoutes />
      </div>

      <Footer />
    </div>
  );
};

export default App;
