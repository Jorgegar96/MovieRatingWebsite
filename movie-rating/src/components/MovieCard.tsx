import * as React from 'react'
import { isPropertySignature } from 'typescript';
import { MovieCardContent } from '../types/types.d'

type MovieCardProps = {
    movie: MovieCardContent
}

export const MovieCard = (props: MovieCardProps) => {
    return(
        <div className="card mb-4 box-shadow  bg-dark">
            <div className="card-body text-center">
                <img className="card-img-top" src={props.movie.Poster} alt={props.movie.Title}/>
                <p className="card-text text-white mt-2">{props.movie.Title}</p>
            </div>
        </div>
    );
}