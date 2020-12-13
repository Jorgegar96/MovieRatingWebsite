import * as React from 'react'
import { Carousel } from './Carousel'
import { ScrollableCardList } from './ScrollableCardList'


export const Home = () => {
    return(
    <div>
        <Carousel/>
        <h3 className="mx-5 text-white mt-3">Popular Films</h3>
        <ScrollableCardList/>
        <ScrollableCardList/>
    </div>
    )
}
