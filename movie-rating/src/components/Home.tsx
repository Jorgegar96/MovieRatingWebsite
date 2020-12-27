import * as React from 'react'
import { MovieCardContent, Watchlist } from '../types/types.d'
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
        getMoviesRequest('Star wars', setPopularMovieCards)
    }, []);
    React.useEffect(() => {
    }, [])

    const addToWatchlist = async (movie: MovieCardContent) => {

        if(isAuthenticated){
            const watchlistMovie: Watchlist = {
                userId: user.sub,
                idmbId: movie.imdbID,
                movieImage: movie.Poster,
                movieName: movie.Title,
                eventdate: (new Date()).toString()
            }

            const api_url = `https://localhost:44361/api/Watchlists`;
            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(watchlistMovie)
            }
            const response = await fetch(api_url, requestOptions);
            const responseJson = await response.json();
            if(responseJson){
                const newWatchlist = [...watchlistMovieCards, movie];
                setWatchlistMovieCards(newWatchlist);
            }else{
                alert("An error ocurred while saving to your watchlist")
            }
        }   
    };

    const removeFromWatchlist = async (movie:MovieCardContent, watchlistid?: string) => {
        if(isAuthenticated){

            const api_url = `https://localhost:44361/api/Watchlists/${watchlistid}`;
            const requestOptions = {
                method: 'DELETE',
                headers: {},
                body: ''
            }
            const response = await fetch(api_url, requestOptions);
            const responseJson = await response.json();
            if(responseJson){
                const filteredWatchlist = watchlistMovieCards.filter(
                    (watchlist) => watchlist.imdbID !== movie.imdbID
                );
                setWatchlistMovieCards(filteredWatchlist);
            }else{
                alert("An error ocurred while removing from your watchlist")
            }
        }   
    }

    const getWatchlistMovies = async () => {
        if(isAuthenticated){
            const api_url = `https://localhost:44361/api/Watchlists?${user.sub}`;
            const response = await fetch(api_url);
            const responseJson = await response.json();
            if(responseJson){
                const watchlist: Array<Watchlist> = responseJson;
                watchlist.sort((a, b) => ((new Date(a.eventdate)) > (new Date(b.eventdate)) ? 1 : -1))
                
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
