import { useState } from 'react'

export default function Modal() {
  const [visibility, setModal] = useState('hidden')

  const toggleModal = () => {
    setModal(visibility === 'hidden' ? 'shown' : 'hidden')
  }

  return (
    <>
      <div className={`modal ${visibility}`}>
      <div className="overlay" onClick={toggleModal} ></div>
      <div className="modal-box">
        <h2>I am Modal</h2>
      </div>
      </div>
      <button onClick={toggleModal} className='modalBtn'>Open</button>
    </>
  )
}
