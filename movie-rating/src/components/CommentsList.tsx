import * as React from 'react'
import { Comment } from '../types/types.d'

export const CommentsList = () => {

    let defaultCommentList: Array<Comment> = [
        {
            id: "000",
            comment: "The movie was pretty good.",
            userID: "001",
            idmbID: "001",
            username: "Messi",
            cdate: "Tue Nov 12 2019",
            ctime: "19:12:06 GMT-0500 (Eastern Standard Time)"
        },
        {
            id: "001",
            comment: "Really like id towards the end.",
            userID: "002",
            idmbID: "001",
            username: "Alex",
            cdate: "Tue Nov 15 2019",
            ctime: "19:19:06 GMT-0500 (Eastern Standard Time)"
        },
        {
            id: "002",
            comment: "The movie was pretty good.",
            userID: "003",
            idmbID: "001",
            username: "Andres",
            cdate: "Tue Nov 24 2019",
            ctime: "20:12:06 GMT-0500 (Eastern Standard Time)"
        }
    ]

    const [commentsList, setCommentsList]: [Array<Comment>, (commentsList: Array<Comment>) => void] = React.useState(
        defaultCommentList
    ) 

    return (
        <div className="container mt-5">
            {commentsList.map(comment => (
                <div className="row d-flex justify-content-center" id={comment.id} key={comment.id}>
                <div className="card col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{comment.userID}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{comment.cdate}</h6>
                        <p className="card-text text-left">{comment.comment}</p>
                    </div>
                    </div>
                </div>
            ))}
        </div>
    )
}