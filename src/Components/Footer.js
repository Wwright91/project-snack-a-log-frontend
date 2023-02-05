import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <ul>
        <h2>
          <img
            src="https://img.icons8.com/stickers/100/null/kawaii-pizza.png"
            alt="pizza"
            height="40px"
            width="40px"
          ></img>
          Meet The Devs
        </h2>
        <li>
          <a href="https://github.com/branben" target="_blank" rel="noreferrer">
            Brandon Bennett
          </a>
        </li>
        <li>
          {" "}
          <a href="https://github.com/cmm-7" target="_blank" rel="noreferrer">
            Carlos Mendoza
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Tech-Kat"
            target="_blank"
            rel="noreferrer"
          >
            Kendra Pelle
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Wwright91"
            target="_blank"
            rel="noreferrer"
          >
            Wisdom Wright
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
