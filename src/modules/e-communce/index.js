import React from 'react';
import Slider from './slider/index'
import CartProduct from './cartproduct/cartList/index'
import Comment from './slideComment/index'
import LearnAbout from './LearnAbout/index'
import TraditionalFood from './TraditionalFood/index'
import SpecialDish from './SpecialtyDish/index'

const Index =(props)=>{
  return (
      <main className="frame-main">
          <Slider/>
          <CartProduct/>
          <Comment/>
          <LearnAbout/>
          <TraditionalFood/>
          <SpecialDish/>
      </main>
  );
}

export default Index;
