import React from 'react';
import styles from './Thumbnails.module.css'

function Thumbnails({ images, current, onChange }) {
    return (
        <div className={styles.thumbnails}>
        {images.map((image, index) => (
            <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            className={index === current ? styles.thumbnails_active : ''}
            onClick={() => onChange(index)} // шоб виклив спрацював лише при клікі
            />
        ))}
        </div>
    );
}

export default Thumbnails;