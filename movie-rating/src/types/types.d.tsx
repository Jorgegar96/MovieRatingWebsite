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