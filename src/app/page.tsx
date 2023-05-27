// @react-client
import {
  ContactUs,
  FAQ,
  Footer,
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
      <Footer />
    </main>
  );
}
