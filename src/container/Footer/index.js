import React from 'react'
import './style.css'
const  Index =(props)=>{
    return(
        <footer className="footer">
          <div className="container">
              <div className="row">
                  <div className="col-md-4 col-sm-12 col-xs-12">
                      <div className="infor_footer_left">
                          <div className="title-left">
                              <h6 className="font-weight-bold">
                                  CỬA HÀNG BÚN VIỆT HÂN HẠNH ĐƯỢC PHỤC VỤ QÚY KHÁCH
                              </h6>
                              <p>Hãy Liên hệ cho chúng tôi qua số HotLine:<br/> <span>03 8383 xxxx</span></p>
                              <p><span>Địa Chỉ: xxxxxxx.xxxxx.xxxxx</span></p>
                          </div>
                          <div className="social_icon_footer">
                                <a class="btn-floating btn-lg btn-fb" type="button" role="button"><i class="fab fa-facebook-f"></i></a>
                                <a class="btn-floating btn-lg btn-tw" type="button" role="button"><i class="fab fa-twitter"></i></a>
                                <a class="btn-floating btn-lg btn-gplus" type="button" role="button"><i class="fab fa-google-plus-g"></i></a>
                                <a class="btn-floating btn-lg btn-ins" type="button" role="button"><i class="fab fa-instagram"></i></a>
                                <a class="btn-floating btn-lg btn-yt" type="button" role="button"><i class="fab fa-youtube"></i></a>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-4 col-sm-12 col-xs-12 youtube">
                      <div className="title_youtube">
                          <h6 className="font-weight-bold">GOOGLE MAP</h6>
                      </div>
                      <iframe width="560" height="315" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15673.258768236492!2d106.56900366977538!3d10.863652200000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752bfa2d0bba1f%3A0x2d7596c78b0591da!2zUVXDgU4gQsOaTiBDSOG6oiBDw4EgTUnhu4BOIFRSVU5HICggUVXDgU4gSEFJIENI4buKIEVNKQ!5e0!3m2!1svi!2s!4v1594797766067!5m2!1svi!2s"  frameborder="0" allowfullscreen=""  tabindex="0"/>
                  </div>
                  <div className="col-md-4 col-sm-12 col-xs-12 map">
                      <div className="title_map">
                          <h6 className="font-weight-bold">YOUTUBE</h6>
                      </div>
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/F-hNUwfhtfc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
                   </div>
              </div>
          </div>
      </footer>
    )
}
export default Index