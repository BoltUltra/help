// @react-client
import { Hero, Navbar, OurApp, PopularServices } from "@/components";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <PopularServices />
      <OurApp />
    </main>
  );
}
