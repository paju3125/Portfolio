import React from "react";
import { NavLink } from "react-router-dom";
import "./Error.css";
export default function Error() {
  return (
    <>
      <section id="error-page" className="mt-5">
        <div className="container component content">
          <h2 className="header">404</h2>
          <h4>Sorry! Page Not Found</h4>
          <p>
            Oops! It seems like the page you are looking for does not exist.
            Please check the URL and try again.
          </p>
          <div className="btns">
            <NavLink to="/">return home</NavLink>
          </div>
        </div>
      </section>
    </>
  );
}
