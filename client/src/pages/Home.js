import React, { Component } from 'react'
import PhotoBlog from '../components/photoBlog/PhotoBlog'

class Home extends Component {
    render() {
        return (
            <div className="feed">
                <PhotoBlog />
            </div>
        )
    }
}

export default Home
