import * as React from 'react'
import { MovieInfo, Reaction } from '../types/types.d'
import { useAuth0 } from '@auth0/auth0-react'

type MoviePageCardProps = {
    movie: MovieInfo
}


export const MoviePageCard = (props: MoviePageCardProps) => {

    const { user, isAuthenticated } = useAuth0();

    const defaultReaction: Reaction = {
        id: "None",
        imdbId: "None",
        userId: "None",
        reaction1: "None",
        eventdate: "None",
    }

    const [userReaction, setUserReaction]: [Reaction, (reaction: Reaction) => void] = React.useState(
        defaultReaction
    )

    const [likes, setLikes]: [number, (likes: number) => void] = React.useState(
        0
    )

    const [dislikes, setDislikes]: [number, (dislikes: number) => void] = React.useState(
        0
    )

    const sendReactionToApi = async (liked: boolean, imdbID: string) => {
        const dateinfo = new Date();
        console.log(likes)
        const reaction: Reaction = {
            imdbId: imdbID,
            userId: user.sub,
            eventdate: dateinfo.toString(),
            reaction1: "None",
        };
        if(liked){
            reaction.reaction1 = "Liked";
        }else{
            reaction.reaction1 = "Disliked";
        }
        let api_url = `${process.env.REACT_APP_BACKEND_SERVER_URL}Reactions`;
        let requestOptions;
        if(userReaction.id === "None"){
            requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(reaction)
            };    
            let response = await fetch(api_url, requestOptions);
            let responseJson = await response.json();
            if(responseJson){
                getMovieReactions(imdbID);
            }
        } else if(userReaction.reaction1 !== reaction.reaction1){
            api_url = api_url.concat(`/${userReaction.id}`);
            reaction.id = userReaction.id;
            requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(reaction)
            };
            await fetch(api_url, requestOptions)
                .then(() => {
                    getMovieReactions(imdbID);
                });
        } else {
            api_url = api_url.concat(`/${userReaction.id}`);
            reaction.id = userReaction.id;
            requestOptions = {
                method: 'DELETE',
                headers: {},
                body: ''
            };
            await fetch(api_url, requestOptions)
                .then(() => {
                    getMovieReactions(imdbID);
                    setUserReaction(defaultReaction);
                });
        }
        
        
    }

    const getMovieReactions = async (idmbID: string) => {
        const api_url = `${process.env.REACT_APP_BACKEND_SERVER_URL}Reactions?idmbID=${idmbID}`;
        const response = await fetch(api_url);
        const responseJson = await response.json();
        console.log(responseJson);
        if(responseJson){
            let clikes: number = 0;
            let cdislikes: number = 0;
            responseJson.map((reaction: Reaction) => {
                if(reaction.reaction1 === "Liked"){
                    clikes++;
                }else{
                    cdislikes++;
                }
                if(isAuthenticated && reaction.userId === user.sub){
                    setUserReaction(reaction);
                }
            })
            setLikes(clikes);
            setDislikes(cdislikes);
        }
    }

    React.useEffect(() => {
        getMovieReactions(props.movie.imdbID)
    }, [])

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <img className="col-md-auto" src={props.movie.Poster} alt={props.movie.Title}/>
                    <div className="mt-2 d-flex justify-content-center">
                        <button 
                            type="button" 
                            className={userReaction.reaction1 === 'Liked' ? "btn btn-light mr-4" : "btn btn-outline-light mr-4"}
                            disabled={!isAuthenticated} 
                            onClick={() => sendReactionToApi(true, props.movie.imdbID)}
                        >
                            <i className="fa fa-thumbs-o-up"> Like {likes}</i>
                        </button>
                        <button 
                            type="button" 
                            className={userReaction.reaction1 === 'Disliked' ? "btn btn-light mr-4" : "btn btn-outline-light mr-4"} 
                            disabled={!isAuthenticated} 
                            onClick={() => sendReactionToApi(false, props.movie.imdbID)}
                        >
                            <i className="fa fa-thumbs-o-down"> Dislike {dislikes}</i>
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