import { useState } from 'react'
import Modal from '../Modal/Modal'
import style from './header.module.css'


export const Header=()=>{
   const [isShow,setShow]=useState(false)

   const openModal =()=>{
     setShow(true)
   }
   const closeModal =()=>{
     setShow(false)
   }

   return  <div className={style.headerApp}>
     
      <div>Car Service</div>
      <div className={style.headerWrraper}>
         
         <div>
            <button className={style.carListButn} onClick={openModal}>Car List</button>
            {isShow ? <Modal title="Titel " description='Information' closeModal={closeModal} />:false }
         </div>
         <div>Service List</div>
         <div>About us</div>
      </div>
   
   </div>
}