import Carousel_game from "../../components/Carousel_game"
import { imagesCarouselArray } from '../../utils/mainConst';

const Carusel = () => {

    return(
        <>
            <Carousel_game  images={imagesCarouselArray}/>
        </>
    )
};

export default Carusel