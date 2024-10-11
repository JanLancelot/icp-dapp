import { FooterComponent } from '@/frontend/components/footer'
import { HelpCenterComponent } from '@/frontend/components/help-center'
import { NavbarComponent } from '@/frontend/components/navbar'

export default function Help() {
  return (
    <div>
        <NavbarComponent />
        <HelpCenterComponent />
        <FooterComponent />
    </div>
  )
}
