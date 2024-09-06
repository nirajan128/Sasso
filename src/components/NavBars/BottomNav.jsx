import { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ModalComponent from '../ModalComponent'
import menuData from '../../data.js'

function BottomNav () {
  const btnRef1 = useRef(null)
  const btnRef2 = useRef(null)
  const btnRef3 = useRef(null)
  const iconRef1 = useRef(null)
  const iconRef2 = useRef(null)
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  // Reusable animation function
  const animateElement = elementRef => {
    gsap.from(elementRef.current, {
      duration: 1,
      opacity: 0,
      y: -20,
      ease: 'power2.inOut'
    })
  }

  useGSAP(() => {
    ;[btnRef1, btnRef2, btnRef3, iconRef1, iconRef2].forEach(animateElement)
  })

  return (
    <nav className='sticky-bottom-nav bg-black'>
      <div className='container d-flex justify-content-between align-items-center'>
        <div className='social-icons d-flex align-items-center open-sans text-black fw-bold'>
          <a href='https://www.facebook.com' target='_blank'>
            <i className='fab fa-facebook-f' ref={iconRef1}></i>
          </a>
          <a href='https://www.instagram.com' target='_blank'>
            <i className='fab fa-instagram' ref={iconRef2}></i>
          </a>
        </div>
        <div className='nav-buttons raleway fw-bold'>
          <button type='button' className='btn ' ref={btnRef1}>
            Order
          </button>
          <button type='button' className='btn ms-2 ' ref={btnRef2}>
            Reservation
          </button>
          <button
            type='button'
            className='btn ms-2 fw-bold'
            onClick={handleShow}
            ref={btnRef3}
          >
            Menu
          </button>
        </div>
      </div>
      <ModalComponent
        show={show}
        handleClose={handleClose}
        menuData={menuData}
      />{' '}
      {/* ModalComponent integrated here */}
    </nav>
  )
}

export default BottomNav
