import React from 'react'
import './style/style.css'
const Index = (props)=>{
    return(
        < section className="Learn-About">
              <div className="container">
                  <div className="Learn-About-overlay">
                        <div className="row">
                            <div className="col-md-4">
                                    <div className="learn-about-left">
                                        <h4 className="font-weight-bold" style={{color:'pink'}}>Tìm Hiểu về Bún Việt</h4>
                                        <p>the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                            </div>
                            <div className="col-md-8">
                                    <div className="learn-about-right">
                                         <button type="button" class="btn btn-info">Tìm Hiểu Thêm</button>
                                    </div>
                            </div>
                        </div>
                  </div>
              </div>
          </section>
    )
}
export default Index