import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";

export default function Main() {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}
