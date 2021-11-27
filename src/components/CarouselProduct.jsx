import React from 'react'
import { Carousel } from 'react-carousel-minimal'

const CarouselProduct = () => {
  const data = [
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg'

    },
    {
      image: 'https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg'
    },
    {
      image: 'https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg'
    }

  ]

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold'
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold'
  }

  return (
    <div id="carousel-product">
      <div style={{ textAlign: 'center' }}>
        <div style={{
          padding: '0 20px'
        }}
        >
          <Carousel
            data={data}
            time={2000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic
            dots
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails
            thumbnailWidth="100px"
            style={{
              textAlign: 'center',
              maxWidth: '850px',
              maxHeight: '500px',
              margin: '40px auto'
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default CarouselProduct
