import { FooterComponent } from '@/frontend/components/footer'
import { NavbarComponent } from '@/frontend/components/navbar'
import { VolunteerApplicationFormComponent } from '@/frontend/components/volunteer-application-form'

export default function VolunteerForm() {
  return (
    <div>
        <NavbarComponent />
        <VolunteerApplicationFormComponent eventTitle="Charity Marathon" />
        <FooterComponent />
    </div>
  )
}
