import * as React from 'react'
import { Comment } from '../types/types.d'
import { useAuth0 } from '@auth0/auth0-react'

type CommentsListProps = {
    idmbID: string
}

export const CommentsList = (props: CommentsListProps) => {

    const { user, isAuthenticated } = useAuth0();

    let defaultCommentList: Array<Comment> = [
        {
            id: "000",
            comment1: "The movie was pretty good.",
            userId: "001",
            idmbId: "001",
            username: "Messi",
            eventdate: "19:12:06 GMT-0500 (Eastern Standard Time)"
        },
        {
            id: "001",
            comment1: "Really like it towards the end.",
            userId: "002",
            idmbId: "001",
            username: "Alex",
            eventdate: "19:19:06 GMT-0500 (Eastern Standard Time)"
        },
        {
            id: "002",
            comment1: "The movie was pretty good.",
            userId: "003",
            idmbId: "001",
            username: "Andres",
            eventdate: "20:12:06 GMT-0500 (Eastern Standard Time)"
        }
    ]

    const [commentsList, setCommentsList]: [Array<Comment>, (commentsList: Array<Comment>) => void] = React.useState(
        defaultCommentList
    ) 

    const getComments = async (idmbID: string) => {
            const api_url = `https://localhost:44361/api/Comments?idmbID=${idmbID}`;
            const response = await fetch(api_url);
            const responseJson = await response.json();
            if(responseJson){
                const comments: Array<Comment> = responseJson;
                comments.sort((a, b) => ((new Date(a.eventdate)) > (new Date(b.eventdate)) ? 1 : -1))
                setCommentsList(comments);
            }
    }

    const deleteComment = async (id: string) => {
        const api_url = `https://localhost:44361/api/Comments/${id}`
        const requestOptions = {
            method: 'DELETE',
            headers: {},
            body: ''
        }
        const response = await fetch(api_url, requestOptions);
        const responseJson = response.json();
        if(responseJson){
            alert("Your comment has been successfully removed");
            window.location.reload();
        }else{
            alert("An error ocurred while removing your comment");
        }
    }

    React.useEffect(() => {
        getComments(props.idmbID);
    }, [])

    return (
        <div className="container mt-5">
            {commentsList.map(comment => (
                <div className="row d-flex justify-content-center" id={comment.id} key={comment.id}>
                    <div className="card col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{comment.username}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{(new Date(comment.eventdate)).toLocaleString()}</h6>
                            <p className="card-text text-left">{comment.comment1}</p>
                            {isAuthenticated && comment.userId === user.sub ? (
                                <button className="btn bg-danger text-light" onClick={() => deleteComment(comment.id!)}>Delete</button>
                            ):''}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}