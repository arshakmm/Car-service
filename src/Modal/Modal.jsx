import { useEffect, useRef } from 'react'
import styles from './modal.module.css'

const Modal = ({ title, description,  closeModal})=>{
    let menuRef =useRef()
    let bgRef =useRef()
    
    useEffect(() =>{
      let closerModal = (e) =>{     
        if(!menuRef.current.contains(e.target)) {
            closeModal()
        }
      }
      document.addEventListener('mousedown',closerModal);

      return () =>{
        document.removeEventListener('mousedown',closerModal);
      }
    })
    return (
        <div ref={bgRef}className={styles.backgroundModal}>
            <div ref={menuRef} className={styles.modal} >
              <div className={styles.buttonWrapper}>
              <button className={styles.closeButton} onClick={closeModal}>X</button>

              </div>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Modal