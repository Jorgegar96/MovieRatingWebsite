import * as React from 'react'

export const Carousel = () => {
    return(
        <div className="container">
            <div id="homeCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#homeCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#homeCarousel" data-slide-to="1"></li>
                    <li data-target="#homeCarousel" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="https://cdn.pixabay.com/photo/2020/12/06/17/58/trees-5809559_1280.jpg" alt="First Slide"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Don't know what to watch?</h5>
                            <p>Explore content and discover great films.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://cdn.pixabay.com/photo/2020/12/06/17/58/trees-5809559_1280.jpg" alt="Second Slide"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Help others</h5>
                            <p>Collaborate with thousands of other users to create an extense database of movie ratings.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://cdn.pixabay.com/photo/2020/12/06/17/58/trees-5809559_1280.jpg" alt="Third Slide"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Save to your watchlist</h5>
                            <p>Save films you either with to watch or rate later on.</p>
                        </div>
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
    );
}