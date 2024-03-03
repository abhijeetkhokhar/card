import React from 'react'
import styles from "./Card.module.css"

export default function Card(props) {
  return (
    
        <div className={styles.cardContainer}>
            <img src={props.pic} className={styles.cardImageTop} alt="nature"/>
            <div className={styles.cardBody}>
                        <li>Name : {props.name}</li>
                        <li>Age : {props.age}</li>
                        <li>Phone : {props.phone}</li>
                        <li>Profession : {props.profession}</li>
            </div>
        </div>
     
  );
}

                    
                    
                    
