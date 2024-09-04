import f11 from '/src/assets/f11.png'
function HeroSectionFour () {
  return (
    <div className='container mb-5 mt-3'>
      <div className='row p-2 '>
        <div className='col-sm-12 col-lg-8 border border-black d-flex justify-content-center customShadow'>
          <img src={f11} alt='' className='img-fluid' />
        </div>
        <div className='col-sm-12 col-lg-4 open-sans'>
          <div className='d-flex justify-content-center flex-column  h-100'>
            <h4>Join Us</h4>
            <button type='button' className='btn btn-dark mt-1'>
              TEAM
            </button>
            <button type='button' className='btn  btn-dark mt-1'>
              NEWSLETTER
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSectionFour
