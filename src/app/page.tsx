// @react-client
import {
  ContactUs,
  FAQ,
  Hero,
  Navbar,
  OurApp,
  PopularServices,
} from "@/components";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <PopularServices />
      <OurApp />
      <FAQ />
      <ContactUs />
    </main>
  );
}
