import { FooterComponent } from "@/frontend/components/footer";
import { DiscoverOpportunities } from "@/frontend/components/hero-banner-and-search";
import { NavbarComponent } from "@/frontend/components/navbar";

export default function discoverArea() {
  return (
    <div>
      <NavbarComponent />
      <DiscoverOpportunities />
      <FooterComponent />
    </div>
  );
}
