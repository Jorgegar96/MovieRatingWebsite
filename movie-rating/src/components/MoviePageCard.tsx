import * as React from 'react'
import { MovieInfo } from '../types/types.d'

type MoviePageCardProps = {
    movie: MovieInfo
}


export const MoviePageCard = (props: MoviePageCardProps) => {
    return(
        <div className="container">
            <div className="row">
                <img className="col-md-4" src={props.movie.Poster} alt={props.movie.Title}/>
                <div className="container col-md-auto">
                    <h3 className="text-white col-md-auto">{props.movie.Title}</h3>
                    <div className="container">
                        <div className="row"> 
                            <div className="col-md-auto text-white">Year: {props.movie.Year}</div>
                        </div>
                        <div className="row"> 
                            <div className="col-md-auto text-white">Director: {props.movie.Director}</div>
                        </div>
                        <div className="row"> 
                            <div className="col-md-auto text-white">Year: {props.movie.Year}</div>
                        </div>
                        <div className="row"> 
                            <div className="col-md-auto text-white">Genre: {props.movie.Genre}</div>
                        </div>
                        <div className="row"> 
                            <div className="col-md-auto text-white">Language: {props.movie.Language}</div>
                        </div>
                        <h3 className="text-white">Plot</h3>
                        <div className="row"> 
                            <div className="col-md-6 text-white"><p>{props.movie.Plot}</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}