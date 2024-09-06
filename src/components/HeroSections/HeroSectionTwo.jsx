function HeroSectionTwo () {
  return (
    <div className='container mb-3'>
      <div className='row p-3 mt-3 '>
        <div className='col-sm-12 col-lg-4 raleway d-flex justify-content-center  flex-column '>
          <h4 className='fw-bold'>Opening Hours</h4>
          <p>Monday - Thursday: 11:30am - 10:00pm</p>
          <p>Friday & Saturday: 11:30am - 11:00pm</p>
          <p>Sunday: 3:00pm - 9:00pm</p>
        </div>
        <div className='col-sm-12 col-lg-8 raleway customShadow'>
          <div className='p-3'>
            <h4 className='fw-bold text-center'>
              How To Make One Of Our Take Home Pizza Kits
            </h4>
          </div>
          <div className='ytv d-flex justify-content-center'>
            <iframe
              width='560'
              height='315'
              src='https://www.youtube.com/embed/S0NUl_aZYUU?si=VBOOeKXlRwWAZTq5'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerPolicy='strict-origin-when-cross-origin'
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSectionTwo
