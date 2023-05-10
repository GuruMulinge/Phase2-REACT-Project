import React from 'react';
import BlogTitle from './BlogTitle';
import './blog.css';


function BlogList({posts, handleOnBlog, handleOnPost }) {
    return(
        <div className = 'blog-list-container'>
            <div className='card-header'>
                <h5>Blog Posts</h5>
                <button className='post-btn' onClick={()=>handleOnPost()}>Add Post</button>
            </div>
            <div className='blog-list'>
                {posts.map(post =>{
                    return(
                        <div>
                        <div onClick={()=>handleOnBlog(post)}>
                            <BlogTitle post={post} key={post.id}/>                           
                        </div>
                        </div>    
                    );
            })}
            </div>
             
        </div>

    );
}


export default BlogList;