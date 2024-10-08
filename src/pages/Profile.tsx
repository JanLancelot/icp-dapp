import { FooterComponent } from '@/components/footer'
import { NavbarComponent } from '@/components/navbar'
import VolunteerDashboard from '@/components/volunteer-dashboard'
import React from 'react'

export default function Profile() {
  return (
    <div>
        <NavbarComponent />
        <VolunteerDashboard />
        <FooterComponent />
    </div>
  )
}
