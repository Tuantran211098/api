import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router,Route, Switch } from "react-router-dom";
import Header from './../header/index'
import Footer from './../Footer/index'
import Routes from './../../routes'
import Ecommunce from './../../modules/e-communce/index'
import Feature from './../../modules/Features/index'
import NotFound from './../../modules/NotFound/index'
import './../../App.css'

const Index =(props)=>{
  const showRoutes=(Routes)=>{
    var result = null;
    if(Routes.length>0){
      result = Routes.map ((route,index)=>{
        return(
          <Route key={index} path={route.path} component={route.main} exact={route.exact}/>
        )
      })
    }
    return result
  }
  return (
      <Router>
        <Header/>
        <main className="frame-main">
            <Switch>
              {showRoutes(Routes)}
                {/* <Route path='/' component={Ecommunce} exact={true}/>
                <Route path='/feature' component={Feature} exact={false}/>
                <Route path='' component={NotFound} exact={false}/> */}
            </Switch>
        </main>
        <Footer/>
      </Router>
  );
}

export default Index;
