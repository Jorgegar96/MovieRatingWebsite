import * as React from 'react'

export const Home = () => {
    return(
        <div className="container">
            <div id="homeCarousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="https://cdn.pixabay.com/photo/2020/12/06/17/58/trees-5809559_1280.jpg" alt="First Slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://cdn.pixabay.com/photo/2020/12/06/17/58/trees-5809559_1280.jpg" alt="Second Slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://cdn.pixabay.com/photo/2020/12/06/17/58/trees-5809559_1280.jpg" alt="Third Slide"/>
                    </div>
                </div>
            </div>
            <a href="#homeCarousel" className="carousel-control-prev" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span  className="sr-only">Previous</span>
            </a>
            <a href="#homeCarousel" className="carousel-control-next" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}
