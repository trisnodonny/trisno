import { Outlet } from "react-router-dom";
import Header from "@components/partial/Header";
import Footer from "@components/partial/Footer";
import HomePage from "@pages/HomePage";

export default function BaseLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
