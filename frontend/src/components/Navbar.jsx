import searchIcon from "../assets/searchIcon.svg";
import namNamIcon from "../assets/namNamIcon.svg";
import burgerMenuIcon from "../assets/burgerMenuIcon.svg";
import goNamNam from "../assets/GO.svg";
import "./style/Navbar.scss";

function activateSearchBar() {
  const searchBar = document.getElementsByClassName("SearchBarMobile");
  const burgerMenu = document.getElementsByClassName("BurgerMenu");
  searchBar[0].classList.toggle("SearchBarMobileActive");
  if (burgerMenu[0].classList.contains("BurgerMenuActive")) {
    burgerMenu[0].classList.toggle("BurgerMenuActive");
  }
}

function activateBurgerMenu() {
  const burgerMenu = document.getElementsByClassName("BurgerMenu");
  const searchBar = document.getElementsByClassName("SearchBarMobile");
  burgerMenu[0].classList.toggle("BurgerMenuActive");
  if (searchBar[0].classList.contains("SearchBarMobileActive")) {
    searchBar[0].classList.toggle("SearchBarMobileActive");
  }
}

function Navbar() {
  return (
    <>
      <div className="Navbar">
        <button
          type="button"
          onClick={() => activateSearchBar()}
          className="SearchButton"
        >
          <img src={searchIcon} alt="Rechercher" className="SearchIcon" />
        </button>
        <img
          src={namNamIcon}
          alt="Page d'Accueil"
          className="HomeIcon"
          href="/"
        />
        <div className="RightSide">
          <div className="SearchBar SearchBarDesktop">
            <input
              type="search"
              placeholder="Entrer votre recherche ici..."
              className="SearchInput"
            />
            <img src={goNamNam} alt="Rechercher" className="GoIcon" />
          </div>
          <button
            type="button"
            onClick={() => activateBurgerMenu()}
            className="BurgerButton"
          >
            <img src={burgerMenuIcon} alt="Menu" className="BurgerIcon" />
          </button>
        </div>
      </div>
      <div id="SearchBarMobile" className="SearchBar SearchBarMobile">
        <input
          type="search"
          placeholder="Entrer votre recherche ici..."
          className="SearchInput"
        />
        <img src={goNamNam} alt="Rechercher" className="GoIcon" />
      </div>
      <div className="BurgerMenu">
        <ul>
          <li>
            <a href="/">Inscription</a>
          </li>
          <li>
            <a href="/">Connexion</a>
          </li>
          <li>
            <a href="/">Voir les recettes</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
