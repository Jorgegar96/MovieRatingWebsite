import * as React from 'react'
import { Carousel } from './Carousel'
import { ScrollableCardList } from './ScrollableCardList'


export const Home = () => {
    return(
    <div>
        <Carousel/>
        <ScrollableCardList/>
        <ScrollableCardList/>
    </div>
    )
}
