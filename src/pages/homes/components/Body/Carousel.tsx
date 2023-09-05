import React from 'react'

export default function Carousel() {
  return (
      <div>
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-mdb-ride="carousel"
      >
          <div className="carousel-inner">
              <div className="carousel-item active" data-mdb-interval={10000}>
                  <img
                      src="./public/images/body/carousel/ZERO-2020-OCTOPUS-BANNER_1512x.gif"
                      className="d-block w-100"
                      alt="Wild Landscape"
                  />
              </div>
              <div className="carousel-item" data-mdb-interval={1500}>
                  <img
                      src="./public/images/body/carousel/ZERO-2023-METAFABLES-BANNER2_1512x.jpg"
                      className="d-block w-100"
                      alt="Camera"
                  />
              </div>
              <div className="carousel-item" data-mdb-interval={1500}>
                  <img
                      src="./public/images/body/carousel/ZERO-2023-MISFITS-COLLECTION-BANNER-FINAL_copy_1512x.jpg"
                      className="d-block w-100"
                      alt="Camera"
                  />
              </div>
              <div className="carousel-item">
                  <img
                      src="./public/images/body/carousel/ZERO-2023-SCHOOL-SUCKS-BANNER2_1512x.jpg"
                      className="d-block w-100"
                      alt="Exotic Fruits"
                  />
              </div>
          </div>
          <button
              className="carousel-control-prev"
              data-mdb-target="#carouselExampleInterval"
              type="button"
              data-mdb-slide="prev"
          >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
          </button>
          <button
              className="carousel-control-next"
              data-mdb-target="#carouselExampleInterval"
              type="button"
              data-mdb-slide="next"
          >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
          </button>
      </div>
</div>
  )
}
