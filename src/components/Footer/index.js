// Dependencies

// React-Redux

// Styles
import { Link } from "react-router-dom";
import "./footer.scss"

function Footer() {
  return (
    <footer className="footer">
      <ul className="footer__links">
        <li className="footer__links__li"><Link className="link" to="/">Accueil</Link></li>
        <li className="footer__links__li"><Link className="link" to="/contact">Contact</Link></li>
        <li className="footer__links__li"><Link className="link" to="/account">Compte</Link></li>
        <li className="footer__links__li"><Link className="link" to="/games">Liste de jeux</Link></li>
        <li className="footer__links__li">Mentions légales</li>
      </ul>
      <div className="footer__sepator" />
      <div className="footer__copyright">
        Copyright &copy; 2022 Tous droits réservés
        Dust your Games.
      </div>
    </footer>
  );
}

export default Footer;
