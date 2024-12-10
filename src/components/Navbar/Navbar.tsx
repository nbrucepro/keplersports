import Link from "next/link";
import { russo } from "../../app/layout";
import { nameExceptions } from "../../lib/constants";
import NavbarOptions from "./NavbarOptions";
import Image from "next/image";

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

// bg-[#2b2c2d]
export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex h-[4rem] w-full flex-row items-center justify-start bg-[#212721]">
      <div className="main-logo xxs:min-w-[10rem] h-full min-w-[15rem] flex items-center">
        <Link href={"/"} className={`${russo.className} text-white text-center`}>
        {/* <Image
            src={`/nba/kplogo.png`}
            width={100}
            height={100}
            alt="league logo"
            className="w-50 object-cover"
          /> */}
          <h1 className="md:text-lg text-md font-bold italic">
          Kepler sports
          </h1>
        </Link>
      </div>
      <div className="xxs:gap-4 ml-[-1rem] hidden md:flex h-full w-full flex-row justify-end gap-2 pr-4 md:ml-1 md:justify-start md:gap-20 md:pr-0">
        <NavbarOptions />
      </div>
    </nav>
  );
}
