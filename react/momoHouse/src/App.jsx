import Header from "./components/comon/Header";
import AppRoutes from "./components/comon/AppRoutes";

import Footer from "./components/comon/Footer";
const App = () => {
  return (
    <div className="bg-gray-100">
      <div className=" top-0 left-0 w-full">
        <Header />
      </div>

      <div className="min-h-140 ">
        <AppRoutes />
      </div>

      <Footer />
    </div>
  );
};

export default App;
