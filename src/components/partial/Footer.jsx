import { useState } from "react";
import { Link } from "react-router-dom";
import { routes } from "@constants/routes";

export default function Footer({visibility, handleLinkClick}) {
  return (
    <footer className="footer" data-section="foot">
      <div className="footer-wrapper">
        <div className="footer-top">
          <div className="contact">
            <div className="hello">Say Hello</div>
            <Link className="anchor-hover" to="#">
              mail
            </Link>
            <Link className="anchor-hover" to="#">
              contact.me/demo
            </Link>
          </div>
          <ul className="personal">
            {routes.map(
              (route) =>
                visibility[route.name] && (
                  <li key={route.name}>
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
            <li>
              <Link className="anchor-hover" to="/">
                My Résumé
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <span className="copy-right">© Donny Trisno 2024</span>
          <ul className="socials">
            <li>
              <Link
                className="anchor-hover"
                to="https://github.com/trisnodonny"
                target="_blank"
              >
                GH
              </Link>
            </li>
            <li>
              <Link className="anchor-hover" to="/">
                LN
              </Link>
            </li>
            <li>
              <Link
                className="anchor-hover"
                to="https://www.youtube.com/@donnytrisno7652"
                target="_blank"
              >
                YT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
