import { type } from 'os'
import * as React from 'react'

export type AboutCardContent = {
    text: string
    image: string
    img_alt:string
}

export type MovieCardContent = {
    imdbID: string
    Title: string
    Poster: string
    Year: string
    Type: string
}

export type MovieInfo = {
    Title: string
    Year: string
    Rated: string
    Released: string
    Runtime: string
    Genre: string
    Director: string
    Writer: string
    Actors: string
    Plot: string
    Language: string
    Country: string
    Awards:string
    Poster: string
    Ratings: [
        {
            Source: string
            Value: string
        },
        {
            Source: string
            Value: string
        },
        {
            Source: string
            Value: string
        }
    ]
    Metascore: string
    imdbRating: string
    imdbVotes: string
    imdbID: string
    Type: string
    DVD: string
    BoxOffice: string
    Production: string
    Website: string
    Response: string
}

export type Comment = {
    id?: string
    comment: string
    userId: string
    idmbId: string
    username: string
    cdate: string
    ctime: string
}

export type Reaction = {
    id?: string
    reaction1: string
    userId: string
    idmbId: string
    cdate: string
    ctime: string
}