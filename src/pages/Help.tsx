import { FooterComponent } from '@/components/footer'
import { HelpCenterComponent } from '@/components/help-center'
import { NavbarComponent } from '@/components/navbar'
import React from 'react'

export default function Help() {
  return (
    <div>
        <NavbarComponent />
        <HelpCenterComponent />
        <FooterComponent />
    </div>
  )
}
