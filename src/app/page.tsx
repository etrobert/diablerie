import LandingPage from "@/components/LandingPage";
import MeetTheTeam from "@/components/MeetTheTeam";
import getTeam from "@/data/getTeam";

// Revalidate the page every 60 seconds (ISR)
export const revalidate = 60;

export default async function Home() {
  const team = await getTeam();

  return (
    <>
      <LandingPage />
      <MeetTheTeam team={team} />
    </>
  );
}
