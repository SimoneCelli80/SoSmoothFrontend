import Hamburger from "../../assets/icons/hamburger.svg";

const HamburgerMenu = () => {
    return(
        <div className="col-span-1 row-span-1 border-1 bg-smoothWhite rounded-3xl shadow-2xl flex items-center justify-center cursor-pointer hover:brightness-90 transition duration-300">
          <img src={Hamburger} alt="Hamburger Menu" className="" />
        </div>
    );
}

export default HamburgerMenu;