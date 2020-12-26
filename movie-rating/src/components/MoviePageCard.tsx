import * as React from 'react'
import { MovieInfo, Reaction } from '../types/types.d'
import { useAuth0 } from '@auth0/auth0-react'

type MoviePageCardProps = {
    movie: MovieInfo
    userReaction: Reaction
    likes: number
    dislikes: number
}


export const MoviePageCard = (props: MoviePageCardProps) => {

    const { user, isAuthenticated } = useAuth0();

    const [userReaction, setUserReaction]: [Reaction, (userReaction: Reaction) => void] = React.useState(
        props.userReaction
    )

    const sendReactionToApi = async (liked: boolean, idmbID: string) => {
        var dateinfo = new Date();
        const reaction: Reaction = {
            idmbId: idmbID,
            userId: user.sub,
            cdate: dateinfo.getDate().toLocaleString(),
            reaction1: "None",
            ctime: dateinfo.getTime().toString()
        };
        if(liked){
            reaction.reaction1 = "Liked";
        }else{
            reaction.reaction1 = "Disliked";
        }
        const api_url = `https://localhost:44361/api/Reactions`;
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reaction)
        };
        let response = await fetch(api_url, requestOptions);
        let responseJson = await response.json();
        if(responseJson){
            setUserReaction(reaction);
        }
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <img className="col-md-auto" src={props.movie.Poster} alt={props.movie.Title}/>
                    <div className="mt-2 d-flex justify-content-center">
                        <button 
                            type="button" 
                            className={props.userReaction.reaction1 === 'Liked' ? "btn btn-light mr-4" : "btn btn-outline-light mr-4"}
                            disabled={!isAuthenticated} 
                            onClick={() => sendReactionToApi(true, props.movie.imdbID)}
                        >
                            <i className="fa fa-thumbs-o-up"> Like {props.likes}</i>
                        </button>
                        <button 
                            type="button" 
                            className={props.userReaction.reaction1 === 'Disliked' ? "btn btn-light mr-4" : "btn btn-outline-light mr-4"} 
                            disabled={!isAuthenticated} 
                            onClick={() => sendReactionToApi(false, props.movie.imdbID)}
                        >
                            <i className="fa fa-thumbs-o-down"> Dislike {props.dislikes}</i>
                        </button>
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