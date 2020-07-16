import React,{useEffect,useState, useReducer} from 'react'
import {connect} from 'react-redux'
import CartItem from './../cartItem/index'
import {get} from 'lodash'
import * as Configs from './../../../../constants/config'
import './../style/style.css'
import CallApi from './../../../../utils/callApi'
const Index  = (props,)=>{
        useEffect(()=>{
            CallApi('vi-dish','GET',null).then(res=>{   
              console.log(res)
            })
        });
    const {product}=props
  
    console.log(product)
    const showProduct=(product)=>{
        var result= null;
        if(product.length>0){
            result = product.map((product,index)=>{
                return(
                    <CartItem key={index} product={product}/>
                )
            })
        }
         return result;
    }
    return(
        <section className="cartProducts vi-dish">
        <div className="container">
            <div className="row cartProducts-title ">
                <h5 class="font-weight-bold card-title">MÓN VIỆT</h5>
                <p class="card-title">XEM TIẾP <i class="fas fa-arrow-right ml-2"></i></p>
            </div>
            <div className="row">
                {showProduct(product)}
            </div>
        </div>
  </section>
    )
}
const mapStateToProp = state =>{
    return{
        product:state.CartProduct
    }
}
export default connect(mapStateToProp,null)(Index)