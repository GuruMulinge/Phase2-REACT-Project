import React from "react";
import './blog.css';

function BlogDisplay({ post }){
    return(
        <div className='post-display'>
            <h2>{post.title}</h2>
            <img src={post.post_image} alt={post.title} />
            <p>{post.body}</p>
            <p>Author: {post.author}</p>
            <p>Likes:{post.likes}</p>
            <p>Dislikes:{post.dislike}</p>
        </div>
    );
}


export default BlogDisplay;

