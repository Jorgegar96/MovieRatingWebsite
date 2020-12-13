import * as React from 'react'
import { Information } from './Information'
import { AboutCard } from './AboutCard'
import starlogo from '..//star-half.svg'
import filmlogo from '..//camera-reels-fill.svg'
import commentlogo from '..//chat-left-text-fill.svg'
import { AboutCardContent } from '../types/types.d'

export const About = () => {

    React.useEffect(() => {

    }, []);

    let defaultAboutCards: Array<AboutCardContent> = [
        {
            text: "Rate any movie you've ever watched",
            image: starlogo,
            img_alt: "Star Logo"
        }, 
        {
            text: "Films from every genre",
            image: filmlogo,
            img_alt: "Film Logo"
        },
        {
            text: "Comment and discuss your opinions with people form around the globe",
            image: commentlogo,
            img_alt: "Comment Logo"
        }
    ]

    const [aboutCards, setAboutCard]: [Array<AboutCardContent>, (aboutCards:Array<AboutCardContent>) => void] = React.useState(
        defaultAboutCards
    );

    return(
        <div>
            <Information/>
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="card-deck">
                            {aboutCards.map(card => (
                                <AboutCard content={card}/>                            
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}