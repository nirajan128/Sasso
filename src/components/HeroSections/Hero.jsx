import ClippingText from '../ClippingText'

function Hero () {
  return (
    <div className='container heroContainer mt-3 p-3 border border-dark'>
      <div className='goldBackground customShadow'>
        <ClippingText caption='Local <br> Fresh <br> Deliciously Saucy' />
      </div>
      <div className='fixed-size customShadow'>
        <img src='src/assets/food1.png' alt='Hero' className='image-content' />
      </div>
    </div>
  )
}

export default Hero
