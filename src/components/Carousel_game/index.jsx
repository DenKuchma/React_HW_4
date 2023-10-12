import React, { useState } from 'react';
import Thumbnails from '../Thumbnails'; 
import styles from './Carousel.module.css';

function Carousel({ images }) {
    const [isImageEnlarged, setImageEnlarged] = useState(false);
    const handleCenterClick = () => setImageEnlarged(!isImageEnlarged);;
    
    const [currentIndex, setCurrentIndex] = useState(0); // currentIndex =  поточний індекс setCurrentIndex - функція для оновлення поточного індексу
    const handleThumbnailClick = (index) => setCurrentIndex(index);  // handleThumbnailClick = приймає індекс слайду та встановлює нове значення (стан) у поточний індекс (currentIndex)


    const handlePrevClick = () => {
      const newIndex = (currentIndex - 1 + images.length) % images.length; // поточний індекс , віднімаємо одиницю - індекс на яку маємо перейти, додаємо довжину та ділимо на довжину
      // картинка 3 клік назад: (індекс 2 - 1 + довжина 5 ) % 5 = 1 переходимо до картинки 2
      // картинка 5 клік назад: (індекс 4 - 1 + довжина 5 ) % 5 = 3 переходимо до картинки 4
      //картинка 1 клік назад: (індекс -1 + довжина 5 ) % 5 = 4 переходимо до картинки 5
      setCurrentIndex(newIndex);
    };
  
    const handleNextClick = () => {
      const newIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(newIndex);
    };

  
    const handleMainImageClick = (e) => {
      const clickX = e.nativeEvent.offsetX; //координати кліку відносно лівого краю об'єкту
      const imageWidth = e.target.clientWidth; // визначення ширини об'єкту
  
      if (clickX < imageWidth / 3) {
        handlePrevClick();
      } else if (clickX > (imageWidth * 2) / 3) { //500 , 500*2 = 1000, 1000/3 = 333.3
        handleNextClick();
      } else{
        handleCenterClick();
      }
    };
  
    return (
      <div className={styles.carousel}>
        <div className={styles.carousel_image}>
            <img // пропс головного зоображення
            src={images[currentIndex]}
            alt={`images ${currentIndex}`}
            onClick={handleMainImageClick}
            className={isImageEnlarged ? styles.enlargedImage : ''}
            />
        </div>
        <Thumbnails
          images={images}
          current={currentIndex} 
          onChange={handleThumbnailClick} //передамо цю ф-цію, що брозімти при клікі на поточне зоббраженяя змінювати голвне
        />
      </div>
    );
  }
  
  export default Carousel;