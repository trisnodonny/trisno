import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { routes } from "@constants/routes";
import { handleRouteClick } from "@helpers/handleRouteClick";

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [visibility, setVisibility] = useState({
    home: false,
    project: true,
    shelf: true,
  });
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const logoClass =
    isOpen && screenWidth < 540 ? "header-logo is-open" : "header-logo";
  const navClass = isOpen ? "nav is-open" : "nav";
  const btnClass = isOpen ? "header-cta is-open" : "header-cta";

  const handleOnClickNav = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleLinkClick = (route) => {
    setIsOpen(false);
    setVisibility(handleRouteClick(route));
  };

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="header">
      <div className="header-wrapper">
        <Link className={logoClass} to="/" onClick={handleLinkClick}>
          Trisno.
        </Link>
        <button className={btnClass} onClick={handleOnClickNav}>
          <span className="block"></span>
          <span className="block"></span>
        </button>
        <nav className={navClass}>
          <ul className="nav-wrapper">
            {routes.map(
              (route) =>
                visibility[route.name] && (
                  <li key={route.name} className="nav-link">
                    <Link
                      className="anchor-hover"
                      to={route.path}
                      onClick={() => handleLinkClick(route.name)}
                    >
                      {route.label}
                    </Link>
                  </li>
                )
            )}
            <li className="nav-link">
              <Link className="anchor-hover" to="/">
                My Résumé
              </Link>
            </li>
          </ul>
          <ul className="nav-wrapper">
            <li className="nav-link get-in-touch">GET IN TOUCH</li>
            <li className="nav-link">
              <Link
                className="anchor-hover"
                to="mailto:trisnodonny@gmail.com"
                type="email"
              >
                mail
              </Link>
            </li>
            <li className="nav-link">
              <Link className="anchor-hover" to="/">
                contact.me/demo
              </Link>
            </li>
          </ul>
          <ul className="nav-wrapper">
            <li className="nav-link row-link">
              <Link
                className="anchor-hover"
                to="https://github.com/trisnodonny"
                target="_blank"
              >
                GH
              </Link>
            </li>
            <li className="nav-link row-link">
              <Link className="anchor-hover" to="/">
                LN
              </Link>
            </li>
            <li className="nav-link row-link">
              <Link
                className="anchor-hover"
                to="https://www.youtube.com/@donnytrisno7652"
                target="_blank"
              >
                YT
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
