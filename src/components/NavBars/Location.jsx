import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

function Location () {
  const locationRef = useRef(null)
  useGSAP(() => {
    gsap.from(locationRef.current, {
      duration: 1,
      opacity: 0,
      y: -20,
      ease: 'power2.inOut'
    })
  })
  return (
    <div className='conatiner-fluid bg-black'>
      <p className='p-2 text-center locationText goldColor' ref={locationRef}>
        1595 Upper James, Hamilton, Ontario L9B 0H7 | 905 - 526 - 4848
      </p>
    </div>
  )
}

export default Location
