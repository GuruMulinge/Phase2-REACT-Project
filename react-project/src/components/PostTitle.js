import React from 'react';
import './post.css';

function PostTitle({ post, handleOnClick }){
    return(
        <div className='post-title' onClick={()=>handleOnClick(post)}>
            <h4>{post.title}</h4>
        </div>
    );
}


export default PostTitle;