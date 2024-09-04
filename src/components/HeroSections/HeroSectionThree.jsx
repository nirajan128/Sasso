import ImageGallery from '../ImageGallery'
function HeroSectionThree () {
  return (
    <div className='container d-flex flex-column justify-content-center mt-3'>
      <div className='d-flex flex-row'>
        <h4 className='raleway text-light customBg p-3'>What we Create?</h4>
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
