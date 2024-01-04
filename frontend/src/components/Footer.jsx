import { Link } from "react-router-dom";
import "./style/Profil.scss";

function Footer() {
  return (
    <footer className="Footer">
      <div className="Left-bloc">
        <div className="Project">&copy;Eating-Nam-Nam</div>
      </div>
      <div className="Mid-bloc">
        {" "}
        <Link to="/Mentions legales" className="mentions">
          <p>Thousand Sunny</p>
        </Link>
      </div>
      <div className="Right-bloc">
        <Link to="/About Us">
          <button type="button" className="Contact-button">
            Nous Contacter
          </button>
        </Link>
      </div>
    </footer>
  );
}
export default Footer;
