import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import logo from '../assets/logo.png'
function Nav () {
  const logoRef = useRef()

  useGSAP(() => {
    gsap.from(logoRef.current, {
      duration: 1,
      opacity: 0,
      y: -20,
      ease: 'power2.inOut'
    })
  })

  return (
    <div className='d-flex justify-content-center'>
      <img src={logo} alt='Logo' className='logo' ref={logoRef} />
    </div>
  )
}
export default Nav
