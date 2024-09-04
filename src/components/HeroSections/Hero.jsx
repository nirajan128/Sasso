import ClippingText from '../ClippingText'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

function Hero () {
  const bgRef = useRef(null)
  const imgRef = useRef(null)

  const tl = gsap.timeline()

  useGSAP(() => {
    tl.from(bgRef.current, {
      duration: 1,
      opacity: 0,
      y: -20,
      ease: 'power2.inOut'
    }).from(imgRef.current, {
      duration: 1,
      opacity: 0,
      y: -20,
      ease: 'power2.inOut'
    })
  })

  return (
    <div className='container heroContainer mt-3 p-3 border border-dark'>
      <div className='goldBackground customShadow' ref={bgRef}>
        <ClippingText caption='Local <br> Fresh <br> Deliciously Saucy' />
      </div>
      <div className='fixed-size customShadow' ref={imgRef}>
        <img src='src/assets/f12.png' alt='Hero' className='image-content' />
      </div>
    </div>
  )
}

export default Hero
