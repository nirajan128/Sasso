function BottomNav () {
  return (
    <nav className='sticky-bottom-nav bg-dark'>
      <div className='container d-flex justify-content-between align-items-center'>
        <div className='social-icons d-flex align-items-center'>
          <a href='https://www.facebook.com' target='_blank'>
            <i className='fab fa-facebook-f'></i>
          </a>
          <a href='https://www.instagram.com' target='_blank'>
            <i className='fab fa-instagram'></i>
          </a>
        </div>
        <div className='nav-buttons'>
          <button type='button' className='btn'>
            Order
          </button>
          <button type='button' className='btn ms-2'>
            Reservation
          </button>
        </div>
      </div>
    </nav>
  )
}

export default BottomNav
