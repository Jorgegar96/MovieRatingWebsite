import * as React from 'react'
import { MovieInfo } from '../types/types.d'

type MoviePageCardProps = {
    movie: MovieInfo
}


export const MoviePageCard = (props: MoviePageCardProps) => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <img className="col-md-auto" src={props.movie.Poster} alt={props.movie.Title}/>
                    <div className="mt-2">
                        <button type="button" className="btn bg-light"><i className="fa fa-thumbs-o-up"></i></button>
                        <button type="button" className="btn bg-light"><i className="fa fa-thumbs-o-down"></i></button>
                    </div>
                </div>
                <div className="container col-md-8">
                    <h3 className="text-white col-md-auto">{props.movie.Title}</h3>
                    <div className="container">
                        <div className="row"> 
                            <div className="col-md-auto text-secondary">Year: {props.movie.Year}</div>
                        </div>
                        <div className="row"> 
                            <div className="col-md-auto text-secondary">Director: {props.movie.Director}</div>
                        </div>
                        <div className="row"> 
                            <div className="col-md-auto text-secondary">Actors: {props.movie.Actors}</div>
                        </div>
                        <div className="row"> 
                            <div className="col-md-auto text-secondary">Genre: {props.movie.Genre}</div>
                        </div>
                        <div className="row"> 
                            <div className="col-md-auto text-secondary">Language: {props.movie.Language}</div>
                        </div>
                        <div className="row"> 
                            <div className="col-md-auto text-secondary">Country: {props.movie.Country}</div>
                        </div>
                        <div className="row"> 
                            <div className="col-md-auto text-secondary">Runtime: {props.movie.Runtime}</div>
                        </div>
                        <h3 className="text-white mt-3">Plot</h3>
                        <div className="row"> 
                            <div className="col-md-10 text-white text-justify"><p>{props.movie.Plot}</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}