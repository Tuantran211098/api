import React from 'react'
import './style/style.css'
const $ = window.jQuery
$(document).ready(function(){
  $('.responsive').slick({
      dots: true,
      infinite: true,
      speed: 3000,
      autoplay:true,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
});
const Index =(props)=>{
    return(
        <section className="scroll-foods">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                      <div className="title-scroll-foods">
                          <h5 className="font-weight-bold">
                              MÓN ĐẶC SẢN MIỀN TRUNG
                          </h5>
                      </div>
                    <div className="responsive" >
                      <div>
                          <img class="card-img-top" src="https://massageishealthy.com/wp-content/uploads/2019/06/hinh-anh-do-an-hinh-anh-mon-an-thuc-an-ngon-dep-viet-nam-the-gioi-1.jpg"/>
                          <h5 className="font-weight-bold">BÚN BÒ</h5>
                      </div>
                      <div>
                          <img class="card-img-top" src="https://massageishealthy.com/wp-content/uploads/2019/06/hinh-anh-do-an-hinh-anh-mon-an-thuc-an-ngon-dep-viet-nam-the-gioi-1.jpg"/>
                          <h5 className="font-weight-bold">BÚN BÒ CHẢ CÁ</h5>
                      </div>
                      <div>
                          <img class="card-img-top" src="https://massageishealthy.com/wp-content/uploads/2019/06/hinh-anh-do-an-hinh-anh-mon-an-thuc-an-ngon-dep-viet-nam-the-gioi-1.jpg"/>
                          <h5 className="font-weight-bold">BÚN BÒ THÁT LÁT</h5>
                      </div>
                      <div>
                          <img class="card-img-top" src="https://massageishealthy.com/wp-content/uploads/2019/06/hinh-anh-do-an-hinh-anh-mon-an-thuc-an-ngon-dep-viet-nam-the-gioi-1.jpg"/>
                          <h5 className="font-weight-bold">BÚN BÒ TÁI</h5>
                      </div>
                      <div>
                          <img class="card-img-top" src="https://massageishealthy.com/wp-content/uploads/2019/06/hinh-anh-do-an-hinh-anh-mon-an-thuc-an-ngon-dep-viet-nam-the-gioi-1.jpg"/>
                          <h5 className="font-weight-bold">BÚN BÒ GIÒ GÂN</h5>
                      </div>
                      <div>
                          <img class="card-img-top" src="https://massageishealthy.com/wp-content/uploads/2019/06/hinh-anh-do-an-hinh-anh-mon-an-thuc-an-ngon-dep-viet-nam-the-gioi-1.jpg"/>
                          <h5 className="font-weight-bold" style={{textIndent:'5px'}}>BÚN BÒ NẠM CHẢ CÁ</h5>
                      </div>
                  </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Index;