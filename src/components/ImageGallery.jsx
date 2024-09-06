import { useState } from 'react'

const images = [
  { id: 1, src: '/src/assets/f1.png', alt: 'Pizza : Fungi' },
  { id: 2, src: '/src/assets/f2.png', alt: 'Pizza: Dirty South' },
  { id: 3, src: '/src/assets/f3.png', alt: 'Calamari' },
  { id: 4, src: '/src/assets/f4.png', alt: 'Image 4' },
  { id: 5, src: '/src/assets/f5.png', alt: 'Image 5' },
  { id: 6, src: '/src/assets/f6.png', alt: 'Image 6' },
  { id: 7, src: '/src/assets/f7.png', alt: 'Image 7' },
  { id: 8, src: '/src/assets/f8.png', alt: 'Image 8' },
  { id: 9, src: '/src/assets/f9.png', alt: 'Image 9' }
]

function ImageGallery () {
  const [selectedImage, setSelectedImage] = useState(null)

  const openModal = image => {
    setSelectedImage(image)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <div className='container mt-4'>
      <div className='row row-cols-3 g-3'>
        {images.map(image => (
          <div className='col' key={image.id}>
            <img
              src={image.src}
              className='img-fluid rounded gallery-img'
              alt={image.alt}
              onClick={() => openModal(image)}
              style={{ cursor: 'pointer' }}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className='modal fade show'
          style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          onClick={closeModal}
        >
          <div className='modal-dialog modal-dialog-centered'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h3 className='modal-title luckyguy goldColor'>
                  {selectedImage.alt}
                </h3>
                <button
                  type='button'
                  className='btn-close'
                  onClick={closeModal}
                ></button>
              </div>
              <div className='modal-body'>
                <img
                  src={selectedImage.src}
                  className='img-fluid'
                  alt={selectedImage.alt}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ImageGallery
