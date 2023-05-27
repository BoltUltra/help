// @react-client
import {
  ContactUs,
  FAQ,
  Hero,
  Navbar,
  OurApp,
  PopularServices,
  Reviews,
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
      <Reviews />
    </main>
  );
}
