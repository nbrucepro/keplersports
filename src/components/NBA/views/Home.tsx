"use client";

import LeagueContainerBox from "../../LeagueContainerBox";
import useMediaQuery from "@mui/material/useMediaQuery";
import useSWR from "swr";
import Articles from "../../Articles";
import LeagueUserSelection from "../../LeagueUserSelection";
import Loading from "../../Loading";
import NBAScoreboard from "../NBAScoreboard";
import Hello from "@/components/essentials/Hello";
import Footer from "@/components/essentials/Footer";
import Vidpart from "@/components/essentials/Vidpart";
import Testimonials from "@/components/essentials/Testimonials";
import Products from "@/components/essentials/Products";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home({ date }: { date?: string }) {
  const isDesktopScreen = useMediaQuery("(min-width:1000px");

  const { data, isLoading } = useSWR(
    "https://nextjs-sportly.vercel.app/api/leagueData/nba",
    fetcher,
    {
      refreshInterval: 5000,
    },
  );

  if (isLoading) return <Loading />;
  else
    return (
      <main>
        {isDesktopScreen ? (
          <>
            {/* <LeagueUserSelection userSelection={"scoreboard"} league="nba" /> */}
            <Hello/>
            <LeagueContainerBox isDesktopScreen={isDesktopScreen}>
              <NBAScoreboard initialScoreData={data} date={date} />
              {/* <Articles
                title={`Kepler News`}
                news={data?.news?.articles}
                limit={10}
                /> */}
                </LeagueContainerBox>
            <Products/>
            <Testimonials/>
            <Vidpart/>
            <Footer/>
          </>
        ) : (
          <>
          <Hello/>
            {/* <LeagueUserSelection userSelection={"scoreboard"} league="nba" /> */}
            <LeagueContainerBox isDesktopScreen={isDesktopScreen}>
            <Testimonials/>
            {/* <Articles
                title={`Kepler News`}
                news={data?.news?.articles}
                limit={10}
              /> */}
              {/* <NBAScoreboard initialScoreData={data} date={date} /> */}
            </LeagueContainerBox>
            <Vidpart/>
            <Footer/>
          </>
        )}
      </main>
    );
}
