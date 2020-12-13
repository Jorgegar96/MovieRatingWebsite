import * as React from 'react'

export const ScrollableCardList = () => {
    return(
        <div className="container-fluid py-2 my-2">
            <div className="d-flex flex-row flex-nowrap overflow-auto scrollbar-primary">
                <div className="col-3">
                    <div className="card card-body">Card</div>
                </div>
                <div className="col-3">
                    <div className="card card-body">Card</div>
                </div>
                <div className="col-3">
                    <div className="card card-body">Card</div>
                </div>
                <div className="col-3">
                    <div className="card card-body">Card</div>
                </div>
                <div className="col-3">
                    <div className="card card-body">Card</div>
                </div>
            </div>
        </div>
    );
} 