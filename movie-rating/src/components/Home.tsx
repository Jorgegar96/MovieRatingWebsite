import * as React from 'react'
import { MovieCardContent } from '../types/types.d'
import { Carousel } from './Carousel'
import { ScrollableCardList } from './ScrollableCardList'
import { SearchBox } from './SearchBox'
import { AddWatchlist } from './AddWatchlist'
import { RemoveWatchlist } from './RemoveWatchlist'
import { useAuth0 } from '@auth0/auth0-react'



export const Home = () => {

    const { user, isAuthenticated } = useAuth0();
    
    let defaultMovieCards: Array<MovieCardContent> = []
    const [popularMovieCards, setPopularMovieCards]: [Array<MovieCardContent>, (movieCards:Array<MovieCardContent>) => void] = React.useState(
        defaultMovieCards
    );
    const [searchMovieCards, setSearchMovieCards]: [Array<MovieCardContent>, (movieCards:Array<MovieCardContent>) => void] = React.useState(
        defaultMovieCards
    );
    const [watchlistMovieCards, setWatchlistMovieCards]: [Array<MovieCardContent>, (movieCards:Array<MovieCardContent>) => void] = React.useState(
        defaultMovieCards
    );
    
    const [searchValue, setSearchValue]: [string, (searchValue: string) => void] = React.useState('');

    const getMoviesRequest = async (searchValue: string, setMovieCards: (movieCards:Array<MovieCardContent>) => void) => {
        const api_url = `http://www.omdbapi.com/?s=${searchValue}&apikey=c4ca4c7d`;
        const response = await fetch(api_url);
        const responseJson = await response.json()

        if(responseJson.Search){
            setMovieCards(responseJson.Search)
        }
    };

    React.useEffect(() => {
        getMoviesRequest(searchValue, setSearchMovieCards);
    }, [searchValue]);
    React.useEffect(() => {
        getMoviesRequest('Star wars', setPopularMovieCards);
    }, []);
    React.useEffect(() => {
        getWatchlistMovies();
    }, [])

    const addToWatchlist = async (movie: MovieCardContent) => {

        if(isAuthenticated ){
            let repeated = false;
            watchlistMovieCards.map(wmovie => {
                if(movie.imdbID === wmovie.imdbID){
                    alert("The movie is alreay in your watchlist");
                    repeated = true;
                    return;
                }
            })
            if(!repeated){
                const watchlistMovie: MovieCardContent = {
                    userId: user.sub,
                    imdbID: movie.imdbID,
                    Poster: movie.Poster,
                    Title: movie.Title,
                    eventdate: (new Date()).toString()
                }
                console.log(JSON.stringify(watchlistMovie))
                const api_url = `https://localhost:44361/api/Watchlists`;
                const requestOptions = {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(watchlistMovie)
                }
                const response = await fetch(api_url, requestOptions);
                const responseJson = await response.json();
                if(responseJson){
                    //const newWatchlist = [...watchlistMovieCards, responseJson];
                    getWatchlistMovies()
                }else{
                    alert("An error ocurred while saving to your watchlist")
                }
            }
        }   
    };

    const removeFromWatchlist = async (movie:MovieCardContent) => {
        if(isAuthenticated){

            const api_url = `https://localhost:44361/api/Watchlists/${movie.id}`;
            const requestOptions = {
                method: 'DELETE',
                headers: {},
                body: ''
            }
            const response = await fetch(api_url, requestOptions);
            const responseJson = await response.json();
            if(responseJson){
                getWatchlistMovies();
            }else{
                alert("An error ocurred while removing from your watchlist")
            }
        }   
    }

    const getWatchlistMovies = async () => {
        if(isAuthenticated){
            const api_url = `https://localhost:44361/api/Watchlists?userId=${user.sub}`;
            const response = await fetch(api_url);
            const responseJson = await response.json();
            console.log(responseJson)
            if(responseJson){
                let watchlist: Array<MovieCardContent> = [];
                for(let i=0; i < responseJson.length; i++){
                    const element: MovieCardContent = {
                        id: responseJson[i].id,
                        userId: responseJson[i].userId,
                        imdbID: responseJson[i].imdbId,
                        Title: responseJson[i].title,
                        Poster: responseJson[i].poster,
                        eventdate: responseJson[i].eventdate
                    }
                    watchlist = [...watchlist, element]
                }
                watchlist.sort((a, b) => ((new Date(a.eventdate!)) > (new Date(b.eventdate!)) ? 1 : -1))
                const finalList: Array<MovieCardContent> = []
                
                setWatchlistMovieCards(watchlist);
            }
        }
        
    }

    return(
    <div>
        <Carousel/>
        <h3 className="mx-5 text-white mt-3">Popular Films</h3>
        <ScrollableCardList movies={popularMovieCards} watchlist={AddWatchlist} watchlistClickHandler={addToWatchlist}/>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
        <ScrollableCardList movies={searchMovieCards} watchlist={AddWatchlist} watchlistClickHandler={addToWatchlist}/>
        <h3 className="mx-5 text-white mt-3">Watchlist</h3>
        <ScrollableCardList movies={watchlistMovieCards} watchlist={RemoveWatchlist} watchlistClickHandler={removeFromWatchlist}/>
    </div>
    );
}
