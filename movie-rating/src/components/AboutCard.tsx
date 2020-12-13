import * React from 'react'

type AboutCardProps = {
    text: string
    image: string
    img_alt: string
}

export const AboutCard = (props: AboutCardProps) => {
    return(
        <div className="col-md-4">
            <div className="card mb-4 box-shadow">
                <img
                    className="card-img-top" 
                    src={props.image} 
                    alt={props.img_alt}
                />
                <div className="card-body">
                    <p className="card-text">
                        {props.text}
                    </p>
                </div>
            </div>
        </div>
    )
}