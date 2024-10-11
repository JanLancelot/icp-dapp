import { CreateOrganizationProfile } from '@/frontend/components/create-organization-profile'
import { FooterComponent } from '@/frontend/components/footer'
import { NavbarComponent } from '@/frontend/components/navbar'

export default function CreateOrgProfile() {
  return (
    <div>
        <NavbarComponent />
        <CreateOrganizationProfile />
        <FooterComponent />
    </div>
  )
}
