import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css"
import './style/style.css'
const setting = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 500000000
  };
const Index =(props) =>{
    return(
        <section className="slider_commentProduct">
               <div className="container">
                   <div className="row">
                       <div className="col-md-4">
                            <div className="title">
                                <h5 class="font-weight-bold">ĐÁNH GIÁ SẢN PHẨM</h5>
                            </div>
                            <Slider {...setting}>
                                <div>
                                    <div className="image_slider_commentProduct">
                                        <img src="http://khanhkhiem.com/wp-content/uploads/2017/12/anh-thien-nhien-dep.jpeg"/>
                                    </div>
                                    <div className="infomation_slider_commentProduct">
                                        <p class="font-weight-bold">Chả Cá Nha Trang</p>
                                        <h6 class="font-weight-bold">15.000 VND</h6>
                                        <p class="waves-effect waves-light">Read more<i class="fas fa-arrow-circle-right ml-2"></i></p>
                                    </div>
                                </div>
                                <div>
                                    <div className="image_slider_commentProduct">
                                        <img src="http://khanhkhiem.com/wp-content/uploads/2017/12/anh-thien-nhien-dep.jpeg"/>
                                    </div>
                                    <div className="infomation_slider_commentProduct">
                                        <p class="font-weight-bold">Chả Cá Nha Trang</p>
                                        <h6 class="font-weight-bold">15.000 VND</h6>
                                        <p class="waves-effect waves-light">Read more<i class="fas fa-arrow-circle-right ml-2"></i></p>
                                    </div>
                                </div>
                                <div>
                                    <div className="image_slider_commentProduct">
                                        <img src="http://khanhkhiem.com/wp-content/uploads/2017/12/anh-thien-nhien-dep.jpeg"/>
                                    </div>
                                    <div className="infomation_slider_commentProduct">
                                        <p class="font-weight-bold">Chả Cá Nha Trang</p>
                                        <h6 class="font-weight-bold">15.000 VND</h6>
                                        <p class="waves-effect waves-light">Read more<i class="fas fa-arrow-circle-right ml-2"></i></p>
                                    </div>
                                </div>
                                <div>
                                    <div className="image_slider_commentProduct">
                                        <img src="http://khanhkhiem.com/wp-content/uploads/2017/12/anh-thien-nhien-dep.jpeg"/>
                                    </div>
                                    <div className="infomation_slider_commentProduct">
                                        <p class="font-weight-bold">Chả Cá Nha Trang</p>
                                        <h6 class="font-weight-bold">15.000 VND</h6>
                                        <p class="waves-effect waves-light">Read more<i class="fas fa-arrow-circle-right ml-2"></i></p>
                                    </div>
                                </div>
                                <div>
                                    <div className="image_slider_commentProduct">
                                        <img src="http://khanhkhiem.com/wp-content/uploads/2017/12/anh-thien-nhien-dep.jpeg"/>
                                    </div>
                                    <div className="infomation_slider_commentProduct">
                                        <p class="font-weight-bold">Chả Cá Nha Trang</p>
                                        <h6 class="font-weight-bold">15.000 VND</h6>
                                        <p class="waves-effect waves-light">Read more<i class="fas fa-arrow-circle-right ml-2"></i></p>
                                    </div>
                                </div>
                                <div>
                                    <div className="image_slider_commentProduct">
                                        <img src="http://khanhkhiem.com/wp-content/uploads/2017/12/anh-thien-nhien-dep.jpeg"/>
                                    </div>
                                    <div className="infomation_slider_commentProduct">
                                        <p class="font-weight-bold">Chả Cá Nha Trang</p>
                                        <h6 class="font-weight-bold">15.000 VND</h6>
                                        <p class="waves-effect waves-light">Read more<i class="fas fa-arrow-circle-right ml-2"></i></p>
                                    </div>
                                </div>
                           </Slider>
                       </div>
                     
                       <div className="col-md-4">
                            <div className="title">
                                <h5 class="font-weight-bold">SẢN PHẨM ĐƯỢC ƯA CHUỘNG</h5>
                            </div>
                            <Slider {...setting}>
                                <div>
                                    <div className="image_slider_commentProduct">
                                        <img src="http://khanhkhiem.com/wp-content/uploads/2017/12/anh-thien-nhien-dep.jpeg"/>
                                    </div>
                                    <div className="infomation_slider_commentProduct">
                                        <p class="font-weight-bold">Chả Cá Nha Trang</p>
                                        <h6 class="font-weight-bold">15.000 VND</h6>
                                        <p class="waves-effect waves-light">Read more<i class="fas fa-arrow-circle-right ml-2"></i></p>
                                    </div>
                                </div>
                                <div>
                                    <div className="image_slider_commentProduct">
                                        <img src="http://khanhkhiem.com/wp-content/uploads/2017/12/anh-thien-nhien-dep.jpeg"/>
                                    </div>
                                    <div className="infomation_slider_commentProduct">
                                        <p class="font-weight-bold">Chả Cá Nha Trang</p>
                                        <h6 class="font-weight-bold">15.000 VND</h6>
                                        <p class="waves-effect waves-light">Read more<i class="fas fa-arrow-circle-right ml-2"></i></p>
                                    </div>
                                </div>
                                <div>
                                    <div className="image_slider_commentProduct">
                                        <img src="http://khanhkhiem.com/wp-content/uploads/2017/12/anh-thien-nhien-dep.jpeg"/>
                                    </div>
                                    <div className="infomation_slider_commentProduct">
                                        <p class="font-weight-bold">Chả Cá Nha Trang</p>
                                        <h6 class="font-weight-bold">15.000 VND</h6>
                                        <p class="waves-effect waves-light">Read more<i class="fas fa-arrow-circle-right ml-2"></i></p>
                                    </div>
                                </div>
                                <div>
                                    <div className="image_slider_commentProduct">
                                        <img src="http://khanhkhiem.com/wp-content/uploads/2017/12/anh-thien-nhien-dep.jpeg"/>
                                    </div>
                                    <div className="infomation_slider_commentProduct">
                                        <p class="font-weight-bold">Chả Cá Nha Trang</p>
                                        <h6 class="font-weight-bold">15.000 VND</h6>
                                        <p class="waves-effect waves-light">Read more<i class="fas fa-arrow-circle-right ml-2"></i></p>
                                    </div>
                                </div>
                                <div>
                                    <div className="image_slider_commentProduct">
                                        <img src="http://khanhkhiem.com/wp-content/uploads/2017/12/anh-thien-nhien-dep.jpeg"/>
                                    </div>
                                    <div className="infomation_slider_commentProduct">
                                        <p class="font-weight-bold">Chả Cá Nha Trang</p>
                                        <h6 class="font-weight-bold">15.000 VND</h6>
                                        <p class="waves-effect waves-light">Read more<i class="fas fa-arrow-circle-right ml-2"></i></p>
                                    </div>
                                </div>
                                <div>
                                    <div className="image_slider_commentProduct">
                                        <img src="http://khanhkhiem.com/wp-content/uploads/2017/12/anh-thien-nhien-dep.jpeg"/>
                                    </div>
                                    <div className="infomation_slider_commentProduct">
                                        <p class="font-weight-bold">Chả Cá Nha Trang</p>
                                        <h6 class="font-weight-bold">15.000 VND</h6>
                                        <p class="waves-effect waves-light">Read more<i class="fas fa-arrow-circle-right ml-2"></i></p>
                                    </div>
                                </div>
                           </Slider>
                       </div>
                     
                       <div className="col-md-4">
                            <div className="title programme-sale">
                                <h5 class="font-weight-bold">CHƯƠNG TRÌNH KHUYẾN MÃI </h5>
                                <img src="https://lh3.googleusercontent.com/proxy/EH0i8dgSF_7FrxrR5HL_LpUhL1kX697-kQNKP51CPPGv1dDFsDhID2lGkMLL6LKdW_bpPX0CHgQYqE-VzclZWlSxKNQh_qLrxEuQ6pOGHCM0QlDZ5H6xKqTnMxeK-bmJWSMELeqK_gjcEBD-D2_5LH16G1yIH20" width="55"/> 
                            </div>
                            <Slider {...setting}>
                                <div>
                                    <div className="image_slider_commentProduct">
                                        <img src="http://khanhkhiem.com/wp-content/uploads/2017/12/anh-thien-nhien-dep.jpeg"/>
                                    </div>
                                    <div className="infomation_slider_commentProduct">
                                        <p class="font-weight-bold">Chả Cá Nha Trang</p>
                                        <h6 class="font-weight-bold">15.000 VND</h6>
                                        <p class="waves-effect waves-light">Read more<i class="fas fa-arrow-circle-right ml-2"></i></p>
                                    </div>
                                </div>
                                <div>
                                    <div className="image_slider_commentProduct">
                                        <img src="http://khanhkhiem.com/wp-content/uploads/2017/12/anh-thien-nhien-dep.jpeg"/>
                                    </div>
                                    <div className="infomation_slider_commentProduct">
                                        <p class="font-weight-bold">Chả Cá Nha Trang</p>
                                        <h6 class="font-weight-bold">15.000 VND</h6>
                                        <p class="waves-effect waves-light">Read more<i class="fas fa-arrow-circle-right ml-2"></i></p>
                                    </div>
                                </div>
                                <div>
                                    <div className="image_slider_commentProduct">
                                        <img src="http://khanhkhiem.com/wp-content/uploads/2017/12/anh-thien-nhien-dep.jpeg"/>
                                    </div>
                                    <div className="infomation_slider_commentProduct">
                                        <p class="font-weight-bold">Chả Cá Nha Trang</p>
                                        <h6 class="font-weight-bold">15.000 VND</h6>
                                        <p class="waves-effect waves-light">Read more<i class="fas fa-arrow-circle-right ml-2"></i></p>
                                    </div>
                                </div>
                                <div>
                                    <div className="image_slider_commentProduct">
                                        <img src="http://khanhkhiem.com/wp-content/uploads/2017/12/anh-thien-nhien-dep.jpeg"/>
                                    </div>
                                    <div className="infomation_slider_commentProduct">
                                        <p class="font-weight-bold">Chả Cá Nha Trang</p>
                                        <h6 class="font-weight-bold">15.000 VND</h6>
                                        <p class="waves-effect waves-light">Read more<i class="fas fa-arrow-circle-right ml-2"></i></p>
                                    </div>
                                </div>
                                <div>
                                    <div className="image_slider_commentProduct">
                                        <img src="http://khanhkhiem.com/wp-content/uploads/2017/12/anh-thien-nhien-dep.jpeg"/>
                                    </div>
                                    <div className="infomation_slider_commentProduct">
                                        <p class="font-weight-bold">Chả Cá Nha Trang</p>
                                        <h6 class="font-weight-bold">15.000 VND</h6>
                                        <p class="waves-effect waves-light">Read more<i class="fas fa-arrow-circle-right ml-2"></i></p>
                                    </div>
                                </div>
                                <div>
                                    <div className="image_slider_commentProduct">
                                        <img src="http://khanhkhiem.com/wp-content/uploads/2017/12/anh-thien-nhien-dep.jpeg"/>
                                    </div>
                                    <div className="infomation_slider_commentProduct">
                                        <p class="font-weight-bold">Chả Cá Nha Trang</p>
                                        <h6 class="font-weight-bold">15.000 VND</h6>
                                        <p class="waves-effect waves-light">Read more<i class="fas fa-arrow-circle-right ml-2"></i></p>
                                    </div>
                                </div>
                           </Slider>
                       </div>
                   </div>
               </div>
          </section>
    )
}
export default Index