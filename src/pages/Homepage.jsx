import { useEffect } from "react";
import useAuth from '../hooks/useAuth';
import Login from "../components/homepage/Login";
import Logout from "../components/homepage/Logout";
import Main from "../components/homepage/Main";
import Katas from "../components/homepage/Katas";
import Flashcards from "../components/homepage/Flashcards";
import HamburgerMenu from  "../components/homepage/HamburgerMenu";
import RegistrationAndDashboard from "../components/homepage/RegistrationAndDashboard";
import IamgeContainer from "../components/homepage/ImageContainer";

const Homepage = () => {
  
  const { authState: { isAuthenticated } } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      console.log("Bentornato Mario!");
    } 
  }, [isAuthenticated]);

  
  return (
    <div className="bg-gradient-to-r from-smoothWhite to-smoothB w-screen h-screen flex justify-center items-center select-none">
      <div className="grid grid-cols-12 grid-rows-8 h-full w-full gap-4 p-8"> 
        <Main />
        {isAuthenticated ?
          <Logout />
        :
          <Login />
        }
        <RegistrationAndDashboard />
        < HamburgerMenu />
        <IamgeContainer />
        <Katas />
        <Flashcards />
      </div>
    </div>
  );
}

export default Homepage;
