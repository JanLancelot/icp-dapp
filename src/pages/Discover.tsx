import { FooterComponent } from "@/components/footer";
import { DiscoverOpportunities } from "@/components/hero-banner-and-search";
import { NavbarComponent } from "@/components/navbar";

export default function () {
  return (
    <div>
      <NavbarComponent />
      <DiscoverOpportunities />
      <FooterComponent />
    </div>
  );
}
