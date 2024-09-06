/* eslint-disable react/prop-types */
function ClippingText (props) {
  return (
    <>
      <h1
        className='slogan fw-bolder'
        dangerouslySetInnerHTML={{ __html: props.caption }} // Render HTML element
      ></h1>
      <p className='raleway text-light '>
        Dine in or catch up with us Curbside. {<br />}
        Whichever you prefer {<br />}
        there is nothing we love to do more than serve up your favourite slice!
      </p>
    </>
  )
}

export default ClippingText
