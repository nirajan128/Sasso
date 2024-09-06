import { useState } from 'react'
import f1 from '/src/assets/f1.png'
import f2 from '/src/assets/f2.png'
import f3 from '/src/assets/f3.png'
import f4 from '/src/assets/f4.png'
import f5 from '/src/assets/f5.png'
import f6 from '/src/assets/f6.png'
import f7 from '/src/assets/f7.png'
import f8 from '/src/assets/f8.png'
import f9 from '/src/assets/f9.png'

const images = [
  { id: 1, src: f1, alt: 'Pizza : Fungi' },
  { id: 2, src: f2, alt: 'Pizza: Dirty South' },
  { id: 3, src: f3, alt: 'Calamari' },
  { id: 4, src: f4, alt: 'Image 4' },
  { id: 5, src: f5, alt: 'Image 5' },
  { id: 6, src: f6, alt: 'Image 6' },
  { id: 7, src: f7, alt: 'Image 7' },
  { id: 8, src: f8, alt: 'Image 8' },
  { id: 9, src: f9, alt: 'Image 9' }
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
              style={{
                cursor: 'pointer',
                objectFit: 'cover',
                height: '100%',
                width: '100%'
              }}
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
