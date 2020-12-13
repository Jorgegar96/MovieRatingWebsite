import * as React from 'react'
import { MovieCardContent } from '../types/types.d';
import { MovieCard } from './MovieCard';



export const ScrollableCardList = () => {

    let defaultMovieCards: Array<MovieCardContent> = []

    const [movieCards, setMovieCards]: [Array<MovieCardContent>, (movieCards:Array<MovieCardContent>) => void] = React.useState(
        defaultMovieCards
    );

    const getMoviesRequest = async () => {
        const api_url = 'http://www.omdbapi.com/?s=star wars&apikey=c4ca4c7d';
        const response = await fetch(api_url);
        const responseJson = await response.json()

        console.log(responseJson.Search)
        setMovieCards(responseJson.Search)
    }

    React.useEffect(() => {
        getMoviesRequest();
    }, [])

    return(
        <div className="container-fluid py-2 my-2">
            <div className="card-deck">
                <div className="d-flex flex-row flex-nowrap overflow-auto scrollbar-primary">
                    {movieCards.map(movie => (
                        <div className='col-lg-3 col-md-6 col-sm-12 col-12'>
                            <MovieCard movie={movie}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
} 