import * as React from 'react'
import { MovieCardContent } from '../types/types.d'
import { RouteComponentProps } from 'react-router-dom'

interface PropsMoviePage extends RouteComponentProps<{idmbID: string}> {
    
}

interface PropsMovieState  {
    idmbID: string
}

export class MoviePage extends React.Component<PropsMoviePage, PropsMovieState> {
    
    constructor(props: PropsMoviePage){
        super(props);
        this.state = {
            idmbID: this.props.match.params.idmbID
        };
    }

    render() {
    return <div>{this.state.idmbID}</div>
    }
}
