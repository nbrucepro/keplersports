import React from "react";
import { menbbc, wbbc } from "./data";
import { FaSquareInstagram, FaYoutube } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-[#212721]">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div>
          <h2 className="mb-6 text-lg font-semibold text-gray-100 uppercase">
            Kepler BBC first team
          </h2>
          <div className="grid grid-cols-2 gap-8 sm:gap-4 sm:grid-cols-5">
            <div>
              <h2 className="mb-6 md:text-md text-gray-100 uppercase">
                Point Guards
              </h2>
              <ul className="text-green-500 text-sm">
                {menbbc?.map((player, index) => (
                  <li
                    key={index}
                    className={`py-2 ${player.role !== "pg" && "hidden"}`}
                  >
                    <a href="#" className="hover:underline">
                      {player.role == "pg" && player.names}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 md:text-md text-gray-100 uppercase">
                Shooting Guards
              </h2>
              <ul className="text-green-500 text-sm">
                {menbbc?.map((player, index) => (
                  <li
                    key={index}
                    className={`py-2 ${player.role !== "sg" && "hidden"}`}
                  >
                    <a href="#" className="hover:underline">
                      {player.role == "sg" && player.names}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 md:text-md text-gray-100 uppercase">
                Small Forwards
              </h2>
              <ul className="text-green-500 text-sm">
                {menbbc?.map((player, index) => (
                  <li
                    key={index}
                    className={`py-2 ${player.role !== "sf" && "hidden"}`}
                  >
                    <a href="#" className="hover:underline">
                      {player.role == "sf" && player.names}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 md:text-md text-gray-100 uppercase">
                Power Forwards
              </h2>
              <ul className="text-green-500 text-sm">
                {menbbc?.map((player, index) => (
                  <li
                    key={index}
                    className={`py-2 ${player.role !== "pf" && "hidden"}`}
                  >
                    <a href="#" className="hover:underline">
                      {player.role == "pf" && player.names}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 md:text-md text-gray-100 uppercase">
                Center
              </h2>
              <ul className="text-green-500 text-sm">
                {menbbc?.map((player, index) => (
                  <li
                    key={index}
                    className={`py-2 ${player.role !== "cr" && "hidden"}`}
                  >
                    <a href="#" className="hover:underline">
                      {player.role == "cr" && player.names}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="mb-6 text-lg font-semibold text-gray-100 uppercase">
            Kepler WBBC first team
          </h2>
          <div className="grid grid-cols-2 gap-8 sm:gap-4 sm:grid-cols-5">
            <div>
              <h2 className="mb-6 md:text-md text-gray-100 uppercase">
                Point Guards
              </h2>
              <ul className="text-green-500 text-sm">
                {wbbc?.map((player, index) => (
                  <li
                    key={index}
                    className={`py-2 ${player.role !== "pg" && "hidden"}`}
                  >
                    <a href="#" className="hover:underline">
                      {player.role == "pg" && player.names}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 md:text-md text-gray-100 uppercase">
                Shooting Guards
              </h2>
              <ul className="text-green-500 text-sm">
                {wbbc?.map((player, index) => (
                  <li
                    key={index}
                    className={`py-2 ${player.role !== "sg" && "hidden"}`}
                  >
                    <a href="#" className="hover:underline">
                      {player.role == "sg" && player.names}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 md:text-md text-gray-100 uppercase">
                Small Forwards
              </h2>
              <ul className="text-green-500 text-sm">
                {wbbc?.map((player, index) => (
                  <li
                    key={index}
                    className={`py-2 ${player.role !== "sf" && "hidden"}`}
                  >
                    <a href="#" className="hover:underline">
                      {player.role == "sf" && player.names}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 md:text-md text-gray-100 uppercase">
                Power Forwards
              </h2>
              <ul className="text-green-500 text-sm">
                {wbbc?.map((player, index) => (
                  <li
                    key={index}
                    className={`py-2 ${player.role !== "pf" && "hidden"}`}
                  >
                    <a href="#" className="hover:underline">
                      {player.role == "pf" && player.names}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 md:text-md text-gray-100 uppercase">
                Center
              </h2>
              <ul className="text-green-500 text-sm">
                {wbbc?.map((player, index) => (
                  <li
                    key={index}
                    className={`py-2 ${player.role !== "cr" && "hidden"}`}
                  >
                    <a href="#" className="hover:underline">
                      {player.role == "cr" && player.names}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* <div className='mt-12'>
        <h2 className="mb-6 text-lg font-semibold text-gray-100 uppercase">Kepler VC first team</h2>
          <div className="grid grid-cols-2 gap-8 sm:gap-4 sm:grid-cols-6">
          
              <div>
                  <h2 className="mb-6 md:text-md text-gray-100 uppercase">Outside Hitters</h2>
                  <ul className="text-green-500 text-sm">
                  {players?.map((player,index) => (
                        <li key={index} className={`py-2 ${player.role !== "sg" && "hidden"}`}>
                          <a href="#" className="hover:underline">{player.names}</a>
                      </li>
                    ))}
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 md:text-md text-gray-100 uppercase">Opposite Hitters</h2>
                  <ul className="text-green-500 text-sm">
                  {players?.map((player,index) => (
                        <li key={index} className={`py-2 ${player.role !== "sg" && "hidden"}`}>
                          <a href="#" className="hover:underline">{player.names}</a>
                      </li>
                    ))}
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 md:text-md text-gray-100 uppercase">Setters</h2>
                  <ul className="text-green-500 text-sm">
                  {players?.map((player,index) => (
                        <li key={index} className={`py-2 ${player.role !== "sg" && "hidden"}`}>
                          <a href="#" className="hover:underline">{player.names}</a>
                      </li>
                    ))}
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 md:text-md text-gray-100 uppercase">Middle Blockers</h2>
                  <ul className="text-green-500 text-sm">
                  {players?.map((player,index) => (
                        <li key={index} className={`py-2 ${player.role !== "sg" && "hidden"}`}>
                          <a href="#" className="hover:underline">{player.names}</a>
                      </li>
                    ))}
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 md:text-md text-gray-100 uppercase">Liberos</h2>
                  <ul className="text-green-500 text-sm">
                  {players?.map((player,index) => (
                        <li key={index} className={`py-2 ${player.role !== "sg" && "hidden"}`}>
                          <a href="#" className="hover:underline">{player.names}</a>
                      </li>
                    ))}
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 md:text-md text-gray-100 uppercase">Defensive Specialist</h2>
                  <ul className="text-green-500 text-sm">
                  {players?.map((player,index) => (
                        <li key={index} className={`py-2 ${player.role !== "sg" && "hidden"}`}>
                          <a href="#" className="hover:underline">{player.names}</a>
                      </li>
                    ))}
                  </ul>
              </div>
          </div>
      </div> */}
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="mb-6 md:pb-12">
          <a href="" className="flex items-center">
            <img
              src="/nba/kplogo.ico"
              className="h-8 me-3"
              alt="FlowBite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-100">
              Kepler sports
            </span>
          </a>
        </div>
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-md text-gray-200 sm:text-center font-bold">
            © copyright{" "}
            <a href="" className="hover:underline font-bold">
              Kepler sports™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a href="#" className="text-gray-200 hover:text-gray-100 ms-5">
              <BsTwitterX />
              <span className="sr-only">Twitter page</span>
            </a>
            <a href="#" className="text-gray-200 hover:text-gray-100 ms-5">
              <FaYoutube />
              <span className="sr-only">YouTube account</span>
            </a>
            <a href="#" className="text-gray-200 hover:text-gray-100 ms-5">
              <FaSquareInstagram />
              <span className="sr-only">Instagram account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
