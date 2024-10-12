import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "@components/partial/Header";
import Footer from "@components/partial/Footer";
import { handleRouteClick } from "@helpers/handleRouteClick";

export default function BaseLayout() {
  const [visibility, setVisibility] = useState({
    home: false,
    project: true,
    shelf: true,
  });

  const handleLinkClick = (route) => {
    setVisibility(handleRouteClick(route));
  };

  return (
    <>
      <Header visibility={visibility} handleLinkClick={handleLinkClick} />
      <Outlet />
      <Footer visibility={visibility} handleLinkClick={handleLinkClick} />
    </>
  );
}
