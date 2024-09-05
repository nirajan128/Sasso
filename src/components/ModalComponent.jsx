/* eslint-disable react/prop-types */

function ModalComponent ({ show, handleClose }) {
  return (
    <div
      className={`modal fade ${show ? 'show' : ''}`}
      id='myModal'
      tabIndex='-1'
      aria-labelledby='exampleModalLabel'
      aria-hidden={!show}
      style={{ display: show ? 'block' : 'none' }}
    >
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLabel'>
              My Modal Title
            </h5>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
              onClick={handleClose}
            ></button>
          </div>
          <div className='modal-body'>This is the modal body content.</div>
          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-secondary'
              data-bs-dismiss='modal'
              onClick={handleClose}
            >
              Close
            </button>
            <button
              type='button'
              className='btn btn-primary'
              onClick={handleClose}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalComponent
