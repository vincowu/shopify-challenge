import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../util';
import './photoBlog.scss'


function PhotoBlog(props) {
    const [imageList, setImageList] = useState(null)
    useEffect(() => {
        axios.get(API_URL)
            .then((response) => {
                setImageList(response.data)
                console.log(response.data)
            })

    }, [])
    console.log(imageList)
    return (
        <div className="feed">
            <h1 className="title">Spacestagram</h1>
            {imageList !== null ?
                imageList.map((pic) => {
                    return (
                        <div className="post">
                            <img className="image" src={pic.url} alt="image" />
                            <div className="accordion">
                                <h2 className="accordion__title">{pic.title}</h2>
                                <p className="accordion__info">{pic.date}</p>
                                <p className="accordion__info">{pic.explanation}</p>
                                <button className="accordion__button">Like</button>
                            </div>
                        </div>)
                }) :
                null}
        </div>
    )
}

export default PhotoBlog
