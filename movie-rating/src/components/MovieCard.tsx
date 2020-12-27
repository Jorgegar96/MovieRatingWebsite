import * as React from 'react'
import { isPropertySignature } from 'typescript';
import { Link } from 'react-router-dom'
import { MovieCardContent } from '../types/types.d'
import { useAuth0 } from '@auth0/auth0-react'

type MovieCardProps = {
    movie: MovieCardContent
    watchlist?: React.ElementType
    watchlistClickHandler: (movie: MovieCardContent) => void
}

export const MovieCard = (props: MovieCardProps) => {

    const { isAuthenticated } = useAuth0();

    const WatchlistComponent = props.watchlist ?? 'h2';
    return(
        <div className="card mb-4 box-shadow  bg-dark">
            <div className="card-body text-center">
                <Link to={`/${props.movie.imdbID}`}>
                    <img className="card-img-top" src={props.movie.Poster} alt={props.movie.Title}/>
                </Link>
                <p className="card-text text-white mt-2">{props.movie.Title}</p>
            </div>
            <div 
                className="overlay d-flex align-items-center justify-content-center"
                onClick={ isAuthenticated ? () => (props.watchlistClickHandler(props.movie)) : () => 0}
            >
                <WatchlistComponent text={isAuthenticated ? "Add to Watchlist": "Log In to Add"}/>
            </div>
        </div>
    );
}