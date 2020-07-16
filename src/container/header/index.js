import React from 'react'
import $ from "jquery"
import {Link, Route } from "react-router-dom";
import './style.css'
$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>50){
            $('.navbar').addClass('fixed-Top')
             $('.navbar-brand img').addClass('fixed-img')
        }
        else
        {
            $('.navbar').removeClass('fixed-Top')
            $('.navbar-brand img').removeClass('fixed-img')
        }
    })
})
const MenuLink =({label,to,activeOnlyWhenExact})=>{
    return(
        <Route path={to} label={label} children={({match})=>{
            var match = match ? 'active' : []
            return(
                <li className="nav-item">
                    <Link class="nav-link" to={to}>{label}
                    </Link>
                </li>
            )
        }}
        />
    )
}
const Index =(props)=>{
    return(
        <header className="header">
            <nav class="mb-1 navbar navbar-expand-lg navbar-dark secondary-color">
                <div className="container">
                    <a class="navbar-brand" href="#">
                        <img src="https://www.pinclipart.com/picdir/middle/413-4134129_cartoon-clip-art-hnh-nh-in-thoi-bn.png" style={{width:40+'px'}}/>
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
                        aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent-333">
                        <ul class="navbar-nav mr-auto">
                        <MenuLink to='/' label='HOME' exact={true}/>
                        <MenuLink to='/feature' label='FEATURES' exact={false}/>
                        <MenuLink to='/' label='INTRODUCE' exact={false}/>
                        <MenuLink to='/' label='CART' exact={false}/>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">Món Việt
                            </a>
                            <div class="dropdown-menu dropdown-default" aria-labelledby="navbarDropdownMenuLink-333">
                            <a class="dropdown-item" href="#">Bún Bò</a>
                            <a class="dropdown-item" href="#">Bánh Canh</a>
                            <a class="dropdown-item" href="#">Gòi Cuốn</a>
                            </div>
                        </li>
                        </ul>
                        <ul class="navbar-nav ml-auto nav-flex-icons">
                        <li class="nav-item">
                            <a class="nav-link waves-effect waves-light">
                            <i class="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link waves-effect waves-light">
                            <i class="fab fa-google-plus-g"></i>
                            </a>
                        </li>
                        <li class="nav-item dropdown avatar">
                            <a class="nav-link p-0 dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                                <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg" class="rounded-circle z-depth-0"
                                alt="avatar image" height="35"/>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right dropdown-default"
                            aria-labelledby="navbarDropdownMenuLink-333">
                                <a class="dropdown-item" href="#">Profile</a>
                                <a class="dropdown-item" href="#">Setting</a>
                                <a class="dropdown-item" href="#">Log In</a>
                                <a class="dropdown-item" href="#">Log Out</a>
                            </div>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
      </header>
    )
}
export default Index