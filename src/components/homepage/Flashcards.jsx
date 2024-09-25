import { Link } from "react-router-dom";

const Flashcards = () => {
    return(
        <Link to="/flashcards" className="flex items-center justify-center col-span-3 row-span-3">
          <div className="flex items-center justify-center w-4/5 h-4/5 bg-smoothYellow shadow-2xl  rounded-3xl font-poppins cursor-pointer hover:brightness-110 transition duration-300">
            <h2 className="text-3xl text-smoothGrey font-bold p-5">
              Flashcards
            </h2>
          </div>
        </Link>
    );
}

export default Flashcards;