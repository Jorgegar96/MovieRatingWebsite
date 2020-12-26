import * as React from 'react';
import { Comment } from '../types/types.d';
import { useAuth0 } from '@auth0/auth0-react'

type WriteCommentProps = {
    idmbID: string
}

export const WriteComment = (props: WriteCommentProps) => {

    const { user, isAuthenticated } = useAuth0();

    const [ ctext, setCtext]: [string, (ctext:string) => void] = React.useState(
        ""
    );

    const sendCommentToApi = async (idmbID: string, text: string) => {
        const dateinfo = new Date();
        const comment: Comment = {
            comment1: text,
            userId: user.sub,
            idmbId: idmbID,
            username: user.name,
            eventdate: dateinfo.toString()
        }

        const api_url = `https://localhost:44361/api/Comments`;
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(comment)
        };
        await fetch(api_url, requestOptions);
    }

    return (
        <div className="container mt-5">
            <div className="form-group">
                <h2 className="text-light d-flex justify-content-center mb-3">Comments</h2>
                <div className="row d-flex justify-content-center">
                    <textarea 
                        name="comment" 
                        id="comment" 
                        className="col-md-8" 
                        rows={3}
                        placeholder={isAuthenticated? '': 'Log In to comment'}
                        disabled={!isAuthenticated}
                        value={ctext}
                        onChange={(event) => setCtext(event?.target.value)}
                    >     
                    </textarea>
                </div>
                <div className="row d-flex justify-content-end">
                    <button className="btn bg-dark text-light mr-5 mt-2" onClick={() => sendCommentToApi(props.idmbID, ctext)}>
                        Post Comment
                    </button>
                    <div className='col-md-2'></div>
                </div>
            </div>
        </div>
    )
}