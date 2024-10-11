import Container from "@/frontend/components/container";
import { VolunteerHero } from "@/frontend/components/volunteer-hero";
import { NavbarComponent } from "@/frontend/components/navbar";
import { VolunteerOpportunitiesComponent } from "@/frontend/components/volunteer-opportunities";
import { LatestOpportunitiesComponent } from "@/frontend/components/latest-opportunities";
import { FooterComponent } from "@/frontend/components/footer";
import PartnerLogosComponent from "@/frontend/components/partner-logos";

export default function Home() {
  return (
    <div>
      <NavbarComponent />
      <VolunteerHero />
      <Container>
        <VolunteerOpportunitiesComponent />
        <LatestOpportunitiesComponent />
      </Container>
      <PartnerLogosComponent />
      <FooterComponent />
    </div>
  );
}
