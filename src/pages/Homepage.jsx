import React from "react";
import Description from "../components/HomepageOcpInfo";
import smooth from '../assets/smooth.webp';
import Hamburger from "../assets/icons/hamburger.svg";
import KanjiSequence from "../components/KanjiSequence";

const Homepage = () => {
  
  return (
    <div className="bg-gradient-to-r from-smoothWhite to-smoothB w-screen h-screen flex justify-center items-center select-none">
      <div className="grid grid-cols-12 grid-rows-8 h-full w-full gap-4 p-8"> 
        <div className="col-span-7 row-span-5 bg-smoothGrey rounded-3xl p-6 shadow-2xl flex flex-col cursor-pointer hover:brightness-110 transition duration-300">
          <h1 className="text-center font-monoton text-6xl text-smoothYellow pt-4">
            SoSmooth<span className="ml-5">OCP</span>
          </h1>
          <div className="flex-grow flex justify-center items-center">
            <Description />
          </div>
        </div>

        <a href="/login" className="col-span-2 row-span-1 rounded-3xl flex items-center justify-center bg-smoothGrey text-gray-200 shadow-2xl hover:brightness-110 transition duration-300">
          <h1 className="text-2xl text-smoothWhite font-bold font-poppins">
            Login
          </h1>
        </a>

        <a href="/registration" className="col-span-2 row-span-1 rounded-3xl bg-smoothYellow rounded-5xl flex items-center justify-center shadow-2xl hover:brightness-110 transition duration-300">
          <span className="text-smoothGrey text-2xl font-bold font-poppins">
            Registration
          </span>
        </a>

        <div className="col-span-1 row-span-1 border-1 bg-smoothWhite rounded-3xl shadow-2xl flex items-center justify-center cursor-pointer hover:brightness-90 transition duration-300">
          <img src={Hamburger} alt="Hamburger Menu" className="" />
        
        </div>
        <div className="bg-cover bg-center col-span-5 row-span-7 rounded-3xl shadow-2xl" style={{ backgroundImage: `url(${smooth})` }}>
        </div>

        <div className=" bg-smoothWhite border-2 col-span-4 row-span-3 rounded-3xl shadow-2xl font-poppins cursor-pointer shadow-pink-100 border-1 border-pink-100 hover:brightness-90 transition duration-300">
          <h2 className="text-3xl text-smoothGrey font-bold pt-6 pl-16">
            Katas
          </h2>
          <div className="relative h-20 overflow-hidden bg-smoothWhite rounded-3xl flex items-center justify-center">
              <div className="absolute text-5xl text-center mt-9 h-full ">
                <KanjiSequence />
              </div>
            </div>
        </div>
        <div className="flex items-center justify-center col-span-3 row-span-3">
          <div className="flex items-center justify-center w-4/5 h-4/5 bg-smoothYellow shadow-2xl  rounded-3xl font-poppins cursor-pointer hover:brightness-110 transition duration-300">
            <h2 className="text-3xl text-smoothGrey font-bold p-5">
              Flashcards
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
