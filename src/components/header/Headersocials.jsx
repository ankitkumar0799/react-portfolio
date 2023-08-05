import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Headersocials = () => {
  return (
    <div className="header__socials">
      {/* // eslint-disable-next-line */}
      <a href="https:/linkdin.com" target="_blank">
        <BsLinkedin />
      </a>
      {/* // eslint-disable-next-line */}
      <a href="https:/github.com" target="_blank">
        <FaGithub />
      </a>
    </div>
  );
};

export default Headersocials;
