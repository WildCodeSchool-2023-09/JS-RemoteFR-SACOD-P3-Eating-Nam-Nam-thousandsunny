import searchIcon from "../assets/searchIcon.svg";
import namNamIcon from "../assets/namNamIcon.svg";
import burgerMenuIcon from "../assets/burgerMenuIcon.svg";
import goNamNam from "../assets/GO.svg";
import "./style/Navbar.scss";

function activateSearchBar() {
  const searchBar = document.getElementsByClassName("SearchBarMobile");

  searchBar[0].classList.toggle("SearchBarMobileActive");
  console.log(searchBar[0]);
}

function Navbar() {
  return (
    <>
      <div className="Navbar">
        <img
          src={searchIcon}
          alt="Rechercher"
          className="SearchIcon"
          onClick={() => activateSearchBar()}
        />
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
          <img src={burgerMenuIcon} alt="Menu" className="BurgerIcon" />
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
    </>
  );
}

export default Navbar;
