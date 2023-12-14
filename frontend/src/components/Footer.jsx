import { Link } from "react-router-dom";
import "./style/Footer.scss";

function Footer() {
  return (
    <footer className="Footer">
      <div className="Project">
        <span>&copy;Eating-Nam-Nam </span>
      </div>
      <Link to="/Mentions legales">
        <p>Mentions Légales</p>
      </Link>
      <Link to="/About Us">
        <button type="button" className="transparent-button">
          Nous Contacter
        </button>
      </Link>
    </footer>
  );
}
export default Footer;
