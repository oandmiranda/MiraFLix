import Slider from "react-slick";
import "./carousel.css";

const Carousel = ({ children }) => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "341px",
        slidesToShow: 2,
        speed: 500,
      };

    return (
        <div>
            <Slider { ...settings }>
                { children }
            </Slider>
        </div>
    );
}

export default Carousel;