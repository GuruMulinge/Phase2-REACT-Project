import React from "react";
import './post.css';

function PostDisplay({ post }){
    return(
        <div className='post-display'>
            <h4>{post.title}</h4>
            <img src={post_image} alt={post.title} />
            <p>{post.body}</p>
            <p>Author: {post.author}</p>
            <p>Likes:{post.likes} <br> Dislikes:{post.dislike}</p>
        </div>
    );
}


export default PostDisplay;

