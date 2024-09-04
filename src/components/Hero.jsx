import ClippingText from './ClippingText'

function Hero () {
  return (
    <div className='container mt-3 p-3 border border-dark'>
      <div className='goldBackground'>
        <ClippingText caption='Local <br> Fresh <br> Deliciously Saucy' />
      </div>
      <div className='fixed-size'>
        <img src='src/assets/food3.png' alt='Hero' className='image-content' />
      </div>
    </div>
  )
}

export default Hero
