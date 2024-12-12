"use client";

import Link from "next/link";
import {
  nbaDivisionTeams,
  nameExceptions,
} from "../../lib/constants";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { usePathname } from "next/navigation";
import { TbLayoutNavbarFilled } from "react-icons/tb";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const setTeamImageSrc = (fullName: string, league: string) => {
  let parts = fullName.split(" ");
  let teamName = parts.pop();

  if (typeof teamName === "undefined") {
    teamName = "";
  }

  if (nameExceptions.includes(fullName)) {
    parts = fullName.split(" ");
    parts.shift();
    teamName = parts.join(" ");
  }

  return `/${league}/${teamName.replaceAll(" ", "").toLowerCase()}.png`;
};

export default function NavbarOptions() {
  const pathName = usePathname();
  const leftMenu = (league: string, divisonTeams: any) => (
    <div className="menu-option hover:text-green-500 relative gap-x-2 justify-center flex h-full cursor-pointer flex-row items-center">
      <Link href={`#`} style={{ textDecoration: "none" }}>
        <p
          className={`relative text-xs sm:text-sm font-[400] flex items-center gap-x-1 md:text-md hover:text-green-500  text-white ${
            pathName.includes(league) && "league-open"
          }`}
        >
           {<TbLayoutNavbarFilled />}
        {league} 
        </p>
      </Link>
    </div>
  );
  const dropDownMenu = (league: string, divisonTeams: any) => (
    <div className="menu-option hover:text-green-500 relative flex h-full cursor-pointer flex-row items-center">
      <Link href={`#`} style={{ textDecoration: "none" }}>
        <p
          className={`relative text-xs sm:text-sm font-[400] md:text-md hover:text-green-500  text-white ${
            pathName.includes(league) && "league-open"
          }`}
        >
          {league} {" "}
        {<KeyboardArrowDownIcon/>}
        </p>
      </Link>
      <div className="menu-dropdown hover:text-green-500 hidden">
        <div className="flex flex-row gap-5">
          <div className="w-2/7 flex flex-col justify-start gap-1 pt-3 text-black">
            <Link href={`/${league}`} className="text-black no-underline">
              <p className="menu-dropdown-option rounded-md p-2 text-[14px] opacity-60">
                Scores
              </p>
            </Link>
            <Link
              href={`/${league}/standings`}
              className="text-black no-underline"
            >
              <p className="menu-dropdown-option rounded-md p-2 text-[14px] opacity-60">
                Standings
              </p>
            </Link>
            <Link href={`/${league}/teams`} className="text-black no-underline">
              <p className="menu-dropdown-option rounded-md p-2 text-[14px] opacity-60">
                Teams
              </p>
            </Link>
          </div>

          <div
            style={{
              gridTemplateColumns:
                league === "nfl"
                  ? "repeat(4, minmax(0, 1fr))"
                  : "repeat(3, minmax(0, 1fr))",
            }}
            className="grid gap-x-8 rounded-xl bg-gray-100 p-3" 
          >
            {Object.entries(divisonTeams).map(
              ([conference, teams]: [string, any]) => (
                <div
                  key={conference + uuidv4()}
                  className="mb-3 flex flex-col gap-2 text-black"
                >
                  <h1 className="text-[12px] font-bold opacity-70">
                    {conference}
                  </h1>
                  {teams.map((team: any) => (
                    <Link
                      className="text-black no-underline"
                      href={`/${league}/team/${team[1]}/home`}
                      key={uuidv4()}
                    >
                      <div className="menu-dropdown-team flex w-full flex-row items-center justify-start gap-2 rounded-md p-1">
                        <Image
                          width={100}
                          height={100}
                          alt="team"
                          src={setTeamImageSrc(team[0], "nba")}
                          className="w-7 object-contain"
                        />
                        <p className="whitespace-nowrap text-[12px] opacity-60">
                          {team[0]}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <>
      <div className="flex w-[80vw] md:flex-row md:justify-between xs:flex-col">
        <div className="sm:flex gap-1 hidden sm:gap-6">
          {leftMenu("First team", nbaDivisionTeams)}
          {leftMenu("History", nbaDivisionTeams)}
          {leftMenu("Kepler teams", nbaDivisionTeams)}
        </div>
        <div className="sm:flex gap-1 hidden sm:gap-6">
          {leftMenu("Events & Tickets", nbaDivisionTeams)}
          {leftMenu("Shop", nbaDivisionTeams)}
        </div>
      </div>
    </>
  );
}
