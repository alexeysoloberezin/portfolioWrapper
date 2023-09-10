import React from 'react';
import {Link} from "react-router-dom";
import {MenuItems} from "../../types/Navigation";
import Logo from "../ui/Logo";
import ModalContacts from "./ModalContacts";

const Footer = () => {
  const menuItems = MenuItems;

  return (
    <footer className={"footer"}>
      <div className="container">
        <div className="footer__wrp">
          <Logo/>
          <div className={"footer__c"}>
            {menuItems.map(item => (
              <div className="footer__it" key={item.key}>
                <Link to={item.link}>{item.label}</Link>
              </div>
            ))}
          </div>
          <ModalContacts/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;