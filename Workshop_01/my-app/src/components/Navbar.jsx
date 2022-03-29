import React from "react";

export const Navbar = () => {
  return (
    <nav className="flex bg-zinc-700 p-6 text-white">
      <div className="mr-auto font-extrabold py-2">LOGO</div>
      <div className="ml-auto font-light">
        <ul className=" flex space-x-8">
          <li className="bg-zinc-500 px-4 py-2 rounded">Home</li>
          <li className="py-2">Tasks</li>
          <li className="py-2">Logout</li>
        </ul>
      </div>
    </nav>
  );
};
