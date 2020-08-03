import React from "react";
import FooterLogo from "./FooterLogo";
import SocialLinks from "./SocialLinks";
import "../../styles/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="container level is-mobile footer-level">
        <FooterLogo />
        <SocialLinks />
      </div>
    </footer>
  );
}

export default Footer;