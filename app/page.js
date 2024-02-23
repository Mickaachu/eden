import { Hero, AboutUs, BestSeller, CalltoAction,NewArrivals, ThisSeason } from "@/components";

export default function Home() {
  return (
    <main>
      <Hero/>
      <NewArrivals/>
      <ThisSeason/>
      <BestSeller/>
      <CalltoAction/>
      <AboutUs/>
    </main>
  );
}
