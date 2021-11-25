import React from 'react'
import CarouselHome from '@/components/CarouselHome'
import CardHome from '@/components/CardHome'

const PagesHome = () => (
  <div id="pages-home" className="container-fluid">
    <div className="container text-center p-3">
      <div className="row my-3">
        <div className="col d-flex justify-content-center points">
          <div className="fab fa-pied-piper-pp mr-3" />
          <p>Earn 1 PulsePoint for every $10</p>
        </div>
        <div className="col d-flex justify-content-center delivery">
          <div className="fas fa-truck mr-3" />
          <p>Free delivery over $500</p>
        </div>
      </div>
    </div>
    <CarouselHome />
    <h3 className="my-3">New Products</h3>
    <CardHome />
  </div>
)

export default PagesHome
