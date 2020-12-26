import * as React from 'react'
import { WriteComment } from './WriteComment'
import { CommentsList } from './CommentsList'

type CommentSectionProps = {
    idmbID: string
}

export const CommentSection = (props: CommentSectionProps) => {
    return (
        <div>

            <WriteComment idmbID={props.idmbID}/>
            <CommentsList idmbID={props.idmbID}/>
        </div>
    )
}