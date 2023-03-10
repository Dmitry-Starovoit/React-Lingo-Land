import logo from "../assets/logo-footer.svg";
import sendEmail from "../assets/input-email.svg";
import facebookLogo from "../assets/1.svg";
import instagramLogo from "../assets/2.svg";
import telegramLogo from "../assets/3.svg";
import whatsAppLogo from "../assets/4.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Footer = function () {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="block__one">
          <Link to="/">
            <img className="logo__footer" src={logo} alt="" />
          </Link>
          <p className="text__footer">
            Study English with us and our workbooks and you will achieve quick
            results.
          </p>
        </div>
        <div className="block__two">
          <h4 className="footer__title">MENU</h4>
          <ul className="nav__footer">
            <li className="nav__footer--item">
              <Link to="/">About us</Link>
            </li>
            <li className="nav__footer--item">
              <Link to="/resources">Resources</Link>
            </li>
            <li className="nav__footer--item">
              <Link to="/news">News</Link>
            </li>
            <li className="nav__footer--item">
              <Link to="/contacts">Contacts</Link>
            </li>
            <li className="nav__footer--item">
              <Link to="/feedback">Feedback</Link>
            </li>
          </ul>
        </div>
        <div className="block__three">
          <h4 className="footer__title">FOLLOW US</h4>
          <ul className="follow__list">
            <li className="follow__list--item">
              <a href="https://uk-ua.facebook.com/" target="_blank">
                <img src={facebookLogo} alt="" />
                Facebook
              </a>
            </li>
            <li className="follow__list--item">
              <a href="https://www.instagram.com/" target="_blank">
                <img src={instagramLogo} alt="" />
                Instagram
              </a>
            </li>
            <li className="follow__list--item">
              <a href="https://web.telegram.org/z/" target="_blank">
                <img src={telegramLogo} alt="" />
                Telegram
              </a>
            </li>
            <li className="follow__list--item">
              <a href="https://www.whatsapp.com/" target="_blank">
                <img src={whatsAppLogo} alt="" />
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
        <div className="block__four">
          <h4 className="footer__title email__title">NEWSLETTER</h4>
          <p className="text__footer--newsletter">
            Want to know what we're up to? Sign up for the newsletter and join
            our trible.
          </p>
          <div className="email__send">
            <input
              className="input__footer"
              type="text"
              placeholder="Your e-mail"
            />
            <div>
              <button className="send__email">
                <img className="button__send" src={sendEmail} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
