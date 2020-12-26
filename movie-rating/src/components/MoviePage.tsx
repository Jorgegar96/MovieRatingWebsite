import * as React from 'react'
import { MovieInfo, Reaction } from '../types/types.d'
import { RouteComponentProps } from 'react-router-dom'
import { MoviePageCard } from './MoviePageCard'
import { CommentSection } from './CommentsSection'
import { useAuth0 } from '@auth0/auth0-react' 

interface PropsMoviePage extends RouteComponentProps<PropsMovieState> {
    
}

interface PropsMovieState  {
    idmbID: ""
}


export const MoviePage = (props: PropsMoviePage) => {

    const { user, isAuthenticated } = useAuth0();

    const defaultMovieInfo: MovieInfo = {
        Title: "",
    Year: "",
    Rated: "",
    Released: "",
    Runtime: "",
    Genre: "",
    Director: "",
    Writer: "",
    Actors: "",
    Plot: "",
    Language: "",
    Country: "",
    Awards:"",
    Poster: "",
    Ratings: [
        {
            Source: "",
            Value: ""
        },
        {
            Source: "",
            Value: ""
        },
        {
            Source: "",
            Value: ""
        }
    ],
    Metascore: "",
    imdbRating: "",
    imdbVotes: "",
    imdbID: "",
    Type: "",
    DVD: "",
    BoxOffice: "",
    Production: "",
    Website: "",
    Response: ""
    }

    const defaultReaction: Reaction = {
        id: "None",
        idmbID: "None",
        userID: "None",
        reaction1: "None",
        cdate: "None",
        ctime: "None"
    }

    const [movieInfoCard, setMovieInfoCard]: [MovieInfo, (movieCard: MovieInfo) => void] = React.useState(
        defaultMovieInfo
    )

    const [userReaction, setUserReaction]: [Reaction, (reaction: Reaction) => void] = React.useState(
        defaultReaction
    )

    const getMovieRequest = async (idmbID: string) => {
        let api_url = `http://www.omdbapi.com/?i=${idmbID}&plot=full&apikey=c4ca4c7d`;
        let response = await fetch(api_url);
        let responseJson = await response.json();

        console.log(responseJson)
        if(responseJson){
            setMovieInfoCard(responseJson);
        }

        api_url = `https://localhost:44361/api/Reactions?idmbID=${idmbID}`;
        response = await fetch(api_url);
        responseJson = await response.json();
        console.log(responseJson);
        if(responseJson){
            let likes: number = 0;
            let dislikes: number = 0;
            responseJson.map((reaction: Reaction) => {
                if(reaction.reaction1 === "Liked"){
                    likes++;
                }else{
                    dislikes++;
                }
                if(isAuthenticated && reaction.userID === user.sub){
                    setUserReaction(reaction);
                }
            })
            
            console.log(likes)
        }
    }

    React.useEffect(() => {
        getMovieRequest(props.match.params.idmbID)
    }, []);

    return(
        <div className="container py-5">
                <MoviePageCard movie={movieInfoCard}/>
                <CommentSection/>
        </div>
    )
}


