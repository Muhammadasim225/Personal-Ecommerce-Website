import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css'
import logo from '../assets/images/37a160169202401.6448bc18bd355.jpg';
import logo1 from '../assets/images/black-friday-super-sale-web-banner-template_120329-3862.jpg';
import logo2 from '../assets/images/Untitled-3.jpg';
import logo3 from '../assets/images/Untitled-4.jpg';
const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        appendDots: dots => (
            <div
                style={{
                    backgroundColor: "transparent",
                    padding: "10px",
                    borderRadius: "10px",
                    margin: "10px",
                }}
            >
                <ul style={{ margin: "30px" }}> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div
                style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: "gray"
                }}
            ></div>
        )
    };

    return (
        <div className="carousel-container w-full h-full">
            <Slider {...settings}>
                <div className="carousel-slide relative ">
                    <img src={logo} alt="Slide 1" className="w-full h-full object-cover"/>
                   
                </div>
                <div className="carousel-slide ">
                    <img src={logo1}/>
                    
                </div>

                <div className="carousel-slide ">
                    <img src={logo2} alt="Slide 1" className="w-full h-full object-cover"/>
                   
                </div>

                <div className="carousel-slide">
                    <img src={logo3} alt="Slide 1" className="w-full h-full object-cover"/>
                   
                </div>
                {/* Add more slides as needed */}
            </Slider>
        </div>
    );
};

export default Carousel;
