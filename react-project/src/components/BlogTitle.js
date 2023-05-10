import React from 'react';
import './blog.css';

function BlogTitle({ post, handleOnClick }){
    return(
        <div className='post-title' onClick={()=>handleOnClick(post)}>
            <h4>{post.title}</h4>
        </div>
    );
}


export default BlogTitle;