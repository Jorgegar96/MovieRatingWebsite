import * as React from 'react'
import { MovieCardContent } from '../types/types.d';
import { MovieCard } from './MovieCard';

type ScrollableCardListProps = {
    movies: Array<MovieCardContent>
    watchlist?: React.ElementType
    wishlistClickHandler: (movie: MovieCardContent) => void
} 

export const ScrollableCardList = (props: ScrollableCardListProps) => {
    return(
        <div className="container-fluid py-2 my-2">
            <div className="d-flex flex-row flex-nowrap overflow-auto scrollbar-primary">
                {props.movies.map(movie => (
                    <div className='col-lg-3 col-md-6 col-sm-12 col-12 d-flex align-items-stretch'>
                        <MovieCard 
                            movie={movie} 
                            watchlist={props.watchlist} 
                            wishlistClickHandler={props.wishlistClickHandler}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
} 