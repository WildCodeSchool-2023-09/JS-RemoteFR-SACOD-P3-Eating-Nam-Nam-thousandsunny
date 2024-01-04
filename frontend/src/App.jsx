import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./vars.scss";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
