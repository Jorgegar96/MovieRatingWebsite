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
    imdbID: props.match.params.idmbID,
    Type: "",
    DVD: "",
    BoxOffice: "",
    Production: "",
    Website: "",
    Response: ""
    }

    const [movieInfoCard, setMovieInfoCard]: [MovieInfo, (movieCard: MovieInfo) => void] = React.useState(
        defaultMovieInfo
    )

    const getMovieRequest = async (idmbID: string) => {
        const api_url = `http://www.omdbapi.com/?i=${idmbID}&plot=full&apikey=c4ca4c7d`;
        const response = await fetch(api_url);
        const responseJson = await response.json();

        console.log(responseJson)
        if(responseJson){
            setMovieInfoCard(responseJson);
        }

        
    }

    React.useEffect(() => {
        getMovieRequest(props.match.params.idmbID)
    }, []);
 
    return(
        <div className="container py-5">
                <MoviePageCard
                    movie={movieInfoCard} 
                />
                <CommentSection/>
        </div>
    )
}


