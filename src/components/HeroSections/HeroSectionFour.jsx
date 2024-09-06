import f11 from '/src/assets/f11.png'
function HeroSectionFour () {
  return (
    <div className='container mb-5 mt-3 customPadding'>
      <div className='row p-2 '>
        <div className='col-sm-12 col-lg-8  d-flex justify-content-center customShadow'>
          <img src={f11} alt='' className='img-fluid' />
        </div>
        <div className='col-sm-12 col-lg-4 raleway'>
          <div className='d-flex justify-content-center flex-column  h-100 p-3'>
            <h4>CONNECT WITH US</h4>
            <p>
              <span>
                <i
                  className='fa-solid fa-phone'
                  style={{ color: '#800000' }}
                ></i>
              </span>
              905 - 526 - 4848
            </p>
            <p>
              <span>
                <i
                  className='fa-solid fa-envelope'
                  style={{ color: '#800000' }}
                ></i>
              </span>
              <a href='mailto:sassopizzasfoh@gmail.com'>
                sassopizzasfoh@gmail.com
              </a>
            </p>

            <button type='button' className='btn btn-dark mt-1'>
              JOIN OUR TEAM
            </button>
            <button type='button' className='btn  btn-dark mt-1'>
              JOIN OUR NEWSLETTER
            </button>
          </div>
        </div>
      </div>
      <div className='row customBg d-flex  justify-content-center align-items-center raleway'>
        <p className='credits text-light p-2 text-center'>
          {' '}
          Designed and Developed by{' '}
          <a href='https://github.com/nirajan128'>@NIRAJAN SHRSETHA</a>
        </p>
      </div>
    </div>
  )
}

export default HeroSectionFour
