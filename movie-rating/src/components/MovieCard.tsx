import * as React from 'react'
import { isPropertySignature } from 'typescript';
import { MovieCardContent } from '../types/types.d'

type MovieCardProps = {
    movie: MovieCardContent
    watchlist?: React.ElementType
    watchlistClickHandler: (movie: MovieCardContent) => void
}

export const MovieCard = (props: MovieCardProps) => {
    const WatchlistComponent = props.watchlist ?? 'h2';
    return(
        <div className="card mb-4 box-shadow  bg-dark">
            <div className="card-body text-center">
                <img className="card-img-top" src={props.movie.Poster} alt={props.movie.Title}/>
                <p className="card-text text-white mt-2">{props.movie.Title}</p>
            </div>
            <div 
                className="overlay d-flex align-items-center justify-content-center"
                onClick={() => props.watchlistClickHandler(props.movie)}
            >
                <WatchlistComponent/>
            </div>
        </div>
    );
}