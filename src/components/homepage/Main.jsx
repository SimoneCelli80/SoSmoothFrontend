import Description from "./MainDescription";

const Main = () => {
    return(
        <div className="col-span-7 row-span-5 bg-smoothGrey rounded-3xl p-6 shadow-2xl flex flex-col cursor-pointer hover:brightness-125 transition duration-300">
          <h1 className="text-center font-monoton text-6xl text-smoothYellow pt-4">
            SoSmooth<span className="ml-5">OCP</span>
          </h1>
          <div className="flex-grow flex justify-center items-center">
            <Description />
          </div>
        </div>
    );
}

export default Main;