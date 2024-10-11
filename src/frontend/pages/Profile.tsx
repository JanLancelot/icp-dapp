import { FooterComponent } from '@/frontend/components/footer'
import { NavbarComponent } from '@/frontend/components/navbar'
import VolunteerDashboard from '@/frontend/components/volunteer-dashboard'

export default function Profile() {
  return (
    <div>
        <NavbarComponent />
        <VolunteerDashboard />
        <FooterComponent />
    </div>
  )
}
