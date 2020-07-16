import React from 'react'
import {connect} from 'react-redux'
import './../style/style.css'
const Index  = (props)=>{
    const {product}=props
    return(
    <div className="col-md-3">
        <div class="card card-cascade narrower">
            <div class="view view-cascade overlay">
            <img class="card-img-top" src={product.image}
                alt="Card image cap"/>
            <a>
                <div class="mask rgba-white-slight"></div>
            </a>
            </div>
            <div class="card-body card-body-cascade">
            
            <h5 class="font-weight-bold card-title">Cheat day inspirations</h5>
            <h5>{product.price} VND</h5>
            <p class="card-text">{product.description}</p>
            <div className="btn-flex">
                <a class="btn btn-unique">ADD</a>
                <a href="#!" class="orange-text d-flex flex-row-reverse p-2">
                <h5 class="waves-effect waves-light">Read more<i class="fas fa-angle-double-right ml-2"></i></h5>
                </a>
            </div>
            </div>
        </div>
    </div>
    )
}
export default Index