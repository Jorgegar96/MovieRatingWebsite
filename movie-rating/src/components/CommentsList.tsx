import * as React from 'react'
import { Comment } from '../types/types.d'

export const CommentsList = () => {

    let defaultCommentList: Array<Comment> = [
        {
            content: "The movie was pretty good.",
            userId: "001",
            movieId: "001",
            date: "Tue Nov 12 2019",
            time: "19:12:06 GMT-0500 (Eastern Standard Time)"
        },
        {
            content: "Really like id towards the end.",
            userId: "002",
            movieId: "001",
            date: "Tue Nov 15 2019",
            time: "19:19:06 GMT-0500 (Eastern Standard Time)"
        },
        {
            content: "The movie was pretty good.",
            userId: "003",
            movieId: "001",
            date: "Tue Nov 24 2019",
            time: "20:12:06 GMT-0500 (Eastern Standard Time)"
        }
    ]

    const [commentsList, setCommentsList]: [Array<Comment>, (commentsList: Array<Comment>) => void] = React.useState(
        defaultCommentList
    ) 

    return (
        <div className="container mt-5">
            {commentsList.map(comment => (
                <div className="row d-flex justify-content-center">
                <div className="card col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{comment.userId}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{comment.date}</h6>
                        <p className="card-text text-left">{comment.content}</p>
                    </div>
                    </div>
                </div>
            ))}
        </div>
    )
}