import * as React from 'react'
import { WriteComment } from './WriteComment'
import { CommentsList } from './CommentsList'

export const CommentSection = () => {
    return (
        <div>

            <WriteComment/>
            <CommentsList/>
        </div>
    )
}