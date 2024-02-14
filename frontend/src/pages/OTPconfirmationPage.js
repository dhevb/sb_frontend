import React from 'react'
import OTPconfirmation from '../features/auth/components/OTPconfirmation'
import Header from '../features/navbar/Header'
import FooterBottom from '../features/footer/FooterBottom'

export default function OTPconfirmationPage() {
  return (
    <div>
      <Header/>
      <OTPconfirmation/>
      <FooterBottom/>
    </div>
  )
}
