import View from "@/components/NBA/views/team/Roster";
import { getTeamData, getTeamNews, getTeamRoster } from "@/lib/utils";

export const revalidate = 600;

export async function generateMetadata({
  params,
}) {
  const teamData = await getTeamData("nba", params.teamId);

  return {
    title: `${teamData.team.location} ${teamData.team.name} 2023-24 Roster - Sportly`,
  };
}

export default async function Page({ params }) {
  const teamNews = await getTeamNews("nba", params.teamId);
  const teamRoster = await getTeamRoster("nba", params.teamId);
  const teamData = await getTeamData("nba", params.teamId);

  return (
    <View
      data={{
        teamNews,
        teamRoster,
        teamData,
      }}
    />
  );
}

// export async function generateStaticParams() {
//   const teamIds = new Array(30);

//   for (let i = 1; i < 31; i++) {
//     teamIds[i] = i;
//   }

//   return teamIds.map((teamId: string) => ({
//     teamId: String(teamId),
//   }));
// }
