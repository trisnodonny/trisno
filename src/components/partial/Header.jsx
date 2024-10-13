import { Link } from "react-router-dom";
import { routes } from "@constants/routes";

export default function Header({
  handleOnRouteClick,
  visibility,
  isOpen,
  setIsOpen,
  screenWidth,
  navClass,
  btnClass,
  logoClass,
}) {
  const handleOnClickNav = () => {
    setIsOpen((prevState) => !prevState);

    if (screenWidth < 540 && isOpen) {
      document.body.classList.toggle("no-scroll");
    }
  };

  return (
    <header className="header">
      <div className="header-wrapper">
        <Link
          className={logoClass}
          to="/"
          onClick={() => handleOnRouteClick("home")}
        >
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
                      onClick={() => handleOnRouteClick(route.name)}
                    >
                      {route.label}
                    </Link>
                  </li>
                )
            )}
            <li className="nav-link">
              <Link className="anchor-hover" to="/" target="_blank" onClick={() => setIsOpen(false)}>
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
