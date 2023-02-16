import { useEffect, useState } from 'react';
import styles from './main.module.css'
const Main =()=>{
    const [cars,setCars]=useState([])

    const fetchData =()=>{
        fetch('https://private-anon-08f7fd1860-carsapi1.apiary-mock.com/manufacturers')
        .then((response) => response.json())
        .then((data) =>setCars(data) );
    }
    useEffect(() =>{
     fetchData()

    },[])
    return <div className={styles.mainContainer}>
    
        <div className={styles.mainCard}>

            <div className={styles.qareContainer}>Helooo  
            <div>
      {(
        <ul>
          {cars.map(car => (
            <li key={car.id}>{car.name}</li>
          ))}
        </ul>
      )}
    </div>
            
            </div>
            <div className={styles.qareContainer}>Helooo  </div>
            <div className={styles.qareContainer}>Helooo  </div>
        </div>
        <div className={styles.infoWrapper}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ducimus, magni deleniti rem voluptatum repellendus!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ducimus, magni deleniti rem voluptatum repellendus!
        </div>
        <div className={styles.mainCard}>
            <div className={styles.qareContainer}>Our professional skills  </div>
            <div className={styles.qareContainer}>Our professional skills  </div>
            <div className={styles.qareContainer}>Our professional skills   </div>
        </div>
        <div className={styles.infoWrapper}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ducimus, magni deleniti rem voluptatum repellendus!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ducimus, magni deleniti rem voluptatum repellendus!
        </div>


    </div>
}

export default Main