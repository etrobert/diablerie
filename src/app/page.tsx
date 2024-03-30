import LandingPage from "@/components/LandingPage";
import MeetTheTeam from "@/components/MeetTheTeam";
import getTeam from "@/data/getTeam";

export default async function Home() {
  const team = await getTeam();

  return (
    <>
      <LandingPage />
      <MeetTheTeam team={team} />
    </>
  );
}
