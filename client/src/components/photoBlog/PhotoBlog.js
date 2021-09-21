import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../util';
import './photoBlog.scss';
import LikeButton from '../likeButton/LikeButton';
import { Link } from 'react-router-dom';

function PhotoBlog(props) {
    const [imageList, setImageList] = useState(null)
    const [buttonLoad, setButtonLoad] = useState(false)
    useEffect(() => {
        axios.get(API_URL)
            .then((response) => {
                setImageList(response.data)
            })
    }, [])
    async function loadMore() {
        let newList = []
        setButtonLoad(true)
        await axios.get(API_URL)
            .then((response) => {
                console.log(response.data)
                newList = imageList.concat(response.data)
                setImageList(newList)
                setButtonLoad(false)
            })
    }

    const clickImage = (event) => {
        console.log(event)
        // this.props.history.push(`/${event.key}`)
    }

    return (
        <div className="feed">
            <h1 className="title">Spacestagram</h1>
            {imageList !== null ?
                imageList.map((pic) => {
                    return (
                        <div onClick={clickImage} key={pic.date} className="post">
                            {pic.media_type == "image" ?
                                <img className="media" src={pic.url} alt="image" /> :
                                <iframe className="media" height="300" src={pic.url} frameborder="0" allowtransparency="true" allowfullscreen></iframe>}
                            <div className="accordion">
                                <h2 className="accordion__title">{pic.title}</h2>
                                <p className="accordion__info">{pic.date}</p>
                                <p className="accordion__info">{pic.explanation}</p>
                                <LikeButton />
                            </div>
                        </div>
                    )
                }) :
                null}
            {buttonLoad ?
                <div className="loading">
                    <svg className="loading__image" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z" /></svg>
                </div> :
                <button onClick={loadMore} className="load">Load More</button>
            }
        </div>
    )
}

export default PhotoBlog
