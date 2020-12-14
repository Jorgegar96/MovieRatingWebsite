import * as React from 'react'
import { MovieCardContent } from '../types/types.d'
import { Carousel } from './Carousel'
import { ScrollableCardList } from './ScrollableCardList'
import { SearchBox } from './SearchBox'
import { AddWatchlist } from './AddWatchlist'
import { RemoveWatchlist } from './RemoveWatchlist'



export const Home = () => {
    
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

    const addToWatchlist = (movie: MovieCardContent) => {
        const newWatchlist = [...watchlistMovieCards, movie];
        setWatchlistMovieCards(newWatchlist);
    };

    const removeFromWatchlist = (movie:MovieCardContent) => {
        const filteredWatchlist = watchlistMovieCards.filter(
            (watchlist) => watchlist.imdbID !== movie.imdbID
        );
        setWatchlistMovieCards(filteredWatchlist);
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
