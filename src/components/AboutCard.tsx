import * as React from 'react'
import { AboutCardContent } from '../types/types.d'

type AboutCardProps = {
    content: AboutCardContent
}

export const AboutCard = (props: AboutCardProps) => {
    return(
        <div className="card mb-4 box-shadow p-4">
            <div className="card-body">
                <img className="card-img-top mx-auto" src={props.content.image} alt={props.content.img_alt}/>
                <p className="card-text text-muted text-center mt-5">{props.content.text}</p>
            </div>
        </div>
    )
}