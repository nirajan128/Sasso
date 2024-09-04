function ClippingText (props) {
  return (
    <>
      <h1
        className='slogan fw-bolder'
        // eslint-disable-next-line react/prop-types
        dangerouslySetInnerHTML={{ __html: props.caption }} //renders HTML element
      ></h1>
      <p className='raleway text-light '>
        Dine in or catch up with us Curbside. {<br></br>}Whichever you prefer{' '}
        {<br></br>}
        there is nothing we love to do more than serve up your favourite slice!
      </p>
    </>
  )
}

export default ClippingText
