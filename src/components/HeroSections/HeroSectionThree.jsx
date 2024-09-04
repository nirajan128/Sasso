import ImageGallery from '../ImageGallery'
function HeroSectionThree () {
  return (
    <div className='container d-flex flex-column justify-content-center mt-3'>
      <div className='d-flex flex-row'>
        <p className='raleway text-light customBg p-3 customSize'>
          WHAT WE CREATE ?
        </p>
        <div className='social-icons2 d-flex align-items-center'>
          <a href='https://www.instagram.com' target='_blank'>
            <i className='fab fa-instagram'></i>
          </a>
        </div>
      </div>

      <ImageGallery />
    </div>
  )
}
export default HeroSectionThree
