const images = [
  '/src/assets/food1.png',
  '/src/assets/food2.png',
  '/src/assets/food3.png'
]

function ImageSlider () {
  return (
    <div
      id='carouselExampleSlidesOnly'
      className='carousel slide'
      data-bs-ride='carousel'
    >
      <div className='carousel-inner'>
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
          >
            <img
              src={image}
              className='d-block fixed-size'
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageSlider
