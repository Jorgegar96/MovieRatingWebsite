import * as React from 'react'
import { WriteComment } from './WriteComment'
import { CommentsList } from './CommentsList'

type CommentSectionProps = {
    idmbID: string
}

export const CommentSection = (props: CommentSectionProps) => {
    return (
        <div>

            <WriteComment imdbID={props.idmbID}/>
            <CommentsList imdbID={props.idmbID}/>
        </div>
    )
}