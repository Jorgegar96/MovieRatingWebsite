import * as React from 'react'
import { MovieInfo } from '../types/types.d'
import { RouteComponentProps } from 'react-router-dom'
import { MoviePageCard } from './MoviePageCard'
import { CommentSection } from './CommentsSection'

interface PropsMoviePage extends RouteComponentProps<PropsMovieState> {
    
}

interface PropsMovieState  {
    idmbID: ""
}


export const MoviePage = (props: PropsMoviePage) => {

    const defaulMovieInfo: MovieInfo = {
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

    const [movieInfoCard, setMovieInfoCard]: [MovieInfo, (movieCard: MovieInfo) => void] = React.useState(
        defaulMovieInfo
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
        console.log(responseJson[0].reaction1);
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


