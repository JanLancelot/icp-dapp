import { FooterComponent } from '@/frontend/components/footer'
import { NavbarComponent } from '@/frontend/components/navbar'
import { VolunteerMatchPage } from '@/frontend/components/volunteer-match-page'

export default function Organization() {
  return (
    <div>
        <NavbarComponent />
        <VolunteerMatchPage />
        <FooterComponent />
    </div>
  )
}
