import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css"
const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false
  };
const Index  = (props)=>{
    return(
        <section className="slider">
            <Slider {...settings}>
                    <div>
                        <img src="http://khanhkhiem.com/wp-content/uploads/2017/12/anh-thien-nhien-dep.jpeg"/>
                    </div>
                    <div>
                        <img src="http://2.bp.blogspot.com/-fW5YbCKxLJ0/Uk0lEWU-76I/AAAAAAAAEbU/V4glq-pqbYc/s1600/hinh-anh-thien-nhien-hung-vi-anh-nen-may-tinh-dep-nhat-10.jpg"/>
                    </div>
                    <div>
                        <img src="http://2.bp.blogspot.com/-Ct9Mq9JmE30/U0Km2-Hw5xI/AAAAAAAAF-E/CtQxg5dkCPc/s1600/anh-nen-may-tinh-hd-phong-canh-thien-nhien-dep-nhat-1.jpg"/>
                    </div>
                    <div>
                        <img src="https://thuthuatnhanh.com/wp-content/uploads/2018/07/hinh-nen-phong-canh-thien-nhien-dep-ruc-ro-cho-desktop.jpg"/>
                    </div>
                </Slider>
          </section>
    )
}   
export default Index