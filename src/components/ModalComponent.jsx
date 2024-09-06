/* eslint-disable react/prop-types */

function ModalComponent ({ show, handleClose, menuData }) {
  function checkPrice (itemPrice) {
    if (typeof itemPrice === 'number') {
      return `$${itemPrice.toFixed(2)}`
    } else if (typeof itemPrice === 'object' && itemPrice !== null) {
      const smallPrice = itemPrice.small
        ? `$${itemPrice.small.toFixed(2)}`
        : 'N/A'
      const largePrice = itemPrice.large
        ? `$${itemPrice.large.toFixed(2)}`
        : 'N/A'
      return `${smallPrice} - ${largePrice}`
    } else {
      return 'Price not available'
    }
  }

  return (
    <div
      className={`modal fade ${show ? 'show' : ''}`}
      id='myModal'
      tabIndex='-1'
      aria-labelledby='exampleModalLabel'
      aria-hidden={!show}
      style={{ display: show ? 'block' : 'none' }}
    >
      <div
        className='modal-dialog modal-dialog-scrollable'
        style={{
          maxWidth: '70%',
          margin: 'auto'
        }}
      >
        <div className='modal-content'>
          <div className='modal-header'>
            <h2
              className='modal-title luckyguy text-center goldColor'
              id='exampleModalLabel'
            >
              Menu
            </h2>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
              onClick={handleClose}
            ></button>
          </div>
          <div className='modal-body'>
            <div className='container-fluid raleway p-4'>
              <div className='menu-columns'>
                {menuData.map((section, sectionIndex) => (
                  <div
                    key={sectionIndex}
                    className='menu-section mb-3 border border-dark'
                  >
                    <div className='p-2'>
                      <h3 className='fw-bold goldColor '>{section.title}</h3>
                      {section.menu.map((item, itemIndex) => (
                        <div key={itemIndex} className='mb-3 '>
                          <p className='fw-bold mb-1 menuSize'>
                            {item.name} | {checkPrice(item.price)} |{' '}
                            {item.status}
                          </p>
                          {item.desc && (
                            <p className='mb-0 menuSize'>{item.desc}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-secondary'
              data-bs-dismiss='modal'
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalComponent
