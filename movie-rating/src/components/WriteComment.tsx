import * as React from 'react'

type WriteCommentProps = {
    idmbID: string
}

export const WriteComment = (props: WriteCommentProps) => {

    

    return (
        <div className="container mt-5">
            <div className="form-group">
                <h2 className="text-light d-flex justify-content-center mb-3">Comments</h2>
                <div className="row d-flex justify-content-center">
                    <textarea name="comment" id="comment" className="col-md-8" rows={3}>
                        
                    </textarea>
                </div>
                <div className="row d-flex justify-content-end">
                    <button className="btn bg-dark text-light mr-5 mt-2">
                        Post Comment
                    </button>
                    <div className='col-md-2'></div>
                </div>
            </div>
        </div>
    )
}