import * as React from 'react'

type SearchBoxProps = {
    searchValue: string;
    setSearchValue:  (searchValue: string) => void
}

export const SearchBox = (props: SearchBoxProps) => {
    return(
        <div className="container">
            <div className="row justify-content-md-center">
                <h3 className="text-white">Browse Movies</h3>
            </div>
            <div className="row justify-content-md-center">
                <div className="col col-sm-4 ">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Search for a Movie"
                        value={props.searchValue}
                        onChange={(event) => props.setSearchValue(event?.target.value)}    
                    />
                </div>
            </div>
        </div>
    );
}