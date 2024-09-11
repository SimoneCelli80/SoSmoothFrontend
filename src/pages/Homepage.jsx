import React from "react";
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div>
      <ul className="flex space-x-4 list-none p-0 m-0">
        {["Login", "Registration"].map(item => (
          <li key={item} className="">
            <Link to={`/${item.toLowerCase()}`} className="">
              <span className="">
                {item}
              </span>
            </Link> 
          </li>
        ))}
      </ul>
      <h1 className="text-center text-3xl ">Welcome to SoSmooth OCP</h1>
    </div>
  );
}

export default Homepage;