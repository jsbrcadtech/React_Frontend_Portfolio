import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navlinks() {
  return (
    <nav>
      {/* <span className="w3-top-bar w3-padding w3-right">
        
          <a href="/projects" role="button"
          className=" w3-button w3-round-xxlarge btn-outline-light">Projects</a>
      </span> */}

      <span className="w3-top-bar w3-padding w3-right">
        <a
          href="/about"
          role="button"
          className=" w3-button w3-round-xxlarge btn-outline-light"
        >
          About
        </a>
      </span>
      <span className="w3-top-bar w3-padding w3-right">
        <a
          href="/"
          role="button"
          className=" w3-button w3-round-xxlarge btn-outline-light"
        >
          Home
        </a>
      </span>
    </nav>
  );
}

export default Navlinks;
