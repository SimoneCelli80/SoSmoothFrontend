import KanjiSequence from "./KanjiSequence";
import { Link } from "react-router-dom";

const Katas = () => {
    return (
        <Link to="/katas" className=" bg-smoothWhite border-2 col-span-4 row-span-3 rounded-3xl shadow-2xl font-poppins cursor-pointer shadow-pink-100 border-1 border-pink-100 hover:brightness-90 transition duration-300">
          <h2 className="text-3xl text-smoothGrey font-bold pt-6 pl-16">
            Katas
          </h2>
          <div className="relative h-20 overflow-hidden bg-smoothWhite rounded-3xl flex items-center justify-center">
              <div className="absolute text-5xl text-center mt-9 h-full ">
                <KanjiSequence />
              </div>
            </div>
        </Link>
    );
}

export default Katas