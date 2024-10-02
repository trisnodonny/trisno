import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
  const links = [
    { name: "home", path: "/", label: "Home" },
    { name: "project", path: "/project", label: "My Project" },
    { name: "shelf", path: "/shelf", label: "My Shelf" },
  ];

  const handleOnClickNav = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleLinkClick = (link) => {
    setIsOpen(false);
    setVisibility({
      home: link === "home" ? false : true,
      project: link === "project" ? false : true,
      shelf: link === "shelf" ? false : true,
    });
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
            {links.map(
              (link) =>
                visibility[link.name] && (
                  <li key={link.name} className="nav-link">
                    <Link
                      className="anchor-hover"
                      to={link.path}
                      onClick={() => handleLinkClick(link.name)}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
            )}
            <li className="nav-link">
              <Link className="anchor-hover" to="/">
                My Resume
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
