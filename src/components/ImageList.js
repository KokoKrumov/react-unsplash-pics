import React from 'react';
import ImageCard from "./ImageCard";

const ImageList = (props) => {

    //const images = props.images.map( image => {
    //може да го деструктурираме с
    // const images = props.images.map( {id, description, urls} => {

    const images = props.images.map((image) => {
        // return <img key={image.id} className="img-responsive" src={image.urls.regular} alt="" itemprop="image"/>
        return <ImageCard key={image.id} image={image}/>
    })


    return (
        <div className={`ui grid`}>
            {images}
        </div>
    );
}

export default ImageList;
